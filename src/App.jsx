import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle'
import { Navbar } from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Product } from './pages/Product'
import { Products } from './pages/Products'
import { Register } from './pages/Register'
import { Cart } from './pages/Cart'
import { Footer } from './components/Footer'


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  
  const toggleTheme = () => {
   setIsDarkMode(!isDarkMode)
  }

  return (
   <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
     <GlobalStyle/>
     
     <Router>
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:product' element={<Product/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
        <Footer />
     </Router>
   </ThemeProvider>
  )
}

export default App;