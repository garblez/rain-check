import React from 'react';
import {connect} from 'react-redux';

class ForecastWeather extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <p>Placeholder</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => (state.forecast);

export default connect(mapStateToProps)(ForecastWeather);