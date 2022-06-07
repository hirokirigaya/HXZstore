import styled from 'styled-components'

export const Container = styled.main`
  min-height: 80vh;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 5rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 100%;
    height: 70vh;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 2.2rem;
      letter-spacing: 8px;
      color: ${({ theme }) => theme.secondary};
    }
    button {
      background-color: ${({theme}) => theme.primary};
      padding: 1rem;
      border-radius: 4px;
      border: none;
      transition: filter ease-in-out 0.2s;

      &:hover {
        filter: brightness(0.8);
      }

      a {
        text-decoration: none;
        color: ${({theme}) => theme.bg};
        font-weight: 700;
      }

    }
  }
`