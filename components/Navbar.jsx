import React from 'react'

export default function Navbar({ scrollToAboutMe, scrollToProjects, scrollToSkillset, scrollToContact }) {
  return (
    <div className='flex flex-row gap-10 mt-6 mr-10 text-xl font-semibold justify-end'>
        <div onClick={scrollToAboutMe} className='hover:cursor-pointer hover:opacity-80'>
            About me
        </div>
        <div onClick={scrollToProjects} className='hover:cursor-pointer hover:opacity-80'>
            Projects
        </div>
        <div onClick={scrollToSkillset} className='hover:cursor-pointer hover:opacity-80'>
            Skillset
        </div>
        <div onClick={scrollToContact} className='hover:cursor-pointer hover:opacity-80'>
            Contact
        </div>
    </div>
  )
}
