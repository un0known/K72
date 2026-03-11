import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)

  const imgArray: string[] = [
    '/agency/CAMILLE_480X640_2.jpg',
    '/agency/Carl_480x640.jpg',
    '/agency/ChantalG_480x640.jpg',
    '/agency/Claire_480x640.jpg',
    '/agency/HugoJoseph_480x640.jpg',
    '/agency/joel_480X640_3.jpg',
    '/agency/Lawrence_480x640.jpg',
    '/agency/MAXIME_480X640_2.jpg',
    '/agency/MEGGIE_480X640_2.jpg',
    '/agency/MEL_480X640.jpg',
    '/agency/Michele_480X640.jpg',
    '/agency/MyleneS_480x640.jpg',
    '/agency/Olivier_480x640.jpg',
    '/agency/SophieA_480x640.jpg',
  ]

  useGSAP(function () {

    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: 'top 0%',
        end: 'top -180%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: function (elem: ScrollTrigger) {
          let imageIndex: number
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imgArray.length)
          } else {
            imageIndex = imgArray.length - 1
          }

          // null saftey
          if (imageRef.current) {
            imageRef.current.src = imgArray[imageIndex]
          }
        }
      }
    })
  })

  return (


    <div className='parent'>
      <div id='page1' className='py-1 relative'>
        
        <div className='relative font-[font2] z-10'>
          <div className='lg:mt-[55vh] mt-[30vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>SEVEN7Y <br /> TWO</h1>
          </div>
          <div className='lg:pl-[40%] lg:mt-20 mt-4 p-3'>
            <p className='lg:text-5xl text-xl leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner.
              A brand is a living thing, with values, a personality and a story. If we ignore that,
              we can achieve short-term success, but not influence that goes the distance.
              We bring that perspective to every brand story we help tell.
            </p>
          </div>
        </div>
        <div ref={imageDivRef} className='absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] 
        lg:top-96 -top-48 lg:left-[30vw] left-[30vw] -mt-[20vw]'>
          <img ref={imageRef} className=' h-full object-cover w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>
      </div>
      <div id='page2' className=" h-screen">

      </div>
    </div>


    // <div className='parent'>
    //   <div className='section1 y-1'>
    //     <div ref={imageDivRef}
    //       className='absolute overflow-hidden top-[10vw] left-[31vw] h-72 w-52 rounded-3xl bg-red-500'>
    //       <img ref={imageRef} src="/agency/CAMILLE_480X640_2.jpg" className='w-full h-full object-cover' alt="" />
    //     </div>
    //     <div className='font-[font2] relative'>
    //       <div className='mt-[55vh]'>
    //         <h1 className='text-[19vw]  uppercase leading-[17vw] text-center' >SEVEN7Y <br /> TWO</h1>
    //       </div>
    //       <div className='pl-[40%] mt-20'>
    //         <p className='text-6xl'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //           We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner.
    //           A brand is a living thing, with values, a personality and a story. If we ignore that,
    //           we can achieve short-term success, but not influence that goes the distance.
    //           We bring that perspective to every brand story we help tell.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="section2 h-screen">

    //   </div>
    // </div>
  )
}

export default Agence