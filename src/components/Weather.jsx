import React from "react";
import styled from "styled-components";

const StyledWeather = styled.h3`
  font-family: "Sarabun";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  text-align: center;
  color: #ffffff;

  @media (max-width: 576px) {
    padding: 20px 0;
  }
`;

const Weather = ({ weather }) => {
  return <StyledWeather>{weather}</StyledWeather>;
};

export default Weather;
