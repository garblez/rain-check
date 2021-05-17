import {UPDATE_CURRENT, UPDATE_ALL, UPDATE_FORECAST, UPDATE_LOCATION, UPDATE_WEATHER} from './actionTypes';

export const updateLocation = content => ({
    type: UPDATE_LOCATION,
    payload: {
        content
    }
});

export const updateCurrent = content => ({
    type: UPDATE_CURRENT,
    payload: {content}
});

export const updateForecast = content => ({
    type: UPDATE_FORECAST,
    payload: {content}
});

export const updateAll = content => ({
    type: UPDATE_ALL,
    payload: content
});


export const updateWeather = content => ({
    type: UPDATE_WEATHER,
    payload: {current: content.current, forecast: content.forecast.forecastdays},
})