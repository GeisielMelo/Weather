import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  max-height: 30px;
  background-color: #f44336;
  transition: all 0.2s ease-in-out;
`;

const StyledH1 = styled.h1`
  font-family: "Sarabun";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  margin: 4px 6px;
  
  text-align: center;
  color: #FFFFFF;
`;

const MessageAlert = (props) => {
  return (
    <StyledDiv>
      <StyledH1>{props.text}</StyledH1>
    </StyledDiv>
  );
};
export default MessageAlert;
