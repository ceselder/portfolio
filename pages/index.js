import React, { createContext, useRef } from 'react'
import Wave from 'react-wavify'
import Navbar from '../components/Navbar'
import ProjectsCarousel from '../components/ProjectsCarousel/ProjectsCarousel'
import Title from '../components/Title'

export default function index({data}) {

  const aboutMeRef = useRef(null);
  const scrollToAboutMe = () => aboutMeRef.current.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <div className='min-h-[100vh] h-full text-simvoni bg-extend-black text-black pb-20'>
        <div className=' text-white bg-extend-blue flex flex-col'>
          <Navbar scrollToAboutMe={scrollToAboutMe} />
          <h1 className='pt-20 font-bold text-7xl self-center'>
            Celeste
          </h1>
        </div>
        <Wave fill='#570861'
          className='rotate-180 fill-slate-200'
          paused={false}
          options={{
            height: 20,
            amplitude: 80,
            speed: 0.2,
            points: 2
          }} />
        <div className='flex flex-col gap-y-20 justify-center'>
        <div className='flex flex-col self-center'>
            <Title text="Projects 👩‍💻" />
            <ProjectsCarousel projects={data} />
          </div>
          <div className='self-center flex flex-col'>
            <Title text="About me 👋" />
            <div className='flex flex-row justify-between min-w-[55rem]'>
              <img className='w-96 scale-150' src="img/Illustration.svg"/>
              <div className='self-center max-w-md' ref={aboutMeRef}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mauris ligula, pellentesque at urna sit amet, pretium bibendum erat. Nulla pharetra tincidunt libero, in tincidunt enim. Vivamus eu justo sit amet est feugiat placerat. Mauris ante justo, ornare ut iaculis ac, vestibulum at metus. Vestibulum eu auctor justo.
              </div>
            </div>
          </div>
          
          <div className='self-center flex flex-col'>
            <Title text="Experience 🤝" />
            <div className='mt-10 flex flex-row justify-between min-w-[50rem] ml-32'>
              <div className='self-center max-w-sm' ref={aboutMeRef}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mauris ligula, pellentesque at urna sit amet, pretium bibendum erat. Nulla pharetra tincidunt libero, in tincidunt enim. Vivamus eu justo sit amet est feugiat placerat. Mauris ante justo, ornare ut iaculis ac, vestibulum at metus. Vestibulum eu auctor justo.
              </div>
              <img className='w-[24rem] -scale-x-[130%] scale-y-[130%]' src="img/experience_2.svg"/>
            </div>
          </div>
          <div className='self-center flex flex-col'>
            <Title text="Contact ✉️" />
            <div className='mt-10 flex flex-row justify-between min-w-[50rem] mr-32'>
            <img className='w-[24rem] -scale-x-[130%] scale-y-[130%]' src="img/contact_2.svg"/>
              <div className='self-center max-w-sm' ref={aboutMeRef}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mauris ligula, pellentesque at urna sit amet, pretium bibendum erat. Nulla pharetra tincidunt libero, in tincidunt enim. Vivamus eu justo sit amet est feugiat placerat. Mauris ante justo, ornare ut iaculis ac, vestibulum at metus. Vestibulum eu auctor justo.
              </div>
              
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
