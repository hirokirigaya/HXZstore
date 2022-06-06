import { Container } from './styles'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'
import { ButtonForm } from '../../components/Button'
export function Product() {
  const [products, setProducts] = useState()

  useEffect(() => {
    api.get('/products').then((response) => setProducts(response.data))
  }, [])

  return (
    <Container>
      {products != undefined && (
        <section className="container-products">
          <div className="content-product">
            <div className="img">
              <img src={products[0]?.img} alt="" />
            </div>
            <div className="desc">
              <div className="title-stars">
                <h1>{products[0]?.title}</h1>
                <p>{products[0]?.stars} stars</p>
              </div>
              <div className="desc-texts">
                <span>{products[0]?.slogan}</span>
                <p>{products[0]?.desc}</p>
              </div>
              <div className="buy">
                <div className="discount-price-count">
                  <div className="discount-price">
                    <span className="discount">{products[0]?.discount}%</span>
                    <p className="price">
                      <span>$</span>
                      {products[0]?.price -
                        products[0]?.price / products[0]?.discount}
                      <span>,00</span>
                    </p>
                  </div>
                  <div className="count">
                    <button>-</button>
                    <input
                      type="number"
                      name="quant"
                      id="quant"
                      min="0"
                      defaultValue="0"
                    />
                    <button>+</button>
                  </div>
                </div>
                <div className="btn-buy">
                  <ButtonForm text="Add to Cart" />
                </div>
              </div>
            </div>
          </div>
          <section className='container-specifications'>
            <h2>Specifications</h2>
            <div className="specifications">
              <table>
                <thead>
                  <tr>
                    {products[0]?.thead.map((item, index) => (
                      <th key={index}>{item}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {products[0]?.specifications.map((item, index) => (
                      <td key={index}>{item}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </section>
      )}
    </Container>
  )
}
