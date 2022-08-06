import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'

const iconDict = {
  'react': 'devicon-react-original',
  'nextjs': 'devicon-nextjs-original',
  'svelte': 'devicon-svelte-plain colored',
  'tailwind': 'devicon-tailwindcss-plain colored',
  'postgres': 'devicon-postgresql-plain colored',
  'redis': 'devicon-redis-plain-wordmark colored'
}


export default function BigCard({ project }) {
  return (
    <div className='max-h-[30rem] w-[30rem] shadow-xl bg-gray-200 rounded-2xl mx-8'>
      <div className='h-[20rem] max-w-fit z-0'>
        <img className='w-[30rem] h-[20rem] absolute z-10 object-cover rounded-t-2xl' src={project.img} />
        <div className='relative z-20 flex min-w-[28.75rem] justify-end'>
          <FontAwesomeIcon onClick={() => window.open(project.url)}
            className='text-white mt-4 justify-end w-10 hover:cursor-pointer hover:opacity-75'
            icon={faArrowRightFromBracket} />
        </div>
      </div>

      <div className='text-3xl font-bold mt-2 text-center'>
        {project.name}
      </div>
      <div className='mt-0 text-lg opacity-75 text-center line-clamp-2 min-h-[3.5rem] px-1'>
        {project.description}
      </div>
      <div className='flex flex-row justify-center self-end gap-3 m-2'>
          {project.technologies.map(tech => <i key={tech} className={`text-4xl ${iconDict[tech]} `}></i>)}
        </div>
    </div>
  )
}
