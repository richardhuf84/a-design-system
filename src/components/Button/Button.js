import React from "react";
import styled from 'styled-components';

export default class Button extends React.Component {
  render() {
    const primaryColor = `#8487FF`;
    const primaryColorDark = `#5256FF`;

    const secondaryColor = `#B37CFF`;
    const secondaryColorDark = `#9447FF`;

    const lightColor = `#FFF`;
    const globalBorderRadius = `5px`;

    const Button = styled.button`
      font-size: 1.5em;
      border: 0;
      text-align: center;
      padding: 1rem;
      color: ${lightColor};
      border-radius: ${globalBorderRadius};
      background-color: ${this.props.primary ? primaryColor : secondaryColor};

      &:hover {
        background-color: ${this.props.primary ? primaryColorDark : secondaryColorDark};
        transition: background-color 200ms ease;
      }
    `;

    const style = this.props.style;
    const type = this.props.primary ? 'primary' : 'secondary';
    const label = this.props.label;

    return <Button style={{ ...style }} className={`button button--${type}`}>
      {label}
    </Button>
  }
};


