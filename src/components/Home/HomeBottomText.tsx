import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2'>
      <Link className='text-[6.5vw] border-5 border-white rounded-full uppercase px-10 leading-[6vw] pt-3'>Agence</Link>
      <Link className='text-[6.5vw] border-5 border-white rounded-full uppercase px-10 leading-[6vw] pt-3'>Projects</Link>
    </div>
  )
}

export default HomeBottomText