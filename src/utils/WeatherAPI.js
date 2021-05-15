export {getWeather}

/*
    getWeather
        Takes geolocation as input - this could either be in the form {name: <place name>} or {latitude: <num>, longitude: <num>} 
        Returns a Promise value of the current weather report for that geolocation.
*/

const QUERY_HEADER = "http://api.weatherapi.com/v1/current.json?key=" + process.env.REACT_APP_WEATHER_API_KEY;



// Get the current weather report based on the user's geolocation
async function getWeather(location) {
    let q = unwrapGeolocation(location);
    let response = await fetch(QUERY_HEADER + "&q=" + q + "&days=7");
    let weather = await response.json();

    return weather;
}


// Gets a geolocation parameter from a geolocation object.
function unwrapGeolocation(location = {}) {
    if ("lat" in location && "lon" in geolocation) {
        return location.lat + "," + geolocation.lon;
    } else if ("name" in geolocation) {
        return location.name;
    } else {
        return "Glasgow";
    }
}