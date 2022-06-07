import styled from 'styled-components'

const CustomCheckbox = styled.div`

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
