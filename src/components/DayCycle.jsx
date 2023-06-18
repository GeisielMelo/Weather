import React from "react";
import styled from "styled-components";
import sunrise from "../images/sunrise.png";
import sunset from "../images/sunset.png";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
`;

const StyledSunContainer = styled.div`
  text-align: center;
`;

const DrawEarth = styled.div`
  width: 200px;
  height: 100px;
  margin: 0px 10px;

  overflow: hidden;
  position: relative;
  border-top-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top: 2px solid #fff9f9;
  border-bottom: 1px solid #6a6464;
`;

const StyledImage = styled.img`
  width: 40px;
  height: 40px;
`;

const StyledTime = styled.p`
  font-family: "Sarabun";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  text-align: center;

  color: #ffffff;
`;

const DayCycle = ({ sunriseTime, sunsetTime }) => {
  return (
    <StyledContainer>
      <StyledSunContainer>
        <StyledImage src={sunrise} alt="sunrise" />
        <StyledTime>{sunriseTime}</StyledTime>
      </StyledSunContainer>

      <DrawEarth />

      <StyledSunContainer>
        <StyledImage src={sunset} alt="sunset" />
        <StyledTime>{sunsetTime}</StyledTime>
      </StyledSunContainer>
    </StyledContainer>
  );
};

export default DayCycle;
