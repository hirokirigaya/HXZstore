import { dataSlider} from './dataSlider'

import { ContainerSlider } from './styles'

import {FiChevronLeft as LeftArrow,FiChevronRight as RightArrow } from 'react-icons/fi'
import { useState } from 'react'


export function Slider() {
  const [sliderAtual, setSliderAtual] = useState(0)
  const totalSlider = dataSlider.length - 1
  
  const prevSlider = () => {
    if(sliderAtual < 1) {
      return setSliderAtual(dataSlider.length - 1)
    }
    setSliderAtual(sliderAtual - 1)
  }

  const nextSlider = () => {
    if(sliderAtual == totalSlider) {
      return setSliderAtual(0)
    }
    setSliderAtual(sliderAtual + 1)
  }


  return (
    <ContainerSlider>
        <div className='title-text'>
          <button className='leftarrow' onClick={prevSlider}>
           <LeftArrow />
          </button>
          <div className='text'>
          {<h2>{dataSlider[sliderAtual].title}</h2> }
          {<p>{dataSlider[sliderAtual].description}</p>} 
          </div>
          <button className='rightarrow' onClick={nextSlider}>
            <RightArrow />
          </button>
        </div>
        <div className='slider-container'>
          <img src={dataSlider[sliderAtual].img} className='slider-img' />        
        </div>
      </ContainerSlider>
  )
}
