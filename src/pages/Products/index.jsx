import { Container } from './styles'
import { FiFilter as Filter, FiX as Close } from 'react-icons/fi'
import { api } from '../../services/api'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FilterTab } from '../../components/Filter'
import { FilterDesk } from '../../components/FilterDesk'
import { Loading } from '../../components/Loading'

export function Products() {
  const [products, setProducts] = useState()
  const [openFilter, setOpenFilter] = useState(false)
  const [selectFilterProduct, setSelectedFilterProduct] = useState(products)

  const toggleOpenFilter = () => {
    setOpenFilter(!openFilter)
  }

  useEffect(() => {
    api.get('/products').then((response) => {
      setProducts(response.data)
      setSelectedFilterProduct(response.data)
    })
  }, [])

  function ChangeSelectedCategory(e) {
    let optionSelect = e.target.options[e.target.selectedIndex].value
    if (optionSelect === 'all') {
     return setSelectedFilterProduct(products)
    }
    if (optionSelect) {
      const filtredProducts = products.filter(
        (product) => product.category === optionSelect
      )
      setSelectedFilterProduct(filtredProducts)
    } else {
      setSelectedFilterProduct(products)
    }
  }

  return (
    <Container>
      <section className="content">
        <div className="filters">
          <button onClick={toggleOpenFilter}>
            {openFilter ? <Close /> : <Filter />}
          </button>
          <div className={openFilter ? 'filter-mobile' : 'filter-mobile off'}>
            <FilterTab />
          </div>
          <select
            name="category"
            id="categories"
            onChange={ChangeSelectedCategory}
          >
            <option value="all">ALL</option>
            <option value="computer">Computer</option>
            <option value="peripherals">Peripherals</option>
          </select>
        </div>

        <section className="container-products">
          <div className="filter-desktop">
            <FilterDesk />
          </div>
          {products === undefined ? (
            <Loading />
          ) : (
            <div className="products">
              {selectFilterProduct?.map((product) => {
                return (
                  <div className="product" key={product.id}>
                    <Link to={`/products/${product.slug}`}>
                      <img src={product.img} alt="computer" />
                      <div className="texts">
                        <p className="title">{product.title}</p>
                        <p className="price">
                          <span>$</span>
                          {Math.floor(
                            product.price -
                              (product.discount / 100) * product.price
                          )}
                          <span>,00</span>
                        </p>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          )}
        </section>
      </section>
    </Container>
  )
}
