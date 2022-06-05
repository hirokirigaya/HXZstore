import { Container } from './styles'
import { Checkbox } from '../Checkbox'

export function FilterDesk() {
  return (
    <Container>
      <form>
        <select name="price" id="price">
          <option value="1500">Up to $1500</option>
        </select>
        <div className='product-type'>
          <p>Product Type</p>
          <Checkbox label="Gamer" id="game" for="game"/>
          <Checkbox label="Casual" id="casua" for="casua"/>
        </div>
        <div className='discount'>
          <p>Product Type</p>
          <Checkbox label="More of 80%" id="more80" for="more80"/>
          <Checkbox label="From 60% to 80%" id="60t80" for="60t80"/>
          <Checkbox label="From 30% to 60%" id="30t60" for="30t60"/>
          <Checkbox label="From 10% to 30%" id="10t30" for="10t30"/>
          <Checkbox label="To 10%" id="t10" for="t10"/>
        </div>
        <div className='evaluated'>
          <p>Evaluated</p>
          <Checkbox label="5 stars" id="5star" for="5star"/>
          <Checkbox label="4 stars" id="4star" for="4star"/>
          <Checkbox label="3 stars" id="3star" for="3star"/>
          <Checkbox label="2 stars" id="2star" for="2star"/>
          <Checkbox label="1 stars" id="1star" for="1star"/>
        </div>
      </form>
    </Container>
  )
}
