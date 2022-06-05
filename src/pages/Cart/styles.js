import styled from 'styled-components'

export const CartSection = styled.main`
max-width: 1280px;
margin: 0 auto;
margin-top: 10rem;
height: 100vh;
padding: 1rem;

.cart-section {
  background-color: #16592862;
  max-width: 900px;
  
  .cart-container {
    display: flex;
    
    tr {
      display: flex;
      align-items: center;
    }
      .cart-img {
        width: 13rem;
        height: 13rem;
      }
    }
  }
`