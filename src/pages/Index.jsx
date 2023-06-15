import React from "react";
import Title from "../components/Title";
import Temperature from "../components/Temperature";
import Weather from "../components/Weather";
import NextHours from "../components/NextHours";
import Info from "../components/Info";
import DayCycle from "../components/DayCycle";
import HourConverter from "../utils/HourConverter";
import KelvinToCelsius from "../utils/TemperatureConverter";
import TimestampToHour from "../utils/TimestampConverter";
import { Widget, WidgetContent, FlexDiv, Divider } from "../components/Div";
import { todayData, nextHoursData, sunData, localData } from "../utils/Data";

const Home = () => {
  return (
    <Widget>
      <WidgetContent>
        <Title title={todayData.city} />
        <Temperature temperature={KelvinToCelsius(todayData.temperature)} />
        <Weather weather={todayData.weather} />
        <FlexDiv>
          {nextHoursData.map((item) => (
            <NextHours
              maxTemp={KelvinToCelsius(item.max)}
              hour={HourConverter(item.time)}
              icon={item.icon}
            />
          ))}
        </FlexDiv>
        <Divider />
        <DayCycle
          sunriseTime={TimestampToHour(sunData.sunrise)}
          sunsetTime={TimestampToHour(sunData.sunset)}
        />
        <FlexDiv>
          <Info
            info={KelvinToCelsius(localData.feelsLike) + "°"}
            description="RealFeel"
          />
          <Info info={localData.humidity + "%"} description="Humidity" />
          <Info info={localData.windSpeed} description="Wind" />
          <Info info={localData.pressure} description="Pressure" />
        </FlexDiv>
      </WidgetContent>
    </Widget>
  );
};

export default Home;
