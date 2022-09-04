import React from "react";
import styled from 'styled-components';
import Text from '../Text/Text'

const StyledColor = styled.div`
  background-color: ${props => props.theme.color[props.color].default};
  width: 10rem;
  height: 4rem;
  outline: 1px solid ${props => props.theme.color.grey.default};
`;

const Color = props =>
  <div style={{ boxShadow: '0 0 4px rgba(0,0,0,0.4)', padding: '.375rem', display: 'inline-block' }}>
    <StyledColor {...props} />
    <Text tag="h3" weight="bold">{props.color}</Text>
    <Text tag="small">Hex: {props.theme}</Text>
  </div>;

export default Color;