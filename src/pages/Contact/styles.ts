import styled from 'styled-components'

export const ContactContainer = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-bottom: 30px;
  h2 {
    font-size: 2rem;
    text-transform: capitalize;

    font-weight: 700;

    color: ${(props) => props.theme.strong};
    text-shadow: 1px 1px 15px rgba(255, 255, 255, 0.3);
  }

  ul {
    display: flex;
    gap: 2rem;
  }

  ul li a {
    display: flex;
    align-items: center;
    gap: 10px;

    font-size: 1.5rem;

    justify-content: center;
    color: ${(props) => props.theme.text};
    text-decoration: none;

    text-transform: uppercase;
    :active {
      color: ${(props) => props.theme.text};
    }

    :hover {
      text-shadow: 1px 1px 15px rgba(255, 255, 255, 0.3);
    }
  }

  ul li a span {
    color: ${(props) => props.theme.strong};
  }
`
