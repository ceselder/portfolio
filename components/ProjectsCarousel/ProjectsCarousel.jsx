import React, { useState } from 'react'
import SmallCard from './SmallCard'
import BigCard from './BigCard'
import Title from '../Title'

const projects = [
    { name: 'lofi-focus', 
      img: 'img/lofi-focus.png', 
      description: 'Full stack Comfy site to get all your work done written with react/next.js',
      technologies: ['react', 'nextjs', 'tailwind'],
      url: 'https://lofi-focus.vercel.app' },

    { name: 'debate-bro', 
      img: 'img/debate-bro.jpg', 
      description: 'Full stack Omegle-style debate platform written with react/nextjs. Uses WebRTC',
      technologies: ['react', 'nextjs', 'tailwind', 'redis'],
      url: 'https://debate-bro.com' },

    { name: 'tft-coaching', 
      img: 'img/tft-coaching.png', 
      description: 'Full stack E-commerce coaching site written with svelte/sveltekit.',
      technologies: ['svelte', 'postgres', 'tailwind'],
      url: 'https://github.com/ceselder/tft-coaching-sveltekit' },

]

function calculateSelectedProjects(currIndex)
{
    //cant use % because otherwise maxRange === projects.length ends up as 0
    let maxRange = ((currIndex + 3) > projects.length) ? projects.length : currIndex + 3
    let rest = (projects.length % (currIndex + 3))

    const projectsInRange = projects.slice(currIndex, maxRange)
    const projectsLooped = projects.slice(0, rest)

    return projectsInRange.concat(projectsLooped)
}

export default function ProjectsCarousel() {
    //just realized i dont need a carousel but I refuse
    //to delete the other code
    const [currIndex, setCurrIndex] = useState(0);
    let selectedProjects = calculateSelectedProjects(currIndex)

    function moveRight()
    {
        setCurrIndex(currIndex => (currIndex + 1) % projects.length)
    }

    function moveLeft()
    {
        setCurrIndex(currIndex => (currIndex <= 0) ? projects.length - 1 : currIndex - 1)
    }
    return (
        <>
            <div className='mt-2'>
                <div className='flex flex-row'>
                    <SmallCard onClick={moveLeft} direction={'left'} project={selectedProjects[0]} />
                    <BigCard project={selectedProjects[1]} />
                    <SmallCard onClick={moveRight} direction={'right'} project={selectedProjects[2]} />
                </div>
            </div>
        </>

    )
}
