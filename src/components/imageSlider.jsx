import React from 'react'
import { useState } from 'react'
import floor1 from "../assets/floorcleaner.png"
import floor2 from "../assets/concretebuffer.png"
import floor3 from "../assets/refinish.png"
import { GrPrevious, GrNext } from 'react-icons/gr';

const imageSlider = () => {
    const [slide, setSlide] = useState(0)
    const images = [floor1, floor2, floor3]

    const nextSlide = () => {
        setSlide(slide === images.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide ===0 ? images.length - 1 : slide - 1)
    }
    
  return (
      <div class="w-3/4 flex justify-center items-center mt-32 mx-auto">
          <GrPrevious onClick={prevSlide} class="cursor-pointer right-8 w-6 mr-6" />
          
          {images.map((service, index) => {
              return (
                  <div class={index === slide ? 'opacity-1 transition ease-in-out duration-1000' : 'opacity-0 transition ease-in-out duration-300'}
                  key={index} class="">
                      {index === slide && (
                          <img src={service} alt='service'  />
                      )}
                  </div>
              )
          })}
          <GrNext onClick={nextSlide} class="cursor-pointer left-8 w-6 ml-6" />
          
      </div>
  )
}

export default imageSlider