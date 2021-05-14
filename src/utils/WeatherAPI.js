export {getWeatherByName, getWeatherByPos}

/*
    getWeatherByName: input is the name of the location in the weather report (i.e., "Glasgow")
                    returns a Promise of the current weather report.
    getWeatherByPos:  input is the latitude and longitude of the user's geolocation
                    returns a Promise of the current weather report. 
*/


async function getWeatherByName(locationName) {
    let query = "http://api.weatherapi.com/v1/current.json?key=" + process.env.REACT_APP_WEATHER_API_KEY + "&q=" + locationName;
    return getCurrentWeather(query)
        .then(data => console.log(data));
}

function getWeatherByPos(latitude, longitude) {
    let query = "http://api.weatherapi.com/v1/current.json?key=" + process.env.REACT_APP_WEATHER_API_KEY + 
        "&q=" + latitude + "," + longitude;

    var weather = {};

    return getCurrentWeather(query)
        .then(data => data.current);
    
}

async function getCurrentWeather(query) {
    let response = await fetch(query);
    let data = await response.json();
    return data;
}