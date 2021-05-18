import {getWeather, unwrapLocation} from '../utils/WeatherAPI';


test('unwraps undefined location to "Glasgow"', () => {
    expect(unwrapLocation(undefined)).toBe("Glasgow");
});

test('unwraps {name: "London"} location to "London"', () => {
    expect(unwrapLocation({name: "London"})).toEqual("London");
});

test('unwraps {lat: 56.02, lon: 89.32} location to "56.02,89.32"', () => {
    expect(unwrapLocation({lat: 56.02, lon: 89.32} )).toEqual("56.02,89.32");
});