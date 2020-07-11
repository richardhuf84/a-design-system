import React from "react";
import styled from 'styled-components';
import Theme from '../Theme';
export default class Button extends React.Component {

  render() {
    const Button = styled.button`
      font-size: ${({ theme: { typography: { size: { body } } } }) => body
      }rem;
      border: 0;
      text-align: center;
      font-weight: ${({ theme: { typography: { weight: { bold } } } }) => bold};
      padding: ${props => props.theme.spacing.s3}rem ${props => props.theme.spacing.s4}rem;
      color: ${ props => props.theme.color.light.default};
      border-radius: ${ props => props.theme.border.radius};
      background-color: ${ props => this.props.primary ? props.theme.color.primary.default : props.theme.color.secondary.default};

      &:hover {
        background-color: ${ props => this.props.primary ? props.theme.color.primary.dark : props.theme.color.secondary.dark};
        transition: background-color 200ms ease;
        text-decoration: underline;
      }

      &:focus {
        outline: 2px dotted ${props => props.theme.color.light.default};
        outline-offset: -2px;
        text-decoration: underline;
      }

      &:disabled {
        background-color: ${props => this.props.primary ? props.theme.color.primary.light : props.theme.color.secondary.light};
      }
      `;


    const style = this.props.style;
    const type = this.props.primary ? 'primary' : 'secondary';
    const label = this.props.label;
    const disabled = this.props.disabled;

    return <Theme>
      <Button style={{ ...style }} className={`button button--${type}`} disabled={disabled}>
        {label}
      </Button>
    </Theme>
  }
};


