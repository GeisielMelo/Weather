# Weather forecast

This project is a weather application that provides real-time weather information based on the user's exact location using Geolocation. It includes a search bar implementation for users to search for weather conditions in specific locations. The application displays the current temperature, weather conditions, and a detailed forecast for the next 24 hours, which is updated every 3 hours. Built using React and Axios, the weather application fetches data from the OpenWeatherMap API to ensure accurate and up-to-date weather information.

## Screenshots

![App Screenshot](https://github.com/GeisielMelo/weather/blob/master/src/images/preview.png?raw=true)


## Deploy

[Demo](https://geisielmelo-weather.netlify.app/) hosted with  [Netlify](https://www.netlify.com/).


## Features

- Utilizes Geolocation to retrieve the accurate forecast based on the user's current location.
- Displays the city name, temperature, and current weather conditions.
- Presents a detailed forecast for the day, with updates every 3 hours.
- Provides advanced weather details, including sunrise and sunset times, humidity, pressure, "Feels Like" temperature, and wind speed.
- Contains a search bar allowing users to search for weather conditions in specific locations.

## Tech

- React
- Node.js
- Figma
- Styled Components
- axios

## Setup

Clone the projects to the desired location on your computer.
```bash
    git clone https://github.com/GeisielMelo/weather.git
```

```bash
# Navigate to the directory.
$ cd weather

# Install necessary dependencies
$ npm install

# You will need an openWeatherMap API key.
# Get one here "https://openweathermap.org", it's free.
# update the key 'const apiKey = "";' located in \services\openWeatherService.js

# Start the app.
$ npm start

# The terminal will display the local address where the application is being executed. Simply enter the same address in your preferred browser. The address used in creating this project was:

http://localhost:3000/
```

## Authors

- [@GeisielMelo](https://github.com/GeisielMelo)

## License

- [MIT](https://choosealicense.com/licenses/mit/)
