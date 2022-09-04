import React from "react";
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const CSSPseudoClasses = (props, type, css) => props[type.namespace] &&
  css`
    background-color: ${props.theme.color[type.alias].default};

    &:hover,
    &:active,
    &:focus {
      background-color: ${props.theme.color[type.alias].dark};
      transform: scale(1.03);
      transition: transform 150ms ease;
      cursor: pointer;
    }

    &:disabled {
      background-color: ${props.theme.color[type.alias].light};
    }
  `;

const StyledButton = styled.button.attrs(props => ({
  disabled: props.disabled
}))`
    font-size: ${props => props.theme.font.size.body}rem;
    font-family: 'Montserrat', sans-serif;
    border: 0;
    text-align: center;
    font-weight: ${props => props.theme.font.weight.bold};
    padding: ${props => props.theme.spacing.s2}px ${props => props.theme.spacing.s2}rem;
    color: ${props => props.theme.color.light.default};
    border-radius: ${props => props.theme.border.radius};
    
    &:hover {
      background-color: ${props => props.theme.color.grey.default};
      transition: background-color 200ms ease;
      text-decoration: underline;
    }

    &:focus {
      outline: 2px dotted ${props => props.theme.color.light.default};
      outline-offset: -2px;
      text-decoration: underline;
    }

    &:disabled {
      background-color: ${props => props.theme.color.grey.default};
      cursor: not-allowed;
    }

    ${props => CSSPseudoClasses(props, { namespace: 'primary', alias: 'primary' }, css)}

    ${props => CSSPseudoClasses(props, { namespace: 'secondary', alias: 'secondary' }, css)}

    ${props => CSSPseudoClasses(props, { namespace: 'tertiary', alias: 'dark' }, css)}
`;

/**
 * Use `Button` to create a CTA on the page. 
 * 
 * Buttons can be rendered as either a button element, or an anchor tag.
 * 
 * When used to trigger javascript behaviour, a button element is appropriate. If navigating to a url, an anchor tag is appropriate.
 * 
 * We provide 3 variants. Primary, Secondary and Tertiary.
 */
const Button = props => {
  return (
    <StyledButton {...props}>{props.label}</StyledButton>
  )
};

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string
}

Button.defaultProps = {
  primary: false,
  secondary: false,
  tertiary: false,
  disabled: false,
  label: 'Default button'
}

export default Button;
