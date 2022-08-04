import React, { createContext } from 'react'
import Wave from 'react-wavify'
import Navbar from '../components/Navbar'
import ProjectsCarousel from '../components/ProjectsCarousel'
import Title from '../components/Title'

export default function index({data}) {
  return (
    <>
      <div className='min-h-[100vh] h-full text-simvoni bg-gray-200'>
        <div className='bg-orange-600 text-white flex flex-col'>
          <Navbar />
          <h1 className='pt-20 font-bold text-6xl self-center'>
            Celeste
          </h1>
        </div>
        <Wave fill='#EA580C'
          className='rotate-180'
          paused={false}
          options={{
            height: 40,
            amplitude: 40,
            speed: 0.25,
            points: 2
          }} />
        <div className='flex flex-col justify-center'>
          <div className='self-center w-96 flex flex-col'>
            <Title text="About me" />
            <div className=''>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mauris ligula, pellentesque at urna sit amet, pretium bibendum erat. Nulla pharetra tincidunt libero, in tincidunt enim. Vivamus eu justo sit amet est feugiat placerat. Mauris ante justo, ornare ut iaculis ac, vestibulum at metus. Vestibulum eu auctor justo.
            </div>
          </div>
          <div className='self-center'>
            <ProjectsCarousel projects={data} />
          </div>
        </div>
      </div>

    </>
  )
}
