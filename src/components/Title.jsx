import React from 'react';
import styled from 'styled-components';

const StyledTittle = styled.h1`
    font-family: 'Sarabun';
    font-style: normal;
    font-weight: 400;
    font-size: 42px;

    color: #FFFFFF;
`;

const Title = ({title}) => {
    return <StyledTittle>{title}</StyledTittle>
}

export default Title;