import { Container } from './styles'
import { Checkbox } from '../Checkbox'

export function FilterTab() {
  return (
    <Container>
      <form>
        <select name="price" id="price">
          <option value="1500">Up to $1500</option>
        </select>
        <div className='product-type'>
          <p>Product Type</p>
          <Checkbox label="Gamer" id="gamer" for="gamer"/>
          <Checkbox label="Casual" id="casual" for="casual"/>
        </div>
        <div className='discount'>
          <p>Product Type</p>
          <Checkbox label="More of 80%" id="80" for="80"/>
          <Checkbox label="From 60% to 80%" id="60to80" for="60to80"/>
          <Checkbox label="From 30% to 60%" id="30to60" for="30to60"/>
          <Checkbox label="From 10% to 30%" id="10to30" for="10to30"/>
          <Checkbox label="To 10%" id="to10" for="to10"/>
        </div>
        <div className='evaluated'>
          <p>Evaluated</p>
          <Checkbox label="5 stars" id="5stars" for="5stars"/>
          <Checkbox label="4 stars" id="4stars" for="4stars"/>
          <Checkbox label="3 stars" id="3stars" for="3stars"/>
          <Checkbox label="2 stars" id="2stars" for="2stars"/>
          <Checkbox label="1 stars" id="1stars" for="1stars"/>
        </div>
      </form>
    </Container>
  )
}
