import styled from 'styled-components'

export const FooterContainer = styled.section`
  background-color: ${(props) => props.theme.bgfooter};
  .footer-container {
    margin-top: -0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 30vh;
    gap: 3rem;

    .container-icons {
      display: flex;
      justify-content: center;
      font-size: 2.6rem;
      gap: 2rem;
    }

    .container-icons a {
      list-style: none;
      color: #ffffff;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.7);
      }
    }

    .footer-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #2e3847;

      p {
        padding-bottom: 1rem;
        font-size: 1.3rem;
      }

      .authors a {
        text-decoration: none;
        color: #3b60e4;
        transition: filter 0.2s;

        &:hover {
          filter: brightness(1.3);
        }
      }

      span {
        color: #2e3847;
      }
    }
  }
`
