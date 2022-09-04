import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.svg`
  color: ${props => props.color};
  fill: ${props => props.color};
`;

/**
 * Display a single icon
 * 
 * @param {name} name of icon 
 * @param {color} color of icon
 */
const Icon = props =>
  <StyledIcon className="icon">
    <use xlink: {`#${props.name}`} />
  </StyledIcon>;