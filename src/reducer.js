const initialState = {
    location: {
            name: "Glasgow",
            region: "Glasgow City",
            country: "United Kingdom",
            lat: 55.86,
            lon: -4.25,
            tz_id: "Europe/London",
            localtime_epoch: 1621111443,
            localtime: "2021-05-15 21:44"
    },
    current: {},
    forecast: {
        forecastday: []
    }
    
}


export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'location/update':
            return {
                ...state, 
                location: action.payload
            };
        case 'current/update':
            return {
                ...state, 
                current: action.payload
            };
        case 'forecast/update':
            return {
                ...state, 
                forecast: action.payload
            };
        case 'all/update':
            return action.payload;
        default:
            return state;
    }
}