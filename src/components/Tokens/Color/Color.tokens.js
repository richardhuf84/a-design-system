import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../Theme';

const getTokenColor = props => props.theme.color[props.color]?.default;

const StyledColorChip = styled.div`
  background-color: ${props => getTokenColor(props)};
  color: black;
  height: 80px;
  width: 120px;

  p:after {
    content: ${props => getTokenColor(props)};
  }
`;

const StyledWrapper = styled.div`
  font-family: sans-serif;
`;

export const StyledGrid = styled.div`
  display: grid;
  gap: 1rem;
  justify-content: flex-start;
  grid-template-rows: auto auto auto;
  grid-template-columns: auto auto auto;
`;

export const ColorChip = ({ color }) => (
  <StyledWrapper>
    <StyledColorChip color={color} />
    <p>Color: {color}</p>
    <p>Hex: {theme.color[color]?.default}</p>
  </StyledWrapper>
)