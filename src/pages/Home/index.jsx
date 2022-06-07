import { useState, useEffect } from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom'
import Banner from '/imgs/imgHome.png'
// import BannerMobile from '/imgs/imgHome.png'
import { FiChevronRight as Arrow } from 'react-icons/fi'
import { api } from '../../services/api'
import { Slider } from '../../components/Slider'
import { Footer } from '../../components/Footer'

export function Home() {
  const [computers, setComputers] = useState()

  useEffect(() => {
    api.get('/computersvitrine').then((response) => setComputers(response.data))
  }, [])

  const [peripherals, setPeripherals] = useState()

  useEffect(() => {
    api
      .get('/peripheralsvitrine')
      .then((response) => setPeripherals(response.data))
  }, [])

  return (
    <Container>
      <section className="first-section">
        <div className="text-container">
          <img src={Banner} className="banner-img" />
          <div className="text">
            <div className="content-text">
              <h1>Let's Build</h1>
              <p>Your Gaming computer online now !</p>
              <Link to="/register">
                <button className="button">
                  get started
                  <Arrow />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="computers-section">
        <h2>computers</h2>
        <div className="responsive">
          <div className="content-responsive">
            {computers?.map((computer) => (
              <div className="computer-container" key={computer.id}>
                <Link to={`/products/${computer.slug}`}>
                  <img src={computer.img} className="pcone" />
                  <div className="price">
                    <p className="title">{computer.title}</p>
                    <p className="price-info">
                      <span>$</span>
                      {Math.floor(computer.price - (computer.discount / 100 * computer.price))}
                      <span>,00</span>
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="computers-section">
        <h2>Peripherals</h2>
        <div className="responsive">
          <div className="content-responsive">
            {peripherals?.map((peripheral) => (
              <div className="computer-container" key={peripheral.id}>
                <Link to={`/products/${peripheral.slug}`}>
                  <img src={peripheral.img} className="pcone" />
                  <div className="price">
                    <p className="title">{peripheral.title}</p>
                    <p className="price-info">
                      <span>$</span>
                      {Math.floor(peripheral.price - (peripheral.discount / 100 * peripheral.price))}
                      <span>,00</span>
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Slider />
    </Container>
  )
}
