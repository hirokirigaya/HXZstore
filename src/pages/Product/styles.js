import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 5rem;
  min-height: 90vh;

  .container-products {
    padding: 1rem;
    display: flex;
    flex-direction: column;

    .content-product {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 2rem;
      margin-bottom: 3rem;

      @media (min-width: 680px) {
        grid-template-columns: 1fr 1fr;
      }

      .img {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .desc {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 2rem;
        .title-stars {
          display: flex;
          gap: 3rem;
          align-items: center;

          h1 {
            font-size: 3.2rem;
            color: ${({ theme }) => theme.secondary};
            font-weight: 600;
          }

          p {
            color: ${({ theme }) => theme.secondary};
            font-size: 1.6rem;
          }
        }
        .buy {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          justify-content: center;
          /* align-items: center; */

          .discount-price-count {
            display: flex;
            justify-content: space-between;

            .discount-price {
              gap: 0.8rem;
              display: flex;

              .discount {
                display: flex;
                align-items: center;
                padding: 0 0.3rem;
                background-color: rgba(255, 94, 94, 0.3);
                color: ${({ theme }) => theme.pink};
              }

              .price {
                font-size: 2.4rem;
                color: ${({ theme }) => theme.primary};

                span {
                  font-size: 1.6rem;
                  color: ${({ theme }) => theme.secondary};
                }
              }
            }
            .count {
              display: flex;

              input[type='number']::-webkit-inner-spin-button {
                -webkit-appearance: none;
              }

              input {
                text-align: center;
                outline: none;
                font-weight: 700;
                border: none;
                width: 30px;
              }
            }
          }

          .quant-buy {
            display: flex;
          }
        }
        .desc-texts {
          display: flex;
          flex-direction: column;

          span {
            font-size: 1.6rem;
            text-transform: uppercase;
            color: ${({ theme }) => theme.pink};
          }
          p {
            color: ${({ theme }) => theme.secondary};
          }
        }
      }
    }

    // specifications
    .container-specifications {
      margin-top: 5rem;

    .specifications {
      overflow-x: scroll;

      h2 {
        font-size: 2rem;
        text-align: center;
        color: ${({ theme }) => theme.primary};
        margin-bottom: 2rem;
      }
      table {
        width: 100%;
        background-color: ${({ theme }) => theme.dark};
        thead {
          color: ${({ theme }) => theme.primary};
          tr {
            width: 100%;
            th {
              text-align: left;
            }
          }
        }
        tbody {
          color: ${({ theme }) => theme.secondary};
          tr {
            width: 100%;
            td {
              min-width: 200px;
            }
          }
        }
      }
    }
    }
  }
`
