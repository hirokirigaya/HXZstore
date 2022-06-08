import styled from 'styled-components'

export const Container = styled.main`
  margin-top: 5.5rem;

  .first-section {
    .text-container {
      color: #ffffff;
      display: flex;
      flex-direction: column;
      font-size: 2.4rem;
      position: relative;


      .banner-img {
        width: 100%;
        min-height: 500px;
        object-fit: cover;
        position: relative;
        box-shadow: inset 0 0 200px #000000;
        filter: brightness(0.9);
      }

      .text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100%;

        .content-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 1rem;
          gap: 1rem;
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;

        }
        @media (min-width: 600px) {
          .content-text {
            font-size: 3rem;
          }
        }
      }
      a {
        text-decoration: none;

        .button {
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 1rem;
          border: none;
          padding: 1rem;
          background-color: #333d4e;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
          font-size: 1.8rem;
          text-transform: uppercase;
          transition: filter ease-in-out 0.3s;


          &:hover {
            filter: brightness(0.8);
          }
          
          svg {
            color: #ffffff;
          }
        }
      }
    }
  }

  .computers-section {
    margin-bottom: 5rem;

    h2 {
      text-align: center;
      padding: 3rem 0;
      font-weight: 600;
      color: ${(props) => props.theme.primary};
      text-transform: uppercase;
    }

    .computer-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 1rem 0 3rem 0;

      a {
        text-decoration: none;
        transition: filter ease-in-out .3s;

        &:hover {
          filter: brightness(1.3);
        }
      }

      .pcone {
        width: 300px;
        height: 250px;
      }

      .price {
        display: flex;
        width: 100%;
        justify-content: space-between;
        color: ${(props) => props.theme.primary};

        .title {
          font-size: 2rem;
          color: ${(props) => props.theme.secondary};
        }

        .price-info {
          font-size: 2rem;

          span {
            color: ${(props) => props.theme.secondary};
            font-size: 1.4rem;
          }
        }
      }
    }
  }

  @media (min-width: 600px) {
    .responsive {
      max-width: 90%;
      margin: 0 auto;
    }
    .content-responsive {
      display: grid;
      grid-template-columns: 1fr;
    }
  }

  @media (min-width: 700px) {
    .responsive {
      max-width: 90%;
      margin: 0 auto;
    }
    .content-responsive {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1024px) {
    .responsive {
      max-width: 980px;
      margin: 0 auto;
    }
    .content-responsive {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`
