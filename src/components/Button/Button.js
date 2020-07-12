import React from "react";
import styled, { css } from 'styled-components';
import Theme from '../../Theme';
export default class Button extends React.Component {

  render() {
    const style = this.props.style;
    const label = this.props.label;
    const disabled = this.props.disabled;
    const { primary, secondary, tertiary } = this.props;
    const modifierClass = (primary && 'primary') || (secondary && `secondary`) || (tertiary && 'dark');

    const modifiers = (modifier) => css`
      &--${modifier} {
        background-color: ${ props => props.theme.color[modifier].default};

        &:hover {
          background-color: ${props => props.theme.color[modifier].dark};
        }

        &:disabled {
          background-color: ${props => props.theme.color[modifier].light};
        }
      }
    `;

    const Button = styled.button`
      
      &.button {
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

        /* Modifiers */
        ${modifiers(modifierClass)}
      }
    `;

    return <Theme>
      <Button
        style={{ ...style }}
        className={`button button--${modifierClass}`}
        disabled={disabled}
      >
        {label}
      </Button>
    </Theme>
  }
};


