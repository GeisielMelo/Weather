import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  width: 50px;
  height: 55px;
  border: none;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  cursor: pointer;
`;

const StyledInput = styled.input`
  width: 190px;
  height: 55px;
  border: none;
  outline: none;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  font-family: "Sarabun";
  padding: 0px 10px;
  font-size: 18px;
  cursor: text;
`;

const Search = ({ onChange, onClick }) => {
  return (
    <StyledDiv>
      <StyledInput type="text" placeholder="London UK" onChange={onChange} />
      <StyledButton onClick={onClick}>
        <SearchIcon />
      </StyledButton>
    </StyledDiv>
  );
};

export default Search;
