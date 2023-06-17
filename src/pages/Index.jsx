import React, { useEffect, useState } from "react";
import { Widget, WidgetContent, StatusWeather } from "../components/Div";
import { DivHeader, ForecastDiv, StatusDiv, LineDiv } from "../components/Div";
import { searchByCoordinates } from "../services/openWeatherService";
import { searchByCity } from "../services/openWeatherService";
import Title from "../components/Title";
import Temperature from "../components/Temperature";
import Weather from "../components/Weather";
import NextHours from "../components/NextHours";
import Info from "../components/Info";
import DayCycle from "../components/DayCycle";
import Search from "../components/Search";
import Menu from "../components/Menu";
import hourConverter from "../utils/HourConverter";
import kelvinToCelsius from "../utils/TemperatureConverter";
import timestampToHour from "../utils/TimestampConverter";
import LoadingScreen from "../components/LoadingScreen";
import getUserLocation from "../services/localDeviceService";
import isValidString from "../utils/regexUtils";
import MessageAlert from "../components/MessageAlert";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [searchBar, setSearchBar] = useState(false);
  const [currentSearchBarData, setCurrentSearchBarData] = useState("");
  const [customAlert, setCustomAlert] = useState(false);
  const [customAlertMessage, setCustomAlertMessage] = useState("");

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        if (!location) {
          const location = await getUserLocation();
          setLocation(location);
        }
      } catch (error) {
        console.error("Geolocation request rejected.");
        setLocation({ lat: -15.7801, lon: -47.9292 });
      }
    };

    fetchUserLocation();
  }, [location]);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        if (location && (!forecastData || !weatherData)) {
          setLoading(true);
          let lat = location.lat;
          let lon = location.lon;
          let forecastData = await searchByCoordinates(lat, lon, "forecast");
          let weatherData = await searchByCoordinates(lat, lon, "weather");
          setForecastData(forecastData);
          setWeatherData(weatherData);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error on fetch forecast data.");
        setForecastData(null);
        setWeatherData(null);
      }
    };

    fetchForecastData();
  }, [location, forecastData, weatherData]);

  const handleSearch = async (data) => {
    if (isValidString(data)) {
      let words = data.split(" ");
      let country = words.pop().toUpperCase();
      let city = words.join(" ");

      try {
        let forecastData = await searchByCity(city, country, "forecast");
        let weatherData = await searchByCity(city, country, "weather");
        setForecastData(forecastData);
        setWeatherData(weatherData);
        setSearchBar(!searchBar);
      } catch (error) {
        setSearchBar(!searchBar);
        setForecastData(null);
        setWeatherData(null);
        handleShowAlert("The location does not exist. Please try again.");
      }
    } else {
      handleShowAlert("Please, enter a valid place! (ex: 'London UK').");
    }
  };

  const handleShowAlert = (message) => {
    setCustomAlertMessage(message);
    setCustomAlert(true);
    setTimeout(() => {
      setCustomAlert(false);
    }, "4000");
  };

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
    <>
      {customAlert ? <MessageAlert text={customAlertMessage} /> : null}
      <Widget>
        <WidgetContent>
          {loading ? (
            <>
              <LoadingScreen />
            </>
          ) : (
            <Widget>
              <WidgetContent>
                <Menu
                  onClick={() => setSearchBar(!searchBar)}
                  status={searchBar}
                />
                <DivHeader>
                  {searchBar ? (
                    <Search
                      onChange={(e) => setCurrentSearchBarData(e.target.value)}
                      onClick={() => handleSearch(currentSearchBarData)}
                    />
                  ) : (
                    <Title title={cityName} />
                  )}
                </DivHeader>
                <Temperature temperature={kelvinToCelsius(temperature)} />
                <Weather weather={weather} />
                <ForecastDiv>
                  {forecastData?.list.slice(0, 6).map((item) => (
                    <NextHours
                      maxTemp={kelvinToCelsius(item.main.temp)}
                      hour={hourConverter(item.dt_txt)}
                      icon={item.weather[0].icon}
                      key={item.dt_txt}
                    />
                  ))}
                </ForecastDiv>
                <LineDiv />

                <StatusDiv>
                  <DayCycle
                    sunriseTime={timestampToHour(sunrise)}
                    sunsetTime={timestampToHour(sunset)}
                  />
                  <StatusWeather>
                    <Info
                      info={kelvinToCelsius(feelsLike) + "°"}
                      description="RealFeel"
                    />
                    <Info info={humidity + "%"} description="Humidity" />
                    <Info info={wind} description="Wind" />
                    <Info info={pressure} description="Pressure" />
                  </StatusWeather>
                </StatusDiv>
              </WidgetContent>
            </Widget>
          )}
        </WidgetContent>
      </Widget>
    </>
  );
};

export default Home;
