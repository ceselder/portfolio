import React, { createContext, useRef } from 'react'
import Wave from 'react-wavify'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import ProjectsCarousel from '../components/ProjectsCarousel/ProjectsCarousel'
import Title from '../components/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import ContactIcon from '../components/ContactIcon'
import TextLoop from '../components/TextLoop'
import Bold from '../components/Bold'

export default function Index({ data }) {

  const aboutMeRef = useRef(null);
  const scrollToAboutMe = () => aboutMeRef.current.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <div className='min-h-[100vh] h-full simvoni bg-extend-bg text-black pb-20'>
        <div className=' text-white bg-extend-purple flex flex-col'>
          <Navbar scrollToAboutMe={scrollToAboutMe} />
          <h1 className='pt-10 pb-2 font-bold text-8xl self-center'>
            Celeste
          </h1>
          <TextLoop className='flex pb-20 text-4xl justify-center text-white opacity-80 ' 
                      interval={1000} 
                      contents={['Developer', 'Student', 'Arch User', 'Vegan']} />

        </div>
        <Wave fill='#501b55ff'
          className='rotate-180 fill-slate-200 '
          paused={false}
          options={{
            height: 20,
            amplitude: 80,
            speed: 0.2,
            points: 2
          }} />
        <div className='flex flex-col mt-8 gap-y-20 justify-center'>
          <div className='self-center flex flex-col'>
            <Title text="About me 👋" />
            <div className='flex flex-row justify-between min-w-[55rem]'>
              <img className='h-[22rem]' src="img/about_me.svg" />
              <div className='self-center text-xl max-w-[30rem]' ref={aboutMeRef}>
                Welcome! My name is <span className='font-bold'>Celeste</span>.
                I&apos;m a computer science student at <span className='font-bold'>Ghent University</span>.
                Currently obsessed with full-stack web development. 
                Strong understanding of 
                {/* Fluent in <span className='font-bold'>English</span> and <span className='font-bold'>Dutch</span>. */}
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
            <Title text={`Skillset 🔧`} />
            <div className='mt-10 flex flex-row justify-between min-w-[50rem] ml-32'>
              <div className='self-center text-xl max-w-sm' ref={aboutMeRef}>
                <Bold>React</Bold> is my bread and butter, only second to <Bold>Svelte</Bold>. 
                I have some self-thought experience in <Bold>UI/UX</Bold>.
                
              </div>
              <img className='h-[22rem]' src="img/experience_celeste.svg" />
            </div>
          </div>
          <div className='self-center flex flex-col'>
            <Title text="Contact ✉️" />
            <div className='flex flex-row justify-center min-w-[50rem]'>
              <div className='self-center text-center text-xl ' ref={aboutMeRef}>
                Want to discuss a project, job opportunity or something else?
                <br />You can contact me here.
                <div className='justify-center flex flex-row gap-x-4 my-2'>
                  <ContactIcon color='[#5865F2]' text='celeste#4332' icon={faDiscord} />
                  <ContactIcon color='black' onClick={() => window.open('https://github.com/ceselder')} text='ceselder' icon={faGithub} />
                  <ContactIcon color='extend-purple' onClick={() => window.open('mailto:cooletrogen@protonmail.com')} text='coolestrogen@protonmail.com' icon={faEnvelope} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}
