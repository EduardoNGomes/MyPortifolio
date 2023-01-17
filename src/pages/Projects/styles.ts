import styled from 'styled-components'

export const ProjectsContainer = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column;

  gap: 30px;
  h2 {
    font-size: 2rem;
    text-transform: capitalize;

    font-weight: 700;

    color: ${(props) => props.theme.strong};
    text-shadow: 1px 1px 15px rgba(255, 255, 255, 0.3);

    text-align: center;
  }
`

export const LatestProjectsContainer = styled.div`
  h3 {
    font-size: 1.6rem;
    text-transform: capitalize;

    font-weight: 700;

    color: ${(props) => props.theme.strong};

    text-align: center;
    margin-bottom: 50px;
    text-decoration: underline;
  }
  > div {
    display: flex;
    justify-content: space-between;
  }
`

export const AllProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-size: 1.6rem;
    text-transform: capitalize;

    font-weight: 700;

    color: ${(props) => props.theme.strong};

    margin-bottom: 50px;
    text-decoration: underline;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
  }

  ul li {
    list-style: disc;
    color: ${(props) => props.theme.text};
  }
  ul li a {
    font-size: 1rem;
    text-decoration: none;
    color: ${(props) => props.theme.text};
    text-transform: capitalize;

    :hover {
      text-shadow: 1px 1px 15px rgba(255, 255, 255, 0.3);
    }
  }
`
