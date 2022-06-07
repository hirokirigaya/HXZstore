import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1280px;
  margin: 7rem auto 5rem auto;
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

        img {
          border-radius: 0.4rem;
        }
      }

      .desc {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 2rem;

        .btn-buy {
          min-width: 150px;
        }
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
            justify-content: space-around;

            .discount-price {
              gap: 0.8rem;
              display: flex;
              align-items: center;

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
              align-items: center;

              button {
                border: none;
                background-color: transparent;
                color: ${({ theme }) => theme.primary};
                font-size: 2.6rem;
                font-weight: 700;
              }

              input[type='number']::-webkit-inner-spin-button {
                -webkit-appearance: none;
              }

              input {
                text-align: center;
                color: ${({ theme }) => theme.primary};
                outline: none;
                font-size: 2.4rem;
                font-weight: 700;
                border: none;
                width: 30px;
                background-color: transparent;
                margin-bottom: .5rem;
              }
            }
          }

          .quant-buy {
            display: flex;
          }

        }
        @media (min-width: 830px) {
          .buy {
            flex-direction: row;
            width: 100%;
            justify-content: space-between;

            .discount-price-count {
              width: 100%;
              justify-content: space-between;
            }
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

      h2 {
        font-size: 2rem;
        text-align: center;
        color: ${({ theme }) => theme.primary};
        margin-bottom: 2rem;
      }

    .specifications {
      overflow-x: auto;

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
              height: 50px;
              padding: 1rem;
              min-width: 200px;
            }
          }
        }
      }
    }
    }
  }
`
