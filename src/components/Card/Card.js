import React from "react";
import styled from 'styled-components';

const StyledCard = styled.section`
  box-shadow: ${props => props.theme.boxShadow.small};
  color: ${props => props.theme.color.textColor.default};
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 290px;
  min-height: 380px;
  padding: 16px;

  p {
    margin: 0 0 .5em;
    padding: 0;
  }
`;

const Card = props => {
  return (
    <StyledCard {...props}>
      <div className="card__main">
        {props.main}
      </div>
      <footer>
        {props.footer}
      </footer>
    </StyledCard>

  )
};

export default Card;
