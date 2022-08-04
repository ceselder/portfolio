import React from 'react'

export default function Navbar({ scrollToAboutMe }) {
  return (
    <div className='flex flex-row gap-10 mt-6 mr-10 text-xl font-semibold justify-end'>
        <div onClick={scrollToAboutMe} className='hover:cursor-pointer hover:opacity-80'>
            About me
        </div>
        <div className='hover:cursor-pointer hover:opacity-80'>
            Projects
        </div>
        <div className='hover:cursor-pointer hover:opacity-80'>
            Experience
        </div>
        <div className='hover:cursor-pointer hover:opacity-80'>
            Contact
        </div>
    </div>
  )
}
