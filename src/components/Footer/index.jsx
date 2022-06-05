import { FooterContainer } from './styles'
import {
  FiTwitter as Twitter,
  FiInstagram as Intagram,
  FiGithub as Github,
  FiFacebook as Facebook,
} from 'react-icons/fi'

export function Footer() {
  return (
    <FooterContainer>
      <section className="footer-container">
        <div className="container-icons">
          <a href="#">
            <Facebook />
          </a>
          <a href="#">
            <Github />
          </a>
          <a href="#">
          <Intagram />
          </a>
          <a href="#">
          <Twitter />
          </a>
        </div>
        <div className="footer-text">
          <p>2022 &copy; all Rights Reserved </p>
          <p className='authors'>
            <span>Made with ❤ by</span> <a href="https://www.linkedin.com/in/daniel-junio-0832481bb/" target="_blank">Daniel</a> <span>and</span> <a href="https://www.linkedin.com/in/michael-rodrigues12/" target="_blank">Michael</a>
          </p>
        </div>
      </section>
    </FooterContainer>
  )
}
