import React from "react";
import styled, { css } from 'styled-components';
import Theme from '../../Theme';

const StyledButton = styled.button.attrs(props => ({
  disabled: props.disabled
}))`
    font-size: ${({ theme: { typography: { size: { body } } } }) => body}rem;
    font-family: 'Montserrat', sans-serif;
    border: 0;
    text-align: center;
    font-weight: ${({ theme: { typography: { weight: { bold } } } }) => bold};
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


    // TODO turn into a function
    ${props => props.primary &&
    css`
      background-color: ${props.theme.color.primary.default};

      &:hover {
        background-color: ${props.theme.color.primary.dark};
      }

      &:disabled {
        background-color: ${props.theme.color.primary.light};
      }
      `};

      ${props => props.secondary &&
    css`
      background-color: ${props.theme.color.secondary.default};

      &:hover {
        background-color: ${props.theme.color.secondary.dark};
      }

      &:disabled {
        background-color: ${props.theme.color.secondary.light};
      }

      `};

      ${props => props.tertiary &&
    css`
      background-color: ${props.theme.color.dark.default};

      &:hover {
        background-color: ${props.theme.color.dark.dark};
      }

      &:disabled {
        background-color: ${props.theme.color.dark.light};
      }

      `};
`;


export default (props) => {
  return (<Theme>
    <StyledButton {...props}>{props.label}</StyledButton>
  </Theme>
  )
};


