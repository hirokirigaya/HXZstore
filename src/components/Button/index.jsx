import styled from 'styled-components'

const Button = styled.button`
  padding: 1rem;
  height: 50px;
  width: 100%;
  font-weight: 600;
  background-color: ${({theme}) => theme.btnbg};
  color: #FFF;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: filter .2s;

  &:hover {
    filter: brightness(1.1);
  }
`


export function ButtonForm(props) {
  return (
    <Button {...props.buttonProps}>{props.text}</Button>
  )
}
