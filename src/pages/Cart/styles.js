import styled from 'styled-components'

export const CartSection = styled.main`
display: grid;
grid-gap: 10rem;
grid-template-columns: 1fr 1fr 1fr;
max-width: 1280px;
margin: 0 auto;
margin-top: 10rem;
height: 100vh;
padding: 1rem;

.cart-section {
  padding: 1rem 0.3rem;
  grid-column: 1/3;
  max-width: 900px;
  
  table {
    background-color: ${props => props.theme.dark};
    width: 100%;
  }

  .cart-container {
    display: flex;
    color: ${props => props.theme.primary};

    .cart-counter {
      display: flex;
      align-items: center;
      gap: 1.5rem;

      button {
        display: flex;
        align-items: center;
        border-radius: 50%;
        padding: 0.7rem;
        background-color: #ffffff;
        border: none;
      }
    }

    td {
      width: 100%;
    }

    
    tr {
      display: flex;
      align-items: center;
      width: 100%;
    }

      .cart-img {
        width: 10rem;
        height: 10rem;
      }
    }
  }

  .cart-aside {
    margin-top: 1rem;
    background-color: ${props => props.theme.dark};
    width: 80%;
    height: 55%;

    .aside-container {
      color: ${props => props.theme.primary};
      padding: 3.5rem 2rem;


      .button-aside {
        display: flex;
        gap: 3rem;
        padding-top: 3rem;

        .pink-btn {
          background-color: #FF5E5E;
        }

        .dark-btn {
          background-color: #0A090E;
        }

        button {
          padding: 1rem;
          width: 100%;
          border: none;
          border-radius: 4px;
          text-transform: uppercase;
          font-weight: 600;
          color: #ffffff;
        }
      }

      .input-aside {
        margin-top: 3rem;

        input {
          width: 100%;
          border: none;
          padding: 1.5rem;
          color: ${props => props.theme.primary};
          border-bottom: 1px solid ${props => props.theme.primary};
          background-color: ${props => props.theme.dark};
          text-transform: uppercase;
          outline: none;
        }

        input::placeholder {
          font-size: 1.3rem;
          color: ${props => props.theme.primary};
        }

        input[type='number']::-webkit-inner-spin-button {
          -webkit-appearance: none;
        }

      .input-two {
        display: flex;
        gap: 2rem;
      }
      }

      .checkout-btn {
        margin-top: 5rem;
        text-transform: uppercase;
        
        button {
          text-transform: uppercase;
          margin-top: 3rem;
          width: 100%;
          padding: 1rem;
          background-color: #0A090E;
          border: none;
          border-radius: 4px;
          color: #ffffff;
          font-weight: 600;
        }
      }
    }
  }
`