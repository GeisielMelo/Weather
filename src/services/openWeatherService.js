import axios from "axios";

const apiKey = "";

export const getForecast = (latitude, longitude) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
      )
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

export const getWeather = (latitude, longitude) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
      )
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
