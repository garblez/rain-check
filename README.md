# Rain Check React Weather App
This app relies on geolocation permissions to be given (otherwise the user is understood to be in Glasgow) and internet access so that calls to [weather api](http://weatherapi.com) may be given.

This app shows the user's location, the current weather readings and the weather forecast for the next week.

The UI appearance has not been worked on extensively as reflected by the presentation of the weather forecast data.


In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Note that an internet connection is required for any app functionality.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Miscellaneous
This React application uses a Redux store to manage global application state. In particular, location data from permissions and weather updates are written to this store.


## Learn More
To know more about the weather API used please visit the [website](http://weatherapi.com).