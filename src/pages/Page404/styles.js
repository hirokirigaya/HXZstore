import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1280px;
  margin: 5rem auto;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${({theme}) => theme.primary};
  }
`