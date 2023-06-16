import React, { useEffect, useState } from "react";
import { Widget, WidgetContent, FlexDiv, Divider } from "../components/Div";
import Title from "../components/Title";
import Temperature from "../components/Temperature";
import Weather from "../components/Weather";
import NextHours from "../components/NextHours";
import Info from "../components/Info";
import DayCycle from "../components/DayCycle";
import hourConverter from "../utils/HourConverter";
import kelvinToCelsius from "../utils/TemperatureConverter";
import timestampToHour from "../utils/TimestampConverter";
import Loading from "../components/Loading";
import getUserLocation from "../services/localDeviceService";
import getWeatherData from "../services/openWeatherService";

const Home = () => {
  const [location, setLocation] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const location = await getUserLocation();
        setLocation(location);
      } catch (error) {
        console.error("Geolocation request rejected.");
        setLocation({ lat: -15.7801, lon: -47.9292 });
      }
    };

    fetchUserLocation();
  }, []);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        if (location) {
          const forecastData = await getWeatherData(
            location.lat,
            location.lon,
            "forecast"
          );
          setForecastData(forecastData);
        }
      } catch (error) {
        console.error("Error on fetch forecast data.");
        setForecastData(null);
      }
    };

    fetchForecastData();
  }, [location]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (location) {
          const weatherData = await getWeatherData(
            location.lat,
            location.lon,
            "weather"
          );
          setWeatherData(weatherData);
        }
      } catch (error) {
        console.error("Error on fetch weather data.");
        setWeatherData(null);
      }
    };

    fetchWeatherData();
  }, [location]);

  const cityName = weatherData?.name;
  const temperature = weatherData ? weatherData?.main.temp : null;
  const weather = weatherData ? weatherData?.weather[0].main : null;
  const sunrise = weatherData ? weatherData?.sys.sunrise : null;
  const sunset = weatherData ? weatherData?.sys.sunset : null;
  const feelsLike = weatherData ? weatherData?.main.feels_like : null;
  const humidity = weatherData ? weatherData?.main.humidity : null;
  const wind = weatherData ? weatherData?.wind.speed : null;
  const pressure = weatherData ? weatherData?.main.pressure : null;

  return (
    <Widget>
      <WidgetContent>
        {forecastData && weatherData ? (
          <>
            <Widget>
              <WidgetContent>
                <Title title={cityName} />
                <Temperature temperature={kelvinToCelsius(temperature)} />
                <Weather weather={weather} />
                <FlexDiv>
                  {forecastData?.list.slice(0, 6).map((item) => (
                    <NextHours
                      maxTemp={kelvinToCelsius(item.main.temp)}
                      hour={hourConverter(item.dt_txt)}
                      icon={item.weather[0].icon}
                      key={item.dt_txt}
                    />
                  ))}
                </FlexDiv>
                <Divider />
                <DayCycle
                  sunriseTime={timestampToHour(sunrise)}
                  sunsetTime={timestampToHour(sunset)}
                />
                <FlexDiv>
                  <Info
                    info={kelvinToCelsius(feelsLike) + "°"}
                    description="RealFeel"
                  />
                  <Info info={humidity + "%"} description="Humidity" />
                  <Info info={wind} description="Wind" />
                  <Info info={pressure} description="Pressure" />
                </FlexDiv>
              </WidgetContent>
            </Widget>
          </>
        ) : (
          <Loading />
        )}
      </WidgetContent>
    </Widget>
  );
};

export default Home;
