"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Github from "../../../assets/github.svg";
import { ProjectCardProps } from '@/utils/Interfaces';
import toast from 'react-hot-toast';

const Project = (props:ProjectCardProps) => {
    const handleLinkClick=(url:string)=>{
        if(url.trim().length==0) toast.error("Sorry, the url cannot be provided publicly");

    }
    return (
        <div className='flex flex-col md:flex-row gap-4 md:w-3/4 w-full  bg-opacity-20 backdrop-blur-lg border-1 shadow-lg bg-slate-800 drop-shadow-lg p-2 md:p-8'>
      
      <div className='text-white'>
        {props?.timeline}
         <div className='flex flex-col gap-2 mt-2 mb-2'>
    <Link className='text-sm md:text-lg font-bold text-blue-600' href={props?.url}onClick={()=>handleLinkClick(props?.url)} ><button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-1 border-b-1 text-sm border-blue-700 hover:border-blue-500 rounded" disabled={props?.gitHubUrl.trim().length==0?true:false}>
  {"Open ->"}
</button></Link>
    <Link href={props?.gitHubUrl} onClick={()=>handleLinkClick(props?.gitHubUrl)}>
    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1  border-b-1 px-1 text-sm border-blue-700 hover:border-blue-500 rounded flex gap-1 disabled:opacity:25" disabled={props?.gitHubUrl.trim().length==0?true:false}>
  {"GitHub"}
  <Image src={Github} height={20} width={20} alt='git hub icon'/>
</button>
    </Link>
    </div>
      </div>
    <div className='w-4/5 flex flex-col gap-4'>
    
    <h4 className='text-md md:text-xl font-bold text-white'>{props?.title}</h4>
   
    
    <p className='text-sm md:text-sm text-white'>{props?.description}</p>
    <div>
        {
            props?.skills?.map(skill=><a href="#" className="bg-green-100  text-green-800 text-xs font-semibold mr-2 mt-1 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 inline-flex items-center justify-center">{skill}</a>)
        }
    
    </div>
    </div>
        </div>
      )
}

export default Project