import { Container } from './styles'
import { FiFilter as Filter, FiX as Close } from 'react-icons/fi'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FilterTab } from '../../components/Filter'
import { FilterDesk } from '../../components/FilterDesk'

export function Products() {
  const [products, setProducts] = useState()
  const [openFilter, setOpenFilter] = useState(false)

  const toggleOpenFilter = () => {
    setOpenFilter(!openFilter)
  }

  useEffect(() => {
    api.get('/products').then((response) => setProducts(response.data))
  }, [])

  return (
    <Container>
      <section className="content">
        <div className="filters">
          <button onClick={toggleOpenFilter}>
            {openFilter ? <Close/> : <Filter/>}
          </button>
          <div className={openFilter ? 'filter-mobile' :'filter-mobile off'}>
            <FilterTab/>
          </div>
          <select name="category" id="categories">
            <option value="all">ALL</option>
            <option value="Computer">Computer</option>
            <option value="Peripherals">Peripherals</option>
          </select>
        </div>

        <section className="container-products">
          <div className="filter-desktop">
            <FilterDesk/>
          </div>
          <div className="products">
            {products?.map((product) => {
              return (
                <div className="product" key={product.id}>
                  <Link to="/">
                    <img src={product.img} alt="computer" />
                    <div className="texts">
                      <p className="title">{product.title}</p>
                      <p className="price">
                        <span>$</span>
                        {product.price}
                        <span>,00</span>
                      </p>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </section>
      </section>
    </Container>
  )
}
