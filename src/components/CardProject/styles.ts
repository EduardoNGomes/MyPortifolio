import styled from 'styled-components'

export const CardProjectContainer = styled.div`
  position: relative;
  max-width: 300px;
  img {
    max-width: 100%;
    border-radius: 8px;
    height: 200px;
  }

  > div {
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    bottom: 10px;
    left: 10px;

    border-radius: 8px;

    padding: 10px;

    color: white;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 5px;
    }
    p a {
      font-size: 1rem;
      color: white;
      text-transform: capitalize;

      text-decoration: none;

      :hover {
        color: #40e0d0;
      }
    }
  }

  @media (max-width: 768px) {
    > div {
      h3 {
        font-size: 1.2rem;
      }
    }
  }
`
