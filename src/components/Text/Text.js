import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Theme from '../../theme';

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

Text.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'dark', 'light']),
  children: PropTypes.string,
  size: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'small']),
  weight: PropTypes.oneOf(['regular', 'bold', 'black'])
}

Text.defaultProps = {
  color: 'dark',
  children: 'default text',
  size: 'body',
  weight: 'regular'
}

export default Text;