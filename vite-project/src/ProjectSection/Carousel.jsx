import React from 'react'
import { InsightSlider } from './InsightCarData'

const CarouselOne = () => {
          
          return (
      <>
          {InsightSlider.map((slide, index) => {
              return (
              <img src={slide.image} alt="Insight logins"></img>
          )
      })}
      </>
  )
}

export default CarouselOne