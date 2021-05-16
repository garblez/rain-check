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
               <h1>Hi, it's  today!</h1>
            </div>
        );
    }
}


const mapStateToProps = (state) => (state);


export default connect(mapStateToProps)(CurrentWeather);