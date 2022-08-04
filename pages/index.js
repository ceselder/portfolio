import React from 'react'
import Waves from '../components/Waves'
import Navbar from '../components/Navbar'

export default function index() {
  return (
    <>
      <div className='min-h-[100vh] h-full text-simvoni bg-gray-300'>
        <div className='bg-orange-600 text-white flex flex-col'>
          <Navbar />
          <h1 className='pt-20 font-bold text-6xl self-center'>
            Celeste
          </h1>
        </div>
        <Waves color="#EA580C" />
        <div>
          celeste
        </div>
        <div>
          index
        </div>
      </div>

    </>
  )
}
