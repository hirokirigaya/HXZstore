import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  body {
    font-family: 'Lexend', sans-serif;
    background-color: ${({theme}) => theme.bg};
  }

  body, input, button {
    font-size: 1.6rem;
  }
 
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: #e6e6e6;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #2E3847;
    border-radius: 4px;
    transition: 200ms ease-in-out;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #2E3655;
  }

@keyframes navLinkAnimation {
  from {
    opacity: 0;
    transform: translateX(-50px);
  } 
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}
`