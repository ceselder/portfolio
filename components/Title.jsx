import React from 'react'

export default function Title({ ref, className, text }) {
  return (
    <div ref={ref} className={`text-5xl mb-3 font-bold mx-auto self-center ${className}`}>
      {text}
    </div>
  )
}
