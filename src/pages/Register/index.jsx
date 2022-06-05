import { Container } from "./styles"
import { Logo } from '../../components/img/Logo'
import { Link } from 'react-router-dom'
import { ButtonForm } from '../../components/Button'
import { Checkbox } from "../../components/Checkbox"
export function Register() {
  return (
     <Container>
      <div className='logo'>
        <Logo />
      </div>
      <form>
        <section className="inputs">
          <div className='user'>
          <label htmlFor="user">USER</label>
          <input type="text" id="user" placeholder="Enter your name" />
          </div>
          <div className='email'>
          <label htmlFor="email">EMAIL</label>
          <input type="text" id="email" placeholder="Enter your email" />
          </div>
          <div className='password'>
          <label htmlFor="password">PASSWORD</label>
          <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <div className='container-remember'>
          <div className='remember'>
           <Checkbox label="REMEMBER ME" id="remember" for="remember"/>
          </div>
          <Link to="/login">LOGIN</Link>
          </div>
          <ButtonForm text="REGISTER"/>
        </section>
      </form>
    </Container>
  )
}
