import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className=' font-[font1] pt-5 text-center'>
      <div className='text-[9.5vw] uppercase leading-[8vw] flex justify-center items-center'>The spark for</div>
      <div className='text-[9.5vw] uppercase leading-[8vw] flex justify-center items-center'>
        all <div className='h-[7vw] w-[16vw] -mt-5 rounded-full overflow-hidden'><Video /></div> things
      </div>
      <div className='text-[9.5vw] uppercase leading-[8vw] flex justify-center items-center'> creative</div>
    </div>
  )
}

export default HomeHeroText