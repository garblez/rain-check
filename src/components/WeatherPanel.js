import React, {Component} from "react";
import {connect} from 'react-redux';

import {getWeather} from '../utils/WeatherAPI.js';
import store from '../redux/store';
import CurrentWeather from './CurrentWeather';

import {updateLocation, updateAll, updateCurrent} from '../redux/actions';

const options = {
    timeout: 5000,
    maximumAge: 0,
};

class WeatherPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            place: ''
        }

        this.setLocation(); // Get the user's current location and store it.
    }

    applyLocation = (location) => {
        let coords = location.coords;
        
        getWeather({lat: coords.latitude, lon: coords.longitude})
            .then(report => {
                this.props.updateAll(report);
            })
            .catch(err => this.props.updateAll({error: "Unable to retrieve weather data"}));

    }
    
    defaultLocation = (err) => {
        
        getWeather({name: "Glasgow"})
            .then(report => this.props.updateAll(report))
            .catch(err => this.props.updateAll({error: "Unable to retrieve weather data"}));

    }


        // Get the users location: if they have denied the app permission or have not chosen to accept yet, default to Glasgow,
    // otherwise, accept the permission and store it in the redux store.
    setLocation() {
        if (navigator.geolocation) {
            navigator.permissions
            .query({ name: "geolocation" })
            .then(result => {
                if (result.state === "granted") {
                    // The user has previously consented to giving their location so just store whatever coords they are at
                    navigator.geolocation.getCurrentPosition(this.applyLocation);
                } else if (result.state === "prompt") {
                    // Prompt the user for their location and update it correspondingly
                    navigator.geolocation.getCurrentPosition(this.applyLocation, this.defaultLocation, options);
                } else if (result.state === "denied") {
                    // This user did not allow location sharing so default to Glasgow 
                    // by not updating from the inital value
                    this.defaultLocation();
                }
            });
        } else {
            // This browser/device cannot provide geolocation - default to Glasgow
            // by not updating the initial value
            this.defaultLocation();
        }
    }


    render() {
        let panel;
        if (this.props) {
            panel = (
                <div>
                <h1>Rain Check for {this.props.name}</h1>
                <CurrentWeather />
                </div>
            );
        } else {
            panel = (
                <div>
                    <h1>Loading weather data...</h1>
                </div>
            );
        }
        return (
            <div>
                {panel}
            </div>
        );
    }
}

const mapStateToProps = (state) => (state.location);

export default connect(mapStateToProps, {updateLocation, updateAll, updateCurrent})(WeatherPanel);