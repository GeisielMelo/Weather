import React from "react";
import styled from "styled-components";

const StyledTemperature = styled.h2`
  font-family: "Sarabun";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  text-align: center;

  color: #ffffff;
  margin: 10px;
`;

const Temperature = ({ temperature }) => {
  return <StyledTemperature>{temperature}º</StyledTemperature>;
};

export default Temperature;
