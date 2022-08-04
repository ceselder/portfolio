import React from 'react'

export default function BigCard({project}) {
  return (
    <div className='max-h-[30rem] w-[30rem] shadow-xl bg-gray-200 rounded-2xl mx-8'>
      <img className='w-fit h-[20rem] object-cover rounded-t-2xl' src={project.img} />
      <div className='text-3xl font-bold mt-2 text-center'>
        {project.name}
      </div>
      <div className='mt-0 text-lg opacity-75 text-center line-clamp-4 px-1'>
        {project.description}
      </div>
    </div>
  )
}
