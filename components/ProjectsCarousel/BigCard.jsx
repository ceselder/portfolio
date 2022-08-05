import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

export default function BigCard({project}) {
  return (
    <div className='max-h-[30rem] w-[30rem] shadow-xl bg-gray-200 rounded-2xl mx-8'>
      <div className='h-[20rem] max-w-fit z-0'>
      <img className='max-w-fit h-[20rem] absolute z-10 object-cover rounded-t-2xl' src={project.img} />
    
      <div className='relative z-20 flex min-w-[30.25rem] justify-end'>
        <FontAwesomeIcon onClick={() => window.open(project.url)} 
                         className='text-white mt-3 justify-end text-2xl hover:cursor-pointer hover:opacity-75' 
                         icon={faArrowRightFromBracket} />
      </div>
      </div>

      <div className='text-3xl font-bold mt-2 text-center'>
        {project.name}
      </div>
      <div className='mt-0 text-lg opacity-75 text-center line-clamp-4 px-1'>
        {project.description}
      </div>
    </div>
  )
}
