import styled from "styled-components";

export const HomeContainer = styled.main`
  color: ${props => props.theme.text};

  h2, p span {
    text-transform: capitalize;

    font-weight: 700;

    color: ${props => props.theme.strong};
    text-shadow: 1px 1px 15px rgba(255, 255, 255, .3);
  }



`