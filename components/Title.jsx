import React from 'react'

export default function Title({ className, text}) {
  return (
    <div className={`text-4xl mb-3 font-bold mx-auto self-center ${className}`}>
      {text}
    </div>
  )
}
