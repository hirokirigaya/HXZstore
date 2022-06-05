import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  form {
    padding: 4rem;
    border-radius: 4px;
    background-color: ${({theme}) => theme.dark};
    display: flex;
    flex-direction: column;
    gap: 2rem;

    #price {
      max-width: 150px;
      border: none;
      background-color: transparent;
      font-size: 1.6rem;
      font-weight: 600;
      color: ${({theme}) => theme.secondary};
    }
    .product-type, .discount, .evaluated {
      p {
        color: ${({theme}) => theme.secondary};
        margin-bottom: 1rem;
        font-weight: 600;
      }
    }
  }
`