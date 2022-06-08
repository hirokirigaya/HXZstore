import styled from 'styled-components'

export const Container = styled.main`
  min-height: 100vh;
  margin: 10rem 0rem;

  .filter-desktop {
    display: none;
    pointer-events: all;
  }

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .filters {
      position: relative;
      max-width: 1280px;
      margin: 0 auto;
      width: 100%;
      padding: 0rem 2rem 3rem 2rem;
      display: flex;
      justify-content: space-between;

      button {
        border: none;
        z-index: 299;
        padding: 1rem;
        background-color: transparent;
        cursor: pointer;
        font-size: 2.4rem;
        color: ${(props) => props.theme.primary};
      }

      select {
        border: 2px solid ${(props) => props.theme.primary};
        border-radius: 4px;
        font-size: 1.6rem;
        background-color: transparent;
        color: ${(props) => props.theme.primary};
        font-weight: 600;

        option {
         background-color: ${(props) => props.theme.bg};
         color: ${(props) => props.theme.primary};
        }
      }

      .filter-mobile {
        position: absolute;
        display: block;
        opacity: 1;
        transition: all 150ms ease-in-out;
        transform: rotateY(0deg);
        width: calc(100vw - 48px);
      }
      .filter-mobile.off {
        opacity: 0;
        transform: rotateY(30deg);
        pointer-events: none;
      }
      @media (min-width: 1280px) {
        justify-content: flex-end;
        .filter-mobile {
          display: none;
        }

        button {
          display: none;
        }
      }
    }
    .container-products {
      display: flex;
      gap: 25px;

      .products {
        display: grid;
        grid-template-columns: 1fr;
        .product {
          width: 300px;
          margin-bottom: 3rem;
          a {
            text-decoration: none;
            transition: filter ease-in-out 0.3s;

            &:hover {
              filter: brightness(1.3);
            }

            img {
              width: 100%;
            }

            .texts {
              display: flex;
              justify-content: space-between;

              .title {
                font-size: 2rem;
                color: ${({ theme }) => theme.secondary};
              }

              .price {
                color: ${({ theme }) => theme.secondary};
                font-size: 1.8rem;

                span {
                  color: ${({ theme }) => theme.primary};
                  font-size: 1.4rem;
                }
              }
            }
          }
        }
      }
      @media (min-width: 668px) {
        .products {
          display: grid;
          grid-gap: 35px;
          grid-template-columns: 1fr 1fr;
        }
      }
      @media (min-width: 1024px) {
        .products {
          display: grid;
          grid-gap: 35px;
          grid-template-columns: 1fr 1fr 1fr;
        }
      }
      @media (min-width: 1280px) {
        .filter-desktop {
          z-index: 400;
          display: block;
          pointer-events: all;
        }
      }
    }
  }
`
