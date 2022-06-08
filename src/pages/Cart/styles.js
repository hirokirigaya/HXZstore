import styled from 'styled-components'

export const CartSection = styled.main`
  display: grid;
  grid-gap: 10rem;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 1280px;
  margin: 10rem auto;
  min-height: 80vh;
  padding: 1rem;

  .cart-section {
    padding: 1rem 0.3rem;
    grid-column: 1/3;
    max-width: 900px;

    table {
      width: 100%;
    }

    .cart-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      color: ${(props) => props.theme.primary};

      .price {
        text-align: center;
        p {
          font-size: 2rem;
          color: ${(props) => props.theme.primary};

          span {
            font-size: 1.6rem;
            color: ${(props) => props.theme.secondary};
          }
        }
      }

      .cart-counter {
        display: flex;
        align-items: center;
        gap: 1.5rem;

        input {
          width: 30px;
          font-weight: 700;
          text-align: center;
          border: none;
          outline: none;
          background-color: ${(props) => props.theme.dark};
          color: ${(props) => props.theme.primary};
        }

        input::placeholder {
          color: ${(props) => props.theme.primary};
        }

        input[type='number']::-webkit-inner-spin-button {
          -webkit-appearance: none;
        }

        button {
          display: flex;
          align-items: center;
          border-radius: 50%;
          padding: 0.7rem;
          background-color: #ffffff;
          border: none;
        }
      }

      .cart-trash {
        width: 30px;
        display: flex;
        justify-content: center;
        padding: 0.3rem 2rem;
        button {
          color: ${(props) => props.theme.primary};
        }
      }

      .cart-trash {
        button {
          display: flex;
          align-items: center;
          border: none;
          font-size: 2rem;
          background-color: transparent;
        }
      }
      td {
        width: 100%;
      }
      @media (max-width: 900px) {
        td {
          min-width: 120px;
        }
      }

      tr {
        background-color: ${(props) => props.theme.dark};
        display: flex;
        align-items: center;
        padding: .5rem;
        width: 100%;
        border-radius: 4px;
      }

      .cart-img {
        width: 10rem;
        height: 10rem;
      }
    }
  }

  @media (max-width: 900px) {
    .cart-section {
      overflow-x: auto;
      overflow-y: auto;
      max-height: 450px;
    }
  }

  .cart-aside {
    margin-top: 1rem;

    aside {
      display: flex;
      justify-content: flex-end;
    } //mover

    @media (max-width: 550px) {
      aside {
        justify-content: center;
      }
    }

    .aside-container {
      width: 80%;
      background-color: ${(props) => props.theme.dark};
      color: ${(props) => props.theme.primary};
      padding: 3.5rem 2rem;
      border-radius: 4px;

      .button-aside {
        display: flex;
        gap: 3rem;
        padding-top: 3rem;

        .pink-btn {
          background-color: #ff5e5e;
          transition: filter ease-in-out 0.3s;

          &:hover {
            filter: brightness(0.8);
          }
        }

        .dark-btn {
          background-color: #0a090e;
          transition: filter ease-in-out 0.3s;

          &:hover {
            filter: brightness(0.8);
          }
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
          color: ${(props) => props.theme.primary};
          border-bottom: 1px solid ${(props) => props.theme.primary};
          background-color: ${(props) => props.theme.dark};
          text-transform: uppercase;
          outline: none;
        }

        input::placeholder {
          font-size: 1.3rem;
          color: ${(props) => props.theme.primary};
        }

        input[type='number']::-webkit-inner-spin-button {
          -webkit-appearance: none;
        }

        .input-two {
          display: flex;
          gap: 2rem;
        }

        @media (max-width: 1250px) {
          .input-two {
            gap: 0;
          }
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
          background-color: #0a090e;
          border: none;
          border-radius: 4px;
          color: #ffffff;
          font-weight: 600;
          transition: filter ease-in-out 0.3s;


          &:hover {
              filter: brightness(0.8);
            }
        }

      }
    }
  }

  @media (max-width: 1250px) {
    .input-aside {
      .input-two {
        display: flex;
        flex-direction: column;
      }
    }
  }

  @media (max-width: 1050px) {
    .button-aside {
      display: flex;
      flex-direction: column;
    }
  }

  //media main
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 550px) {
    .cart-aside {
      grid-column: 1/3;
    }
  }
`
