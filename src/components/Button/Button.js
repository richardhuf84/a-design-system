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
      color: ${ props => props.theme.color.light};
      border-radius: ${ props => props.theme.border.radius};
      background-color: ${ props => this.props.primary ? props.theme.color.primary : props.theme.color.secondary};

      &:hover {
        background-color: ${ props => this.props.primary ? props.theme.color.primaryDark : props.theme.color.secondaryDark};
        transition: background-color 200ms ease;
        text-decoration: underline;
      }

      &:focus {
        outline: 2px dotted ${props => props.theme.color.light};
        outline-offset: -2px;
        text-decoration: underline;
      }
      `;


    const style = this.props.style;
    const type = this.props.primary ? 'primary' : 'secondary';
    const label = this.props.label;

    return <Theme><Button style={{ ...style }} className={`button button--${type} `}>
      {label}
    </Button>
    </Theme>
  }
};


