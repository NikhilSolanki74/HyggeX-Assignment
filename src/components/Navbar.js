import React from 'react'
import logo from './Hy.png'
const Navbar = () => {
  return (
    <div className="bg-white p-4">
      <div className="container mx-auto flex items-center justify-between ">
        <div>
        <a href='#'>
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </a>
        </div>
        <div>
          <ul className="flex space-x-10 hr" >
            <li>
              <a href='#' className="text-black text-lg hover:text-gray-300 p-">Home</a>
            </li>
            <li>
              <a href='#' className="text-black text-lg hover:text-gray-300">Flashcard</a>
            </li>
            <li>
              <a href='#' className="text-black text-lg hover:text-gray-300">Contact</a>
            </li>
            <li>
              <a href='#' className="text-black text-lg hover:text-gray-300">FAQ</a>
            </li>
            <li>
              <a href='#' className="bg-blue-800 text-white rounded-full py-2 px-8 hover:bg-blue-700 transition duration-300">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
