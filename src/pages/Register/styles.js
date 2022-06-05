import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  max-width: 350px;
  min-height: 100vh;
  margin: 0rem auto 10rem auto;

  .logo {
    margin-bottom: 2rem;
    
    svg {
      width: 250px;
      path {
        fill: ${({ theme }) => theme.secondary};
      }
    }
  }

  form {
    display: flex;
    width: 100%;

    .inputs {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .email,
      .password, 
      .user {
        display: flex;
        flex-direction: column;
        width: 100%;

        input {
          height: 50px;
          padding: 1rem;
          padding-left: 2rem;
          border: none;
          border-radius: 4px;
          background-color: ${({ theme }) => theme.inputs};
        }
        
        label {
          user-select: none;
          color: ${({ theme }) => theme.secondary};
          margin-bottom: 0.8rem;
          font-size: 1.6rem;
        }
      }

      .container-remember {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .remember {
          display: flex;
          align-items: center;
          font-size: 1.6rem;
          gap: 0.8rem;
          color: ${({ theme }) => theme.secondary};
        }

        a {
          text-decoration: none;
          font-size: 1.6rem;
          color: ${({ theme }) => theme.secondary};
        }
      }
    }
  }
`
