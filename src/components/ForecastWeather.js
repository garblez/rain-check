import React from 'react';
import {connect} from 'react-redux';

/*
    Render the weekly weather forecast row-by-row based on the store forecast data
*/
class ForecastWeather extends React.Component {

    render() {
        
        let forecast = this.props.forecastday;
        let numDays = Object.keys(forecast).length;
        let reports = [];
        for (var ix= 0; ix < numDays; ix++) {
            let report = forecast[ix].day;
            reports.push(<div className="row" key={ix}>
                <div><img src={report.condition.icon} alt="weather_icon"/></div>
                <div>{report.condition.text}</div>
                <div className="col">{forecast[ix].date}</div>
                <div className="col">{report.avgtemp_c} C on average </div>
                <div className="col">{report.daily_chance_of_rain}% Chance of rain</div>
                <div className="col">{report.daily_chance_of_snow}% Chance of snow</div>
            </div>);
        }
        return (
            <div>
                <div style={{flex: 1}}>
                {reports}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => (state.forecast);

export default connect(mapStateToProps)(ForecastWeather);