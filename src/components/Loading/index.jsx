import styled from 'styled-components'

const LoadingDiv = styled.div`
  display: flex;
  height: 500px;
  width: 100%;
  min-width: 70vw;
  align-items: center;
  justify-content: center;

.loader {
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  border: 5px solid ${({theme}) => theme.bg};
  border-top-color: ${({theme}) => theme.primary};
  box-sizing: border-box;
  background: transparent;
  animation: loading 1s linear infinite;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`
export function Loading() {
  return (
    <LoadingDiv>
      <div className="loader"></div>
    </LoadingDiv>
  )
}
