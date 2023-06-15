import React from "react";
import styled from "styled-components";

const StyledPreview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTime = styled.h1`
  font-family: "Sarabun";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 32px;
  text-align: center;

  color: #ffffff;
`;

const StyledIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const StyledTemperature = styled.h2`
  font-family: "Sarabun";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 32px;
  text-align: center;

  color: #ffffff;
`;

const NextDays = ({ maxTemp, hour, icon }) => {
  return (
    <StyledPreview>
      <StyledTime>{hour}</StyledTime>
      <StyledIcon src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
      <StyledTemperature>
        {maxTemp}°C
      </StyledTemperature>
    </StyledPreview>
  );
};

export default NextDays;
