import React from 'react';
import styled from 'styled-components';

const StyledCommonButton = styled.button`
  padding: 10px 15px;
  background: #000;
  color: #fff;
  border: 2px solid #000;
  font-size: 15px;
  letter-spacing: 2px;
  text-decoration: none;
  font-weight: 600;
`


const CommonButton = ({type = 'button', label}) => {
  return (
    <StyledCommonButton type={type}>{label}</StyledCommonButton>
  );
};

export default CommonButton;
