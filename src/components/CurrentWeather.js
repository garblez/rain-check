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
                    <img src={weather.condition.icon}/>
               <h1>{weather.condition.text}</h1>
               <table>
                   <tbody>
                    <tr>
                        <td>
                            It's {weather.temp_c} C 
                        </td>
                        <td></td>
                        <td>
                            feels like {weather.feelslike_c} C
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {weather.wind_dir} 
                        </td>
                        <td></td>
                        <td>
                            wind at {weather.wind_mph}
                        </td>
                    </tr>
                    </tbody>
                </table>
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