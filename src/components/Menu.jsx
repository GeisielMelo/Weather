import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const StyledButton = styled.button`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 50px;
  height: 50px;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
`;

const Menu = ({ onClick, status }) => {
  return (
    <StyledButton onClick={onClick}>
      {status ? <MenuOpenIcon /> : <MenuIcon />}
    </StyledButton>
  );
};

export default Menu;
