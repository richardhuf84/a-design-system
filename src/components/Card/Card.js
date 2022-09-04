import React from "react";
import styled, { css } from 'styled-components';

const StyledCard = styled.section`
  box-shadow: ${props => props.theme.boxShadow.small};
  display: inline-block;
  max-width: 320px;
  padding: 8px;
`;

const Card = props => {
  return (
    <StyledCard {...props}>{props.children}</StyledCard>

  )
};

export default Card;
