import React, {Component} from "react";


var options = {
    timeout: 5000,
    maximumAge: 0,
};


var success = (position) => {
    console.log(`Lat: ${position.coords.latitude}`);
    console.log(`Lon: ${position.coords.longitude}`);
}

var errors = (err) => {
    console.warn(`ERROR CODE ${err.code}: ${err.message}`);
}

export default class WeatherPanel extends Component {

    componentDidMount() {
        if (navigator.geolocation) {
          navigator.permissions
            .query({ name: "geolocation" })
            .then(function (result) {
              if (result.state === "granted") {
                navigator.geolocation.getCurrentPosition(success);
            } else if (result.state === "prompt") {
                navigator.geolocation.getCurrentPosition(success, errors, options);
              } else if (result.state === "denied") {
                // The user denied the app geolocation permissions: set the user location to the
                // default of "q=Glasgow".
              }
              result.onchange = function () {
                console.log(result.state);
              };
            });
        } else {
          alert("Sorry Not available!");
        }
      }
    
      render() {
          return (
              <div>
                  <h1>We have Geolocation.</h1>
              </div>
          );
      }
}