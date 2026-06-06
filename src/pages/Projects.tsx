
import ProjectCard from '../components/Projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Projects = () => {
  const projects = [{
    image1: '/projects/project1.jpg',
    image2: '/projects/project2.jpg'
  }, {
    image1: '/projects/project3.jpg',
    image2: '/projects/project4.jpg'
  }, {
    image1: '/projects/project5.jpg',
    image2: '/projects/project6.jpg'
  }]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    gsap.from('.hero', {
      height: '100px',
      stagger:{
        amount:0.4
      },
      scrollTrigger:{
        trigger: '.lol',
        // markers: true,
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })

  return (
    <div className='lg:p-4 p-2 mb-[10vh]'>
      <div className=' pt-[45vh]'>
        <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase'>Projects</h2>
      </div>
      <div className='-lg:mt-10 lol'>
        {projects.map(function (elem, idx) {
          return <div key={idx} className='hero w-full lg:h-[60vh] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        })}
      </div>
    </div>
  )
}

export default Projects