import styled from 'styled-components'

export const HomeContainer = styled.main`
  color: ${(props) => props.theme.text};

  font-size: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  h2,
  p span {
    font-size: 2rem;
    text-transform: capitalize;

    font-weight: 700;

    color: ${(props) => props.theme.strong};
    text-shadow: 1px 1px 15px rgba(255, 255, 255, 0.3);
  }

  button {
    background: ${(props) => props.theme.hover};
    padding: 20px 30px;
    border-radius: 8px;
    border: none;

    font-size: 1rem;
    text-transform: capitalize;
    font-weight: 700;
    color: ${(props) => props.theme.text};

    transition: all 0.5s;
    :hover {
      background: ${(props) => props.theme.text};
      color: ${(props) => props.theme.hover};
    }
  }
`
