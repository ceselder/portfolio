import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowRightFromBracket, faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'


export default function SmallCard({ onClick, project, direction }) {
  return (
    <div className='opacity-40 hover:opacity-80 hover:cursor-pointer transition-opacity duration-200 ease-out group max-h-[21rem] w-[21rem] shadow-xl bg-gray-200 rounded-2xl mx-8'>
      <div onClick={onClick} className='h-[14rem] max-w-fit z-0'>
        <img className='w-[21rem] object-fit h-[14rem] absolute z-10 rounded-t-2xl' src={project.img} />
        <div className='relative z-20 flex flex-row min-w-[21rem] h-full justify-center'>
          <FontAwesomeIcon 
            className='text-white  mt-3 self-center justify-end w-32 opacity-0 group-hover:opacity-100 transition-opacity ease-out duration-200'
            icon={(direction === 'right') ? faCircleArrowRight : faCircleArrowLeft} />
        </div>
      </div>

      <div className='text-3xl font-bold mt-2 text-center'>
        {project.name}
      </div>
      <div className='mt-0 text-lg opacity-75 text-center line-clamp-2 px-1'>
        {project.description}
      </div>
    </div>
  )
}
