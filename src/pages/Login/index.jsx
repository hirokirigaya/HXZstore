import { Container } from './styles'
import { Logo } from '../../components/img/Logo'
import { Link } from 'react-router-dom'
import { ButtonForm } from '../../components/Button'
import { Checkbox } from '../../components/Checkbox'
export function Login() {
  return (
    <Container>
      <div className='logo'>
        <Logo />
      </div>
      <form>
        <section className="inputs">
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
          <Link to="/register">REGISTER</Link>
          </div>
          <ButtonForm text="LOGIN"/>
        </section>
      </form>
    </Container>
  )
}
