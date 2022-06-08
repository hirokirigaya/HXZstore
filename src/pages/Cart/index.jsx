import { CartSection } from './styles'
import { cartStore } from '../../providers/useProducts';
import { useContext, useState } from 'react';
import { FiPlus as Plus, FiMinus as Minus, FiTrash2 as Trash } from 'react-icons/fi'
import { NotExist } from '../../components/NotExist';

export function Cart() {
  const [value, setValue] = useState(0);

  const {state, dispatch} = useContext(cartStore);


  const cartItems = state.cart.cartItems
 
  const handleSumValue = (item) => {
    dispatch({
      type: 'SUM_ITEM_CART',
      payload: {
        id: item.id,
        quant: item.quant + 1,
      }
    })
  }
  const handleSubValue = (item) => {
    if(item.quant == 1) {
      return;
    }
    dispatch({
      type: 'SUB_ITEM_CART',
      payload: {
        id: item.id,
        quant: item.quant - 1,
      }
    })
  }

  const removeItemCart = (item) => {
    dispatch({
      type: 'REMOVE_ITEM_CART',
      payload: {
        id: item.id,
      }
    })
  }
  const Change = (e) => {
    let change = e.target.value;
    setValue(parseInt(change));
  };
  // console.log(cartItems.filter(item => item))


  return (
    <> {cartItems.length > 0 ?
    <CartSection>
    <section className='cart-section'>
    <table>
      <tbody className='cart-container'>
        {cartItems.map((item) => (

          <tr key={item.id}>
            <td><img src={item.img} className='cart-img' /></td>
            <td><h2>{item.title}</h2></td>
            <td></td> 
            <td className='cart-counter'>
              <button onClick={() => handleSubValue(item)}>
                <Minus/>
              </button>
              <input type="number" className='input-counter' value={item.quant} onChange={Change}/>
              <button onClick={()=> handleSumValue(item)}>
                <Plus/>
              </button>
            </td>
            <td className='price'><p><span>$</span>{Math.floor((item.price - (item.discount / 100 * item.price )) * item.quant)}<span>,00</span></p></td>
            <td className='cart-trash'><button onClick={() => removeItemCart(item)}><Trash /></button></td>
          </tr>
          ))}
      </tbody>
    </table>
    </section>
    <section className='cart-aside'>
      <aside>
        <div className='aside-container'>
          <p>HXZ</p>
          <div className='button-aside'>
            <button className='dark-btn'>card</button>
            <button className='pink-btn'>paypal</button>
          </div>
          <div className='input-aside'>
            <input type="text" placeholder='name on card'/>
            <input type="number" placeholder='card number'/>
          <div className='input-two'>
            <input type="number" placeholder='expiration'/>
            <input type="number" placeholder='cvv' />
          </div>
          <div className='checkout-btn'>
            {/* <p>total</p> */}
            <button>checkout</button>
          </div>
          </div>
        </div>
      </aside>
    </section>
   </CartSection> 
   : <NotExist content="The cart is empty" haveButton={true} textButton="Buy Products" linkButton="/products"/>}
   </>
  )
}