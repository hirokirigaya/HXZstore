import { CartSection } from './styles'
import Pc from '/imgs/pc1.png'
import { useState } from 'react';
import { FiPlus as Plus, FiMinus as Minus, FiTrash2 as Trash } from 'react-icons/fi'



export function Cart() {
  const [value, setValue] = useState(0);
  
  const handleSumValue = () => {
    setValue(value != 0 ? value + 1 : value + 1)
  }
  const handleSubValue = () => {
    setValue(value === 0 ? 0 : value - 1)
  }

  const Change = (e) => {
    let change = e.target.value;
    setValue(parseInt(change));
  };

  return (
    <CartSection>
    <section className='cart-section'>
    <table>
      <tbody className='cart-container'>
          <tr>
            <td><img src={Pc} className='cart-img' /></td>
            <td><h2>Cobault</h2></td>
            <td></td> 
            <td className='cart-counter'>
              <button onClick={handleSubValue}>
                <Minus/>
              </button>
              <input type="number" className='input-counter' value={value} onChange={Change}/>
              <button onClick={handleSumValue}>
                <Plus/>
              </button>
            </td>
            <td className='price'><p><span>$</span>1.500<span>,00</span></p></td>
            <td className='cart-trash'><button><Trash /></button></td>
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