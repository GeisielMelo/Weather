import React from "react";
import styled from "styled-components";

const StyledTemperature = styled.h2`
  font-family: "Sarabun";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  color: #ffffff;
`;

const Temperature = ({ temperature }) => {
  return <StyledTemperature>{temperature}º</StyledTemperature>;
};

export default Temperature;
