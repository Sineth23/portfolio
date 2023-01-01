import React from 'react'
import Heading from './Heading'
import {RiLightbulbFlashLine} from "react-icons/ri"


const WhatIDo = () => {
  return (
    <section className='container mx-auto py-10 px-4'>
        <Heading title="What I Do"/>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4D41] text-white'>
                <RiLightbulbFlashLine className='text-[28px]'/>
                <h2 className='font-medium text-[20px]'>Creative Designs</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ligula tellus, eleifend ac rhoncus a, egestas et felis. Nam commodo lacinia sapien id maximus. Integer a ipsum laoreet ex ultricies facilisis in nec dolor. Quisque non dolor lectus. Ut laoreet, sem vel tincidunt pretium, veli.</p>
            </div>

            <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4D41] text-white'>
                <RiLightbulbFlashLine className='text-[28px]'/>
                <h2 className='font-medium text-[20px]'>Creative Designs</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ligula tellus, eleifend ac rhoncus a, egestas et felis. Nam commodo lacinia sapien id maximus. Integer a ipsum laoreet ex ultricies facilisis in nec dolor. Quisque non dolor lectus. Ut laoreet, sem vel tincidunt pretium, velit ante sagittis erat, vitae posuere urna lectus vitae massa. Cras nec mi vulputate, consequat arcu nec, suscipit velit. Phasellus porttitor felis fermentum malesuada euismod. Sed id ex sit amet felis vestibulum feugiat.</p>
            </div>

            <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4D41] text-white'>
                <RiLightbulbFlashLine className='text-[28px]'/>
                <h2 className='font-medium text-[20px]'>Creative Designs</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ligula tellus, eleifend ac rhoncus a, egestas et felis. Nam commodo lacinia sapien id maximus. Integer a ipsum laoreet ex ultricies facilisis in nec dolor. Quisque non dolor lectus. Ut laoreet, sem vel tincidunt pretium, velit ante sagittis erat, vitae posuere urna lectus vitae massa. Cras nec mi vulputate, consequat arcu nec, suscipit velit. Phasellus porttitor felis fermentum malesuada euismod. Sed id ex sit amet felis vestibulum feugiat.</p>
            </div>
        </div>
    </section>
  )
}

export default WhatIDo
