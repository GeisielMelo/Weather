import axios from "axios";

const apiKey = "";

const getWeatherData = (latitude, longitude) => {
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

export default getWeatherData;