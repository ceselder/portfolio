import React from 'react'
import SmallCard from './SmallCard'
import BigCard from './BigCard'
import Title from '../Title'

const projects = [
    { name: 'lofi-focus', 
      img: 'img/lofi-focus.png', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur erat ac nisi dapibus, at auctor mauris accumsan. Duis mattis ultricies leo, id commodo dolor pretium quis. Vestibulum ipsum massa, cursus a interdum sit amet, convallis a magna. In varius suscipit lacus, non varius quam vestibulum porta. Phasellus efficitur nisi leo, at lacinia mi sagittis id. Nunc congue augue sit amet lobortis iaculis. Suspendisse pharetra malesuada posuere. Duis tristique tincidunt ante quis ultricies. Proin venenatis massa nec odio volutpat, a semper sem maximus. Vestibulum eleifend quam risus. Nulla tincidunt augue ut gravida vestibulum' },
    
    { name: 'debate-bro', 
      img: 'img/debate-bro.jpg', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur erat ac nisi dapibus, at auctor mauris accumsan. Duis mattis ultricies leo, id commodo dolor pretium quis. Vestibulum ipsum massa, cursus a interdum sit amet, convallis a magna. In varius suscipit lacus, non varius quam vestibulum porta. Phasellus efficitur nisi leo, at lacinia mi sagittis id. Nunc congue augue sit amet lobortis iaculis. Suspendisse pharetra malesuada posuere. Duis tristique tincidunt ante quis ultricies. Proin venenatis massa nec odio volutpat, a semper sem maximus. Vestibulum eleifend quam risus. Nulla tincidunt augue ut gravida vestibulum ' },
    
    { name: 'tft-coaching', 
      img: 'img/tft-coaching.png', 
      description: 'test' }
]

export default function ProjectsCarousel() {
    const selectedProjects = projects.slice(0, 3)

    return (
        <>
            <div className='mt-2'>
                <div className='flex flex-row'>
                    <SmallCard project={selectedProjects[0]} />
                    <BigCard project={selectedProjects[1]} />
                    <SmallCard project={selectedProjects[2]} />
                </div>
            </div>
        </>

    )
}
