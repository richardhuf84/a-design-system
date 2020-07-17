import React from 'react';
import styled from 'styled-components';
import Theme from '../../Theme';

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
const Icon = props => <Theme>
  <StyledIcon className="icon">
    <use xlink: {`#${props.name}`} />
    </StyledIcon>
</Theme >;