import React from 'react'
import log from './log.png'
const Lowerbody = () => {
  return (
    
    <div className='flex flex-direction-row'>
       <img src={log} className='h-20 w-auto ml-40 my-20'></img><span className='mt-20 pt-7 mr-60 font-bold text-3xl text-blue-800'>HyggeX</span>
       <span className='mt-20 pt-8 ml-80 pl-80 text-2xl font-bold text-blue-800'><i class="bi bi-plus-circle-fill"></i> <a  href='#'>Create Flashcard</a></span>
    </div>
  )
}

export default Lowerbody
