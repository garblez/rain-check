import React, {Component} from "react";

import {getWeather} from '../utils/WeatherAPI.js';

import store from '../store';

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
}

export default class WeatherPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            place: ''
        }
    }

    componentDidMount() {
        setLocation(); // Get the user's current location and store it.

        console.log(getWeather(store.getState()));
    }
    
      render() {
        let location = store.getState().location;
        const unsubscribe = store.subscribe(() => {
            if ("name" in location) {
                this.setState({place: location.name})
            } else {
                this.setState({place: "Your Current Location"});
            }
        });
       
        return (
            <div>
                <h1>Rain Check for {this.state.place}</h1>
            </div>
        );
      }
}