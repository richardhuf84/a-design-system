import React from 'react';
import styled from 'styled-components';

const StyledColorChip = styled.div`
  background-color: ${props => props.color};
  color: black;
  height: 80px;
  width: 120px;
`;

const StyledWrapper = styled.div`
  font-family: sans-serif;
`;

export const ColorChip = ({ color }) => (
  <StyledWrapper>
    <StyledColorChip color={color} />
    <p>Hex: {color}</p>
  </StyledWrapper>
)