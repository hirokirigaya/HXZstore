import { Container } from './styles'
import { api } from '../../services/api'
import { useContext, useEffect, useState } from 'react'
import { ButtonForm } from '../../components/Button'
import { useParams } from 'react-router-dom'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { cartStore } from '../../providers/useProducts'
import { NotExist } from '../../components/NotExist'
import { Loading } from '../../components/Loading'

export function Product() {
  const [products, setProducts] = useState()
  const [productQtd, setProductQtd] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  const {addItemCart} = useContext(cartStore)


  const handleSumValue = () => {
    setProductQtd(productQtd != 0 ? productQtd + 1 : productQtd + 1)
  }
  const handleSubValue = () => {
    setProductQtd(productQtd === 1 ? 1 : productQtd - 1)
  }

  const Change = (e) => {
    let change = e.target.value;
    setProductQtd(parseInt(change));
  };


  useEffect(() => {
    api.get('/products').then((response) => {
      setProducts(response.data) 
      setIsLoading(false)
    })
  }, [])
  
  let params = useParams()
  const productId = params.product
  
  const product = products?.filter((product) => product.slug === productId)
  return (
    <>
      {isLoading && <Loading/> } 
      { !isLoading && product?.length > 0 &&
    <Container>
        <section className="container-products">
          <div className="content-product">
            <div className="img">
              <img src={product[0]?.img} alt="" />
            </div>
            <div className="desc">
              <div className="title-stars">
                <h1>{product[0]?.title}</h1>
                <p>{product[0]?.stars} stars</p>
              </div>
              <div className="desc-texts">
                <span>{product[0]?.slogan}</span>
                <p>{product[0]?.desc}</p>
              </div>
              <div className="buy">
                <div className="discount-price-count">
                  <div className="discount-price">
                    <span className="discount">{product[0]?.discount}%</span>
                    <p className="price">
                      <span>$</span>
                      {Math.floor(product[0]?.price - (product[0]?.discount / 100 * product[0]?.price ))} 
                        
                      <span>,00</span>
                    </p>
                  </div>
                  <div className="count">
                    <button onClick={handleSubValue}><FiMinus/></button>
                    <input
                      type="number"
                      name="quant"
                      id="quant"
                      min="0"
                      value={productQtd}
                      onChange={Change}
                    />
                    <button onClick={handleSumValue}><FiPlus/></button>
                  </div>
                </div>
                <div className="btn-buy">
                  <ButtonForm text="Add to Cart" buttonProps={{onClick: () => {addItemCart(
                    {
                      id: product[0].id,
                      title: product[0].title,
                      price: product[0].price,
                      slug: product[0].slug,
                      quant: productQtd, 
                      img: product[0].img,
                      discount: product[0].discount,
                    }
                  )}}}/>
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
                    {product[0]?.thead.map((item, index) => (
                      <th key={index}>{item}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {product[0]?.specifications.map((item, index) => (
                      <td key={index}>{item}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </section>
    </Container> 
        }
    {product?.length == 0 && !isLoading && <NotExist content="Product don't found" haveButton={false}/>}
    </>
  )
}
