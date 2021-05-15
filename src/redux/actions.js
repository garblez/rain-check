import {UPDATE_CURRENT, UPDATE_ALL, UPDATE_FORECAST, UPDATE_LOCATION} from './actionTypes';

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
    payload: {content}
});