import axios from "axios";

const apiKey = "";

const getWeatherData = (latitude, longitude, forecastType) => {
  const apiForecast = "https://api.openweathermap.org/data/2.5/forecast?";
  const apiWeather = "https://api.openweathermap.org/data/2.5/weather?";

  const lat = `lat=${latitude}`;
  const lon = `lon=${longitude}`;

  let url = "";
  if (forecastType === "weather") {
    url = `${apiWeather}${lat}&${lon}&appid=${apiKey}`;
  } else if (forecastType === "forecast") {
    url = `${apiForecast}${lat}&${lon}&appid=${apiKey}`;
  }

  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => {
        const weatherData = response.data;
        resolve(weatherData);
      })
      .catch((error) => {
        console.error("Error in getting weather data.");
        reject(error);
      });
  });
};

export default getWeatherData;

