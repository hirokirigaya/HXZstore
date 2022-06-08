import { Header, Overlay } from './styles'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import {
  FiAlignLeft as Menu,
  FiUser as User,
  FiX as Close,
  FiShoppingBag as Cart,
  FiTrash2 as Delete,
  FiMoon as Moon,
  FiSun as Sun,
} from 'react-icons/fi'
import { cartStore } from '../../providers/useProducts'

const navigationLinks = [
  {
    id: 1,
    name: 'HOME',
    link: '/',
  },
  {
    id: 2,
    name: 'PRODUCTS',
    link: '/products',
  },
  {
    id: 3,
    name: 'ABOUT',
    link: '/about',
  },
]

export function Navbar({ toggleTheme, isDarkMode }) {
  const [open, setOpen] = useState(false)

  const [dropdown, setDropdown] = useState(false)

  const {state} = useContext(cartStore)
  const haveProducts = state.cart.cartItems.length

  const toggleMenu = () => {
    setOpen(!open)
  }

  const toggleDropdown = () => {
    setDropdown(!dropdown)
  }

  return (
    <>
      <Header>
        <section className="section">
          <div className="content">
            <div className="container-logo">
              <button onClick={toggleMenu} className="toggle-menu">
                {open === false ? <Menu /> : <Close />}
              </button>
              <Link to="/" className="logo">
                HXZ
              </Link>
            </div>
            <div
              className={open === true ? 'container-nav' : 'container-nav off'}
            >
              <nav className="menu-mobile">
                <ul>
                  {navigationLinks.map((item, index) => (
                    <li
                      key={item.id}
                      style={{
                        opacity: 0,
                        filter: index ? 'opacity(0.7)' : 'opacity(1)',
                        animation: open
                          ? `navLinkAnimation ${
                              index / 7 + 0.5
                            }s ease forwards ${index / 7 + 0.3}s`
                          : '',
                      }}
                    >
                      <Link to={item.link}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <div className="container-icons">
            <button className="buttons">
              <Link to="/cart"  className="buttons" id='cart'>
                {haveProducts > 0 &&
                <p className='item-cart'><span>{haveProducts}</span></p>
                }
                <Cart />
              </Link>
            </button>
            <div className="buttons" onClick={toggleDropdown}>
              <button className="user">
                <User />
              </button>
              {dropdown && (
                <div className="dropdown-user">
                  <button>
                    <Link to="/login">login</Link>
                  </button>
                  <button>
                    <Link to="/register">register</Link>
                  </button>
                </div>
              )}
            </div>
            <button onClick={toggleTheme} className="moon__sun">
              {isDarkMode ? <Sun /> : <Moon />}
            </button>
          </div>
        </section>
      </Header>
      <Overlay onClick={toggleMenu}>
        <div className={open === true ? 'overlay' : 'overlay off'}></div>
      </Overlay>
    </>
  )
}
