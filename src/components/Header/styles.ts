import styled from "styled-components";

export const HeaderContainer = styled.header`


`

export const HeaderContent = styled.div`


  display: flex;
  justify-content: space-between;
  text-align: center;

  h1 {
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 15px;

    color: ${props => props.theme.text};
  }
  h1 span {
    color: ${props => props.theme.strong};
  }

  ul {
    display: flex;
    gap: 15px;
  }

  li button {
    border: none;
    background-color: transparent;
    color: ${props => props.theme.text};

    font-size: 1.4rem;

    transition: all .5s;

    text-transform: capitalize;


    :hover{
      color: ${props => props.theme.hover};
      border-bottom: 1px solid ${props => props.theme.hover};
    }
  }
`