'use client'
import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full overflow-hidden'>
      <video
        className='h-full w-full object-cover'
        src='/videos/herosec.mp4' autoPlay muted loop> </video>

    </div>
  )
}

export default Video