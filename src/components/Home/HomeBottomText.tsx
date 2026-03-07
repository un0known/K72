import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font1] flex items-center justify-center gap-2'>
      <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-20 border-white rounded-full uppercase px-10 flex items-center'>
        <Link to='projects'
          className='text-[5vw]  mt-3'>
          Projects
        </Link>
      </div>
      <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-20 border-white rounded-full uppercase px-10 flex items-center'>
        <Link to='agence'
          className='text-[5vw] mt-3'>
          Agence
        </Link>
      </div>
    </div>
  )
}

export default HomeBottomText