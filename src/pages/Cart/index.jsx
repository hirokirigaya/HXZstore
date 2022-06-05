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
     <td><button><Minus/></button></td>
     <td>0</td>
     <td><button><Plus/></button></td>
     <td>$ 1.500,00</td>
   </tr>
   </tbody>
    </table>
    </section>

   </CartSection>
  )
}