import React from 'react'
import MidNav from './Cardheading'
import card from './card.png'
const Cardbody = () => {
  return (
    <div className='mt-5 ml-40'>
      <h2 className=' font-bold text-xl text-blue-800'>Relations and Functions ( Mathematics )</h2>
      <MidNav/>
      <div>
      <img  src={card} className='mt-5 pl-20  ml-60 h-auto w-90 rounded-lg '/>
      <a href='#'><i class="mt-5 pl-20  ml-60 mr-20 text-4xl bi bi-arrow-repeat "></i></a>
      <a href='#'><i class="text-3xl ml-40 bi bi-arrow-left-square"></i></a>
      <span className='ml-2 mr-2 text-3xl'>6/10</span>
      <a href='#'><i class="text-3xl  bi bi-arrow-right-square"></i></a>
      <a href='#'><i class="ml-40 pl-10 text-3xl bi bi-fullscreen"></i></a>

      </div>
      
      
   </div>
  )
}


export default Cardbody
