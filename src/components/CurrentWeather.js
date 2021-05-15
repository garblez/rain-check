import React from 'react';
import {connect} from 'react-redux';


class CurrentWeather extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        let weather = this.props.current;

        
        console.log(this.props);

        return (
            <div>
               <h1>Hi, it's  today!</h1>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({current: state.current});


export default connect(mapStateToProps)(CurrentWeather);