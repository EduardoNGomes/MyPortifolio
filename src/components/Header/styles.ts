import styled from 'styled-components'

export const HeaderContainer = styled.header``

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;

  h1 {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 15px;

    color: ${(props) => props.theme.text};
    font-weight: 700;
    font-style: italic;

    transition: all 0.3s;
    :hover {
      text-shadow: 1px 1px 15px rgba(255, 255, 255, 0.3);
    }
  }
  h1 span {
    color: ${(props) => props.theme.strong};
  }

  ul {
    display: flex;
    gap: 15px;
  }

  li button {
    border: none;
    background-color: transparent;
    color: ${(props) => props.theme.text};

    font-size: 1.4rem;

    transition: all 0.5s;

    text-transform: capitalize;

    :hover {
      color: ${(props) => props.theme.hover};
      border-bottom: 1px solid ${(props) => props.theme.hover};
    }
  }
`
