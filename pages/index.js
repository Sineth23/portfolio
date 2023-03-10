import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import WhatIDo from '../components/WhatIDo'
import Skills from '../components/Skills'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { useState } from 'react'
import Sidebar from '../components/Sidebar'



export default function Home() {

  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }


  return (
    <div>
      <Head>
        <title>Sineth Pathirana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
      <Navbar toggleSidebar={toggleSidebar}/>
      </header>
      
      <main>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        <Hero />
        <About />
        <WhatIDo />
        <Skills />
        <Work /> 
        <Contact />
      
      </main>

      <Footer />
      
      
    </div>
  )
}
