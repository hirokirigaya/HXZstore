import styled from 'styled-components'

export const ContainerSlider = styled.section`
  width: 100%;
  position: relative;

  .title-text {
    max-width: 1280px;
    z-index: 229;
    position: absolute;
    color: #fff;
    top: 50%;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: space-between;
    margin: auto;

    .text {
      display: flex;
      flex-direction: column;
    }
  }

  p {
    font-size: 1.6rem;
    padding-top: 0.5rem;
    color: #fff;
  }

  @media (min-width: 600px){
    p {
      font-size: 3rem;
    }
  }

  .leftarrow,
  .rightarrow {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 1rem;
    border: none;
    color: #fff;
    font-size: 5rem;
    background-color: transparent;
  }
    .slider-img {
      z-index: 228;
      user-select: none;
      filter: brightness(0.6);
      width: 100%;
      height: 500px;
      object-fit: cover;
    }

  @media (min-width: 900px) {
    .title-text {
      text-align: start;

      .text {
        position: absolute;
        font-size: 3rem;
        left: 10%;
        top: -30%;
      }
    }
  }
`
