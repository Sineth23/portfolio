import React from 'react'
import Heading from './Heading'

const Skills = () => {
  return (
    <section className='container mx-auto py-10 px-14'>

        <Heading title="Skills"/>
        <p className='text-gray-600 -mt-10 mb-10'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ligula tellus, eleifend ac rhoncus a, egestas et felis. 
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
                <p>Python</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='bg-[#ff4D41] absolute h-[4px] w-[90%]'></div>
                </div>
            </div>

            <div>
                <p>React.js</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='bg-[#ff4D41] absolute h-[4px] w-[70%]'></div>
                </div>
            </div>

            <div>
                <p>SQL</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='bg-[#ff4D41] absolute h-[4px] w-[70%]'></div>
                </div>
            </div>

            <div>
                <p>R</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='bg-[#ff4D41] absolute h-[4px] w-[70%]'></div>
                </div>
            </div>

            <div>
                <p>Scala</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='bg-[#ff4D41] absolute h-[4px] w-[70%]'></div>
                </div>
            </div>
            <div>
                <p>Next.js</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='bg-[#ff4D41] absolute h-[4px] w-[70%]'></div>
                </div>
            </div>


            


        </div>


    </section>
  )
}

export default Skills
