import styled from 'styled-components'

export const AboutContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 20px;
`
export const TextContainer = styled.section`
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 15px;

  h2 {
    font-size: 2rem;
    text-transform: capitalize;

    font-weight: 700;

    color: ${(props) => props.theme.strong};
    text-shadow: 1px 1px 15px rgba(255, 255, 255, 0.3);
  }
  p {
    color: ${(props) => props.theme.text};
    text-indent: 30px;
  }
`

export const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

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

  ul li {
    display: flex;
    align-items: center;
    gap: 8px;

    font-size: 1.5rem;

    justify-content: center;
  }

  ul li span {
    color: ${(props) => props.theme.strong};
  }

  ul li a {
    color: ${(props) => props.theme.text};
    text-decoration: none;

    text-transform: uppercase;
    :active {
      color: ${(props) => props.theme.text};
    }
  }
`
