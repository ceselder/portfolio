import React from 'react'

export default function Button({ text }) {
  return (
    <div className='bg-extend-purple hover:cursor-pointer hover:underline transition ease-in-out px-4 py-2 rounded-xl text-extend-bg text-simvoni text-2xl font-bold'>
      {text}
    </div>
  )
}
