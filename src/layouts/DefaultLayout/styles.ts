import styled from 'styled-components'

export const DefaultLayoutContent = styled.div`
  padding: 50px;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 150px;
`

export const OutletContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.hover};
  padding: 10px;
`
