import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function ContactIcon({ onClick, icon, color, text }) {
    const [hovered, setHovered] = useState(false)

    return (
        <div className='flex flex-col w-12 grow-0'>
            <FontAwesomeIcon onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className={`self-center w-12 h-12 hover:opacity-75 hover:cursor-pointer text-${color}`}
                icon={icon} />
            <AnimatePresence>
                {(hovered) && <motion.div
                    onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
                    className={`flex -pt-1 px-8 pb-2 flex-col min-w-fit self-center text-${color}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{ duration: 0.2 }}>
                    <div className='self-center -mt-4 w-20 h-6 scale-[25%]'>
                        <svg id="triangle" viewBox="0 0 100 100">
                            <polygon fill='currentColor' points="50 15, 100 100, 0 100" />
                        </svg>
                    </div>
                    <p className={`bg-${color} rounded-xl p-2 text-gray-200`}>{text}</p>
                </motion.div>}
            </AnimatePresence>


        </div>
    )
}
