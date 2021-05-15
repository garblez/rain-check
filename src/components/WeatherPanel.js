import React, {Component} from "react";
import {connect} from 'react-redux';

import {getWeather} from '../utils/WeatherAPI.js';
import store from '../redux/store';
import CurrentWeather from './CurrentWeather';


var options = {
    timeout: 5000,
    maximumAge: 0,
};


var updateLocation = (location) => {
    let coords = location.coords;
    store.dispatch({
        type: 'location/update', 
        payload: {lat: coords.latitude, lon: coords.longitude}
    });
}

var defaultLocation = (err) => {
    store.dispatch({
        type: 'location/update', 
        payload: {name: "Glasgow"}
    });
}


// Get the users location: if they have denied the app permission or have not chosen to accept yet, default to Glasgow,
// otherwise, accept the permission and store it in the redux store.
function setLocation() {
    if (navigator.geolocation) {
        navigator.permissions
          .query({ name: "geolocation" })
          .then(result => {
            if (result.state === "granted") {
                // The user has previously consented to giving their location so just store whatever coords they are at
                navigator.geolocation.getCurrentPosition(updateLocation);
            } else if (result.state === "prompt") {
                // Prompt the user for their location and update it correspondingly
                navigator.geolocation.getCurrentPosition(updateLocation, defaultLocation, options);
            } else if (result.state === "denied") {
                // This user did not allow location sharing so default to Glasgow 
                // by not updating from the inital value
            }
        });
    } else {
        // This browser/device cannot provide geolocation - default to Glasgow
        // by not updating the initial value
    }    
    getWeather(store.getState().location)
        .then(weather => store.dispatch({type: 'all/update', payload: weather}))
        .catch(err => console.log("Error: unable to retrieve weather data"));
}



function setWeather() {
    getWeather(store.getState().location)
        .then(weather => store.dispatch({type: 'all/update', payload: weather}))
        .catch(err => console.log("Error: unable to retrieve weather data"));
}



class WeatherPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            place: ''
        }

        setLocation(); // Get the user's current location and store it.
        //setWeather();
        
    }


    render() {

        
/*
        this.unsubscribe = store.subscribe(() => {
            if ("name" in store.getState().location) {
                this.setState({place: store.getState().location.name})
            } else {
                this.setState({place: "Your Current Location"});
            }
        });
        */
       console.log(this.props)
        return (
            <div>
                <h1>Rain Check for {this.props.location.name}</h1>
                <CurrentWeather />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({location: state.location});

export default connect(mapStateToProps)(WeatherPanel);