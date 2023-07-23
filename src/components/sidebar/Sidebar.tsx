import React from 'react'
import Tabs from './Tabs'
import Skills from './Skills'
import Image from 'next/image'
import Link from 'next/link'
import GitHub from "../../../assets/github.svg";
import LinkedIn from "../../../assets/linkedin.svg";
import Instagram from "../../../assets/Instagram.svg";
import Medium from "../../../assets/medium.svg"


const Sidebar = () => {
  return (
    <div className='flex md:flex-col md:pt-12  md:justify-center md:items-center md:py-4 p-2 md:h-screen gap-2 md:gap-4 md:p-2 p-1  md:p-0 w-screen md:w-full'>
        <div className='flex flex-col'>
        <h1 className='text-xl md:text-4xl font-bold text-white'>Zain Gulbaz</h1>
       <h6 className='text-xs md:text-md hidden md:inline'>Software Engineer at Code Hoppers</h6>
        </div>

        <Skills/>
       
       <Tabs/>

       <div className='hidden md:flex gap-4 self-auto'>
        <Link href="https://github.com/ZainGulbaz"><Image src={GitHub} width={30} height={30} alt="Github"/></Link>
        <Link href="https://www.linkedin.com/in/zain-gulbaz-079751207/"><Image src={LinkedIn} width={30} height={30} alt="Linkedin"/></Link>
        <Link href="https://www.instagram.com/zackhie07/"><Image src={Instagram} width={30} height={30} alt="Instagram"/></Link>
        <Link href="https://medium.com/@zaingulbaz8"><Image src={Medium} width={30} height={50} alt="Medum"/></Link>
        
        
        
        </div>
        
        </div>
  )
}

export default Sidebar