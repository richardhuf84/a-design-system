import React from "react";
import styled, { css } from 'styled-components';
import Theme from '../../Theme';

const CSSPseudoClasses = (props, type, css) => props[type.namespace] &&
  css`
    background-color: ${props.theme.color[type.alias].default};

    &:hover {
      background-color: ${props.theme.color[type.alias].dark};
    }

    &:disabled {
      background-color: ${props.theme.color[type.alias].light};
    }
  `;

const StyledButton = styled.button.attrs(props => ({
  disabled: props.disabled
}))`
    font-size: ${props => props.theme.typography.size.body}rem;
    font-family: 'Montserrat', sans-serif;
    border: 0;
    text-align: center;
    font-weight: ${props => props.theme.typography.weight.bold};
    padding: ${props => props.theme.spacing.s3}rem ${props => props.theme.spacing.s4}rem;
    color: ${ props => props.theme.color.light.default};
    border-radius: ${ props => props.theme.border.radius};
    
    &:hover {
      background-color: ${ props => props.theme.color.grey.default};
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


export default (props) => {
  return (<Theme>
    <StyledButton {...props}>{props.label}</StyledButton>
  </Theme>
  )
};


