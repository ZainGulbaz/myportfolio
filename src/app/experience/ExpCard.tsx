import React from 'react'
import { ExpCardProps } from '@/utils/Interfaces';

const ExpCard = ({title,skills,description,timeline,company}:ExpCardProps) => {
  
    return (
    <div className='flex flex-col md:flex-row gap-4 md:w-3/4 w-full  bg-opacity-20 backdrop-blur-lg border-1 shadow-lg bg-slate-800 drop-shadow-lg p-4 md:p-8'>
  
  <div className='text-white'>
     {timeline}
  </div>
<div className='w-4/5'>

<h4 className='text-md md:text-xl font-bold text-white'>{title}</h4>
<h4 className='text-sm md:text-lg font-bold text-blue-600'>{company}</h4>
<p className='text-sm md:text-sm text-white'>{description}</p>
<div>
    {
        skills?.map(skill=><a href="#" className="bg-green-100  text-green-800 text-xs font-semibold mr-2 mt-1 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 inline-flex items-center justify-center">{skill}</a>)
    }

</div>
</div>
    </div>
  )
}

export default ExpCard;