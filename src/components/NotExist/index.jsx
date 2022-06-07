import { Container } from "./styles";
import { Link } from "react-router-dom";

export function NotExist(props) {
  return (
    <Container>
      <div>
        <h2>{props.content}</h2>
        {props.haveButton === true ? <button><Link to={props.linkButton}>{props.textButton}</Link></button>: ''}
      </div>
    </Container>
  )
}
