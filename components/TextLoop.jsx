import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
export default function TextLoop({ delay = 0, className, interval, contents }) {

    const [actualDelay, setDelay] = useState(delay)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        let ourInterval = null
        const ourTimeOut = setTimeout(() => {
            ourInterval = setInterval(() => {
                setDelay(0)
                setIndex(i => (i + 1) % contents.length)
            }, interval)
        }, actualDelay)
        return () => { clearInterval(ourInterval); clearTimeout(ourTimeOut);   }
    })


    return (
        <div>
            <div className={`${className}`}>
            <AnimatePresence>
                <motion.div className='absolute'
                    key={contents[index]}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, }}>
                    {contents[index]}
                </motion.div>
            </AnimatePresence>
        </div>
        </div>




    )
}
