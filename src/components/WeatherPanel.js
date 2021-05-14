import React, {Component} from "react";

export default class WeatherPanel extends Component {
    componentDidMount() {
        if (navigator.geolocation) {
          navigator.permissions
            .query({ name: "geolocation" })
            .then(function (result) {
              if (result.state === "granted") {
                console.log(result.state);
                //If granted then you can directly call your function here
              } else if (result.state === "prompt") {
                console.log(result.state);
              } else if (result.state === "denied") {
                //If denied then you have to show instructions to enable location
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