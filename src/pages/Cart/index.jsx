import { CartSection } from './styles'
import Pc from '/imgs/pc1.png'
import { FiPlus as Plus, FiMinus as Minus } from 'react-icons/fi'



export function Cart() {
  return (
    <CartSection>
    <section className='cart-section'>
    <table>
      <tbody className='cart-container'>
   <tr>
     <td><img src={Pc} className='cart-img' /></td>
     <td><h2>Cobault</h2></td>
     <td></td> 
     <td className='cart-counter'><button><Minus/></button>0<button><Plus/></button></td>
     <td>$ 1.500,00</td>
   </tr>
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
            <p>total</p>
            <button>checkout</button>
          </div>
          </div>
        </div>
      </aside>
    </section>
   </CartSection>
  )
}