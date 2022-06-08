import styled from 'styled-components'

export const Header = styled.header`
  background-color: ${(props) => props.theme.bg};
  z-index: 1000;
  width: 100%;
  color: ${(props) => props.theme.primary};
  position: fixed;
  top: 0;

  .section {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .container-logo {
      padding: 1rem;
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .toggle-menu {
      border: none;
      background-color: transparent;
      cursor: pointer;
      z-index: 1000;

      svg {
        color: ${({ theme }) => theme.primary};
      }
    }

    .logo {
      text-decoration: none;
      font-size: 2rem;
      color: ${(props) => props.theme.primary};
    }

    .container-icons {
      display: flex;
      padding: 1rem;
      align-items: center;
      gap: 1.5rem;

      .buttons {
        border: none;
        background: transparent;
        color: ${(props) => props.theme.primary};
        text-decoration: none;

        
        #cart {
          position: relative;
          p {
            background-color: ${({theme}) => theme.pink};
            border-radius: 50px;
            width: 15px;
            height: 15px;
            position: absolute;
            bottom: 70%;
            right: 0;
            display: flex;
            justify-content: center;
            align-items: center;

            span {
              color: ${({theme}) => theme.primary};
              font-size: 1.2rem;
            }
          }
        }
        .user {
          color: ${(props) => props.theme.primary};
          border: none;
          background-color: transparent;
          cursor: pointer;
        }

        .dropdown-user {
          position: absolute;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 2rem;
          top: 130%;
          right: 2%;
          background-color: ${(props) => props.theme.bg};
          border-radius: 4px;
          box-shadow: 0.3rem 0.5rem 1.5rem 0.3rem hsl(0, 0%, 41%);

          button {
            background-color: ${(props) => props.theme.secondary};
            border: none;
            width: 100%;
            border-radius: 4px;
            padding: 0.5rem 1rem;
            cursor: pointer;

            a {
              text-decoration: none;
              color: ${(props) => props.theme.bg};
              text-transform: uppercase;
              font-weight: 600;
            }
          }
        }

        .dropdown-user {
          button {
            transition: filter ease-in-out 0.2s;
            &:hover {
              filter: brightness(0.9);
            }
          }
        }

        @media (min-width: 900px) {
          .dropdown-user {
            position: absolute;
            right: 0.5%;
          }
        }

        @media (min-width: 1300px) {
          .dropdown-user {
            position: absolute;
            right: 3%;
          }
        }

        @media (min-width: 1500px) {
          .dropdown-user {
            position: absolute;
            right: 8%;
          }
        }

        @media (min-width: 1700px) {
          .dropdown-user {
            position: absolute;
            right: 16%;
          }
        }
      }
    }

    .moon__sun {
      display: flex;
      align-items: center;
      width: 30px;
      height: 30px;
      padding: 0.2rem;
      color: ${(props) => props.theme.btntext};
      background: ${(props) => props.theme.button};
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }

    svg {
      width: 25px;
      height: 20px;
    }

    /// Mobile menu ///

    .content {
      width: 100%;

      .container-nav.off {
        display: block;
        position: absolute;
        left: -100vw;
        z-index: 998;
      }
      .container-nav {
        width: 100%;
        background-color: ${(props) => props.theme.bg};
        position: absolute;
        z-index: 998;
        top: 100%;
        left: 0;
        width: 100vw;
        transition: 500ms all cubic-bezier(0.67, 0.01, 0.1, 0.97);
      }
      .menu-mobile {
        color: ${(props) => props.theme.primary};
        max-width: 1280px;
        margin: 0 auto;

        ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2rem;
          padding: 1rem;
          height: 160px;

          li a {
            color: ${(props) => props.theme.primary};
            text-decoration: none;
          }
        }
      }
    }
  }
`

export const Overlay = styled.div`
  .overlay.off {
    pointer-events: none;
    opacity: 0;
  }

  .overlay {
    transition: 500ms all cubic-bezier(0.67, 0.01, 0.1, 0.97);
    position: fixed;
    opacity: 1;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 800;
  }
`
