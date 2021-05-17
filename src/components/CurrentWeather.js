import React from 'react';
import {connect} from 'react-redux';

/*
    Report the current weather data retrieved from the API based on the user's location and defaulting to 
    Glasgow if none is given.
*/  
class CurrentWeather extends React.Component {

    render() {
        let weather = this.props;
        
        let report;

        // For allowing the current weather component to render before the weather api Promise is fulfilled
        if (weather) {
            report = (
                <div>

                    {weather.condition && <div>
                        <img src={weather.condition.icon} alt="weather_icon"/>
                        <h1>{weather.condition.text} {weather.temp_c} C </h1>
                    </div>}
                    <h2>
                        feels like {weather.feelslike_c} C
                    </h2>
                    <h2>
                        {weather.wind_dir} wind at {weather.wind_mph} mph
                    </h2>    
                </div>
            );
        } else {
            report = (
                <div>
                    <p>Loading current weather report...</p>
                </div>
            );
        }

        return (
            <div>
               {report}
            </div>
        );
    }
}


const mapStateToProps = (state) => (state.current);


export default connect(mapStateToProps)(CurrentWeather);