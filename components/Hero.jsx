import React from 'react'
import Typewriter from "typewriter-effect"
import Button from './Button'
const Hero = () => {
  return (
    <div className='bg-[url("../kobe.png")] h-screen bg-cover bg-center bg-fixed flex items-center'>
      <div className='container mx-auto px-10'>
        <div className='max-w-[450px] text-white flex flex-col gap-[40px]'>
            <div>
                <h1 className='text-5xl'>I am Sineth</h1>
                <h4 className='text-2xl mt-3'>
                <Typewriter 
                    options={{
                        strings: [
                            "Data Scientist",
                            "Frontend Developer"
                        ],
                        changeDelay: 3,
                        changeDeleteSpeed: 2,
                        autoStart: true,
                        loop: true,
                    }}
                />
                </h4>
            </div>
            <div className='bg-[#ff4D41] h-[2px] w-[40px]'></div>
            <div>
                <p>As a data scientist, I have a strong background in life sciences and experience applying data science techniques to solve complex problems. I am proficient in programming languages such as Python and R, and have experience working with machine learning algorithms and libraries such as scikit-learn and TensorFlow.</p>
                <Button link='#' text="Learn More" /> 


            </div>

        </div>
            
      </div>
        
    </div>
  )
}

export default Hero
