import React from "react";
import styled from 'styled-components';
import Theme from '../../Theme';

const StyledText = styled.p`
  font-family: ${props => props.theme.font.family};
  font-size: ${props => props.theme.font.size[props.size]}rem;
  color: ${props => props.theme.color[props.color].default};
  font-weight: ${props => props.theme.font.weight[props.weight]}
`;

const Text = props => {
  return (
    <Theme>
      <StyledText as={props.tag} {...props}>
        {props.children}
      </StyledText>
    </Theme>
  )
}

export default Text;