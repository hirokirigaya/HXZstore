import styled from 'styled-components'

const CustomCheckbox = styled.div`
  display: flex;
  align-items: center;
  margin: .5rem;
  gap: .5rem;
/* 
  label {
    user-select: none;
    color: ${({ theme }) => theme.secondary};
  }
  
  input {
    display: none;
  }

  input[type= 'checkbox'] + label:before {
    content: '';
    width: 20px;
    height: 20px;
    display: inline-block;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.4);
    vertical-align: middle;
    margin-right: 8px;
    margin-bottom: 3px;
    border: none;
  }
  
  input[type= 'checkbox']:checked + label:before {
    background-image: url('./imgs/CheckBox.svg');
    background-position: center;
    background-repeat: no-repeat;
    border: none;
  } */
  label {
    user-select: none;
    color: ${({ theme }) => theme.secondary};
    cursor: pointer;
  }

  input[type = "checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    background-color: transparent;
    border: 2px solid ${({theme}) => theme.secondary};
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter ease-in-out 0.2s;
  }

  input[type = "checkbox"]:after {
    font-family: 'Font Awesome 5 Free';
    content: '\f00c';
    font-weight: 900;
    color: ${({theme}) => theme.primary};
    display: none;
  }

  input[type = "checkbox"]:checked:after {
    display: block;
  }
`
export function Checkbox(props) {
  return (
    <CustomCheckbox className="custom-checkbox">
      <input type="checkbox" id={props.id} />
      <label htmlFor={props.for}>{props.label}</label>
    </CustomCheckbox>
  )
}
