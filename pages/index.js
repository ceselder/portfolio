import React, { createContext, useRef } from 'react'
import Wave from 'react-wavify'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import ProjectsCarousel from '../components/ProjectsCarousel/ProjectsCarousel'
import Title from '../components/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"

export default function index({ data }) {

  const aboutMeRef = useRef(null);
  const scrollToAboutMe = () => aboutMeRef.current.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <div className='min-h-[100vh] h-full simvoni bg-extend-bg text-black pb-20'>
        <div className=' text-white bg-extend-purple flex flex-col'>
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
          <div className='self-center flex flex-col'>
            <Title text="About me 👋" />
            <div className='flex flex-row justify-between min-w-[55rem]'>
              <img className='w-96 scale-150' src="img/Illustration.svg" />
              <div className='self-center text-lg max-w-md' ref={aboutMeRef}>
                Welcome! My name is Celeste.
                I'm a computer science student at Ghent University.
                Currently obsessed with full-stack web development.
                Fluent in English and Dutch.
                <div className='flex flex-row gap-x-4 mt-4'>
                  <Button text={'Get in touch!'} />
                  <Button text={'My resume!'} />
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col self-center'>
            <Title text="Projects 👩‍💻" />
            <ProjectsCarousel projects={data} />
          </div>


          <div className='self-center flex flex-col'>
            <Title text="Experience 🤝" />
            <div className='mt-10 flex flex-row justify-between min-w-[50rem] ml-32'>
              <div className='self-center max-w-sm' ref={aboutMeRef}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mauris ligula, pellentesque at urna sit amet, pretium bibendum erat. Nulla pharetra tincidunt libero, in tincidunt enim. Vivamus eu justo sit amet est feugiat placerat. Mauris ante justo, ornare ut iaculis ac, vestibulum at metus. Vestibulum eu auctor justo.
              </div>
              <img className='w-[24rem] -scale-x-[130%] scale-y-[130%]' src="img/experience_2.svg" />
            </div>
          </div>
          <div className='self-center flex flex-col'>
            <Title text="Contact ✉️" />
            <div className='mt-10 flex flex-row justify-between min-w-[50rem] mr-32'>
              <img className='w-[24rem] -scale-x-[130%] scale-y-[130%]' src="img/contact_2.svg" />
              <div className='self-center max-w-sm' ref={aboutMeRef}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mauris ligula, pellentesque at urna sit amet, pretium bibendum erat. Nulla pharetra tincidunt libero, in tincidunt enim. Vivamus eu justo sit amet est feugiat placerat. Mauris ante justo, ornare ut iaculis ac, vestibulum at metus. Vestibulum eu auctor justo.
                <div className='flex flex-row gap-x-4 my-2'>
                  <FontAwesomeIcon className='w-10 h-10' icon={faGithub} />
                  <FontAwesomeIcon className='w-10 h-10' icon={faTwitter} />
                  <FontAwesomeIcon className='w-10 h-10' icon={faDiscord} />
                  <FontAwesomeIcon className='w-10 h-10' icon={faTwitter} />
                  <FontAwesomeIcon className='w-10 h-10' icon={faTwitter} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}
