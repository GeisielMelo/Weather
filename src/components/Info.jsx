import React from "react";
import styled from "styled-components";

const StyledInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const StyledInfo = styled.h1`
  font-family: "Sarabun";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;

  color: #ffffff;
`;

const StyledDescription = styled.p`
  font-family: "Sarabun";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;

  text-align: center;
  color: #b7b7b7;
`;

const Info = ({ info, description }) => {
  return (
    <StyledInfoDiv>
      <StyledInfo>{info}</StyledInfo>
      <StyledDescription>{description}</StyledDescription>
    </StyledInfoDiv>
  );
};

export default Info;
