import React from "react";
import Heading from "./Heading";
import Image from 'next/image'

import {AiOutlineGift} from "react-icons/ai"
import {FiBookOpen} from "react-icons/fi"
import {BsGlobe2} from "react-icons/bs"
import {TbPacman} from "react-icons/tb"
import {IoLocationOutline} from "react-icons/io5"
import Button from "./Button";

const About = () => {
  return (
    <section className="container mx-auto py-10 px-4">
      <Heading title="About me"/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap=[60px]">
        <div>
          <img className= "w-[400px]" src="https://www.rollingstone.com/wp-content/uploads/2022/12/andrew-tate-video-analysis.jpg?w=1581&h=1054&crop=1" alt="" />
        </div>

        <div>
          <div className="flex items-center justify-between w-[300px]">
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-center fron medium">
                Birthday
                <AiOutlineGift className="text-[#ff4D41] text-[22px]"/>
              </div>

              <div className="flex gap-4 items-center fron medium">
                Study
                <FiBookOpen className="text-[#ff4D41] text-[22px]"/>
              </div>

              <div className="flex gap-4 items-center fron medium">
                Website
                <BsGlobe2 className="text-[#ff4D41] text-[22px]"/>
              </div>

              <div className="flex gap-4 items-center fron medium">
                Interest
                <TbPacman className="text-[#ff4D41] text-[22px]"/>
              </div>
              <div className="flex gap-4 items-center fron medium">
                Location
                <IoLocationOutline className="text-[#ff4D41] text-[22px]"/>
              </div>
            </div>
            <div className="flex flex-col gap-6 text-gray-600">
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
            </div>

            <div className="flex flex-col gap-6 text-gray-600">
              <div>1996/01/23</div>
              <div>University of Toronto</div>
              <div>Government of Canada</div>
              <div>Reading, Wroking out</div>
              <div>20 William Kitchen Road</div>
            </div>


          </div>  

          <div className="max-w-[800px]">
            <h2 className="font-bold mt-16 mb-10">I am Sineth and Data Scientist</h2>
            <p className="text-gray-600">Hi! My name is Sineth. I am a passionate Data Scientist with 20 years of experience.</p>
            <Button link='#' text='Hire me'></Button>
          </div>

          
        </div>

        


      </div>

    </section>
    


    
  )
}

export default About


