import React from 'react'
import logo from "../assets/thefloordoc.png"
import floor1 from "../assets/floorcleaner.png"
import floor2 from "../assets/concretebuffer.png"
import floor3 from "../assets/refinish.png"

const home = () => {
  return (
    <>
    <div class="flex grid-cols-3 justify-center">
      <div></div>
      <div>
        <img src={logo} alt="title" class="object-contain" />
      </div>
      <div></div>
      

      </div>
      <div class="justify-left block text-left ml-20 mr-20">
        <span class="font-semibold text-3xl font-body md:text-[35px]">Does your floor need a pick me up?</span>
        <br />
        <br/>
        <span class="font-normal text-xl font-body">
          The Floor Doc is a dependable, authentc, and friendly Kiwi business.specialising in comprehensive floor cleaning,
          polishing, refinishing, and repair services. This includes a focus on hardwood flooring with a
          crossover into tiles and polished concrete.
          <br/><br/>
          Inspired by the name itself, our company aims to provide effectve solutons to flooring-
          related issues, much like a skilled doctor attending to patents. If you are in the Auckland region and need a medic
          to save your floors, get in touch!
        </span>
      </div>
      <div class="flex gap-6">
        <img src={floor1} />
        <img src={floor2} />
        <img src={floor3}/>
      </div>
      </>
  )
}

export default home