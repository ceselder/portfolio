import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
export default function TextLoop({ className, interval, contents }) {

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const ourInterval = setInterval(() => {
            setIndex(i => (i + 1) % contents.length)
        }, interval)
        return () => { clearInterval(ourInterval) }
    }, [])


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
