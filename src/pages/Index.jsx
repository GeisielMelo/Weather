import React, { useEffect, useState } from "react";
import { Widget, WidgetContent, FlexDiv, Divider } from "../components/Div";
import Title from "../components/Title";
import Temperature from "../components/Temperature";
import Weather from "../components/Weather";
import NextHours from "../components/NextHours";
import Info from "../components/Info";
import DayCycle from "../components/DayCycle";
import HourConverter from "../utils/HourConverter";
import KelvinToCelsius from "../utils/TemperatureConverter";
import TimestampToHour from "../utils/TimestampConverter";
import Loading from "../components/Loading";
import getUserLocation from "../services/localDeviceService";
import getWeatherData from "../services/openWeatherService";

const Home = () => {
  const [location, setLocation] = useState(null);
  const [data, setData] = useState(null);

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
    const fetchWeatherData = async () => {
      try {
        if (location) {
          const weatherData = await getWeatherData(location.lat, location.lon);
          setData(weatherData);
        }
      } catch (error) {
        console.error("Error on fetch weather data.");
        setData(null);
      }
    };

    fetchWeatherData();
  }, [location]);

  const cityName = data?.city?.name;
  const temperature = data ? data?.list[0].main.temp : null;
  const weather = data ? data?.list[0].weather[0].main : null;
  const sunrise = data ? data?.city?.sunrise : null;
  const sunset = data ? data?.city?.sunset : null;
  const feelsLike = data ? data?.list[0].main.feels_like : null;
  const humidity = data ? data?.list[0].main.humidity : null;
  const wind = data ? data?.list[0].wind.speed : null;
  const pressure = data ? data?.list[0].main.pressure : null;

  return (
    <Widget>
      <WidgetContent>
        {data ? (
          <>
            <Widget>
              <WidgetContent>
                <Title title={cityName} />
                <Temperature temperature={KelvinToCelsius(temperature)} />
                <Weather weather={weather} />
                <FlexDiv>
                  {data?.list.slice(3, 9).map((item) => (
                    <NextHours
                      maxTemp={KelvinToCelsius(item.main.temp)}
                      hour={HourConverter(item.dt_txt)}
                      icon={item.weather[0].icon}
                      key={item.dt_txt}
                    />
                  ))}
                </FlexDiv>
                <Divider />
                <DayCycle
                  sunriseTime={TimestampToHour(sunrise)}
                  sunsetTime={TimestampToHour(sunset)}
                />
                <FlexDiv>
                  <Info
                    info={KelvinToCelsius(feelsLike) + "°"}
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
