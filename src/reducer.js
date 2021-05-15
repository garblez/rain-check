import {getWeatherByName, getWeatherByPos} from './utils/WeatherAPI';


const initialState = {
    geolocation: {
        latitude: 0,
        longitude: 0
    },
    current: {
        last_updated_epoch: 1621107900,
        last_updated: "2021-05-15 20:45",
        temp_c: 12.0,
        temp_f: 53.6,
        is_day: 1,
        condition: {
            text: "Sunny",
            icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
            code: 1000
        },
        wind_mph: 6.9,
        wind_kph: 11.2,
        wind_degree: 60,
        wind_dir: "ENE",
        pressure_mb: 998.0,
        pressure_in: 29.9,
        precip_mm: 1.8,
        precip_in: 0.07,
        humidity: 67,
        cloud: 0,
        feelslike_c: 11.0,
        feelslike_f: 51.8,
        vis_km: 10.0,
        vis_miles: 6.0,
        uv: 3.0,
        gust_mph: 9.2,
        gust_kph: 14.8
    }
}


export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'geolocation/add':
            return {
                ...state, 
                geolocation: action.payload
            };
        case 'weather/getCurrent':
            return {...state};
        default:
            return state;
    }
}