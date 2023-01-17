import styled from 'styled-components'

export const HeaderContainer = styled.header``

export const HeaderContent = styled.nav`
  display: flex;
  justify-content: space-between;
  text-align: center;

  h1 {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 2rem;

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

  .activePage {
    color: ${(props) => props.theme.hover};
    border-bottom: 1px solid ${(props) => props.theme.hover};
  }

  .menu {
    display: none;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.2rem;
    }
    .menu {
      display: block;
      background: transparent;
      border: none;
      color: ${(props) => props.theme.hover};

      cursor: pointer;
    }
    .nav-menu {
      position: fixed;
      top: -100%;
      gap: 0;
      display: flex;
      flex-direction: column;
      z-index: 1;
      background: ${({ theme }) => theme.background};
      width: 100%;
      text-align: center;
      transition: all 0.5s ease-in-out;
    }
    .nav-item {
      margin: 16px 0;
      width: 80%;
    }
    .nav-menu.active {
      top: 150px;
    }
  }

  @media (max-width: 768px) {
    .nav-menu.active {
      top: 100px;
    }
  }
`
