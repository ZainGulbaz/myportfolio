"use client";
import React from 'react'
import ExpCard from './ExpCard'

const Experience = () => {
  const experiences=[{
title:"Senior Software Engineer",
timeline:"Mar 2021- present",
company:"Code Hoppers",
description:"I developed CEM Operator software in React, JSP, and MariaDB for Codehoppers, which captures Android app records and sends them to an API, displaying them on a console. The database stores over 30 million records monthly across 6+ countries.I also engineered and implemented a high-quality backend and dashboard for a truck booking application using Nest.js (Node JS) and Type ORM for the backend and React and Chakra UI for the frontend.",
skills:["React","JSPs","Node JS","NEST JS","Maria DB","Type ORM"]

  },{

    title:"Software Engineer",
    company:"Ex-Devs",
timeline:"Apr 2021- Mar 2022",
description:"I Contributed significantly to a high-profile project for a bridal company while working at ExDevs, utilizing Express.js and React.js to build the project. The project was integrated to more than four platforms.I demonstrated exceptional technical skills and expertise by integrating the project with Square, Heyflow, Pipedrive, and Zoho to provide a seamless customer experience.",
skills:["React","Node JS","Express JS","PostgreSQL","Webhooks","Docparser","Zoho","Pipedrive"]

  }];
  return (  
    <div className='flex flex-col justify-center items-center h-full gap-4'>
      {experiences?.map(experience =><ExpCard title={experience?.title} timeline={experience?.timeline} description={experience?.description} skills={experience?.skills} company={experience?.company}/>)}
   
    </div>
  )  
}

export default Experience  