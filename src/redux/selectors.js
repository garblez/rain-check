export const getLocation = store => store.location;
export const getLocationName = store => {
    if ("location" in store) {
        return store.location;
    } else {
        return "Glasgow";
    }
}

export const getCurrentWeather = store => {
    return store.current;
}

export const getWeatherForecast = store => {
    if ("forecast" in store && "forecastday" in store.forecast) {
        return store.forecast.forecastday;
    } else {
        return [];
    }
}