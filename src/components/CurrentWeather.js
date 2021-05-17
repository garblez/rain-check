import React from 'react';
import {connect} from 'react-redux';


class CurrentWeather extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        let weather = this.props;
        return (
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
    }
}


const mapStateToProps = (state) => (state.current);


export default connect(mapStateToProps)(CurrentWeather);