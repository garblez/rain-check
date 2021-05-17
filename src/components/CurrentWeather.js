import React from 'react';
import {connect} from 'react-redux';


class CurrentWeather extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        let weather = this.props;
        
        let report;
        if (weather) {
            report = (
                <div>

                    {weather.condition && <div>
                        <img src={weather.condition.icon}/>
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