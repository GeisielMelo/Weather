import React, { useEffect, useState } from "react";
import { Widget, WidgetContent, FlexDiv, Divider } from "../components/Div";
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
import Loading from "../components/Loading";
import getUserLocation from "../services/localDeviceService";

const Home = () => {
  const [location, setLocation] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [searchBar, setSearchBar] = useState(true);
  const [currentSearchBarData, setCurrentSearchBarData] = useState("");
  const [searchBarData, setSearchBarData] = useState("");

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
          let lat = location.lat;
          let lon = location.lon;
          const forecastData = await searchByCoordinates(lat, lon, "forecast");
          const weatherData = await searchByCoordinates(lat, lon, "weather");
          setForecastData(forecastData);
          setWeatherData(weatherData);
        }
      } catch (error) {
        console.error("Error on fetch forecast data.");
        setForecastData(null);
        setWeatherData(null);
      }
    };

    fetchForecastData();
  }, [location]);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        if (searchBarData) {
          const forecastData = await searchByCity(searchBarData, "forecast");
          const weatherData = await searchByCity(searchBarData, "weather");
          setForecastData(forecastData);
          setWeatherData(weatherData);
        }
      } catch (error) {
        console.error("Error on fetch forecast data.");
        setForecastData(null);
        setWeatherData(null);
      }
    };

    if (searchBarData !== "") {
      fetchForecastData();
    }
  }, [searchBarData]);

  const handleSearch = (data) => {
    console.log(data, searchBarData)
    // setSearchBarData(data);
    setSearchBar(!searchBar);
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
    <Widget>
      <WidgetContent>
        {forecastData && weatherData ? (
          <>
            <Widget>
              <WidgetContent>
                <Menu
                  onClick={() => setSearchBar(!searchBar)}
                  status={searchBar}
                />
                {searchBar ? (
                  <Search
                    onChange={(e) => setCurrentSearchBarData(e.target.value)}
                    onClick={() => handleSearch(currentSearchBarData)}
                  />
                ) : (
                  <Title title={cityName} />
                )}
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
