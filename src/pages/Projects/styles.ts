import styled from 'styled-components'

export const ProjectsContainer = styled.main`
  h2 {
    font-size: 2rem;
    text-transform: capitalize;

    font-weight: 700;

    color: ${(props) => props.theme.strong};
    text-shadow: 1px 1px 15px rgba(255, 255, 255, 0.3);

    text-align: center;
  }
`
