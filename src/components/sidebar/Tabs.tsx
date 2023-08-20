"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
const tabs = [
  {
    name: "About",
    path: "/",
  },
  {
    name: "Experience",
    path: "/experience",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name:"Certifications",
    path:"/certifications",
  }
];

const Tabs = () => {
  const pathname=usePathname();
  return (
    <ul className="w-max flex md:flex-col gap-2">
    {
     
      tabs?.map(tab=>{
        return(
          <li>
          <Link className="group flex items-center py-3" href={tab?.path}>
            <span className={`hidden md:inline nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${pathname==tab.path?'w-16 bg-slate-200':''}`}></span>
            <span className={`hidden md:inline nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${pathname==tab.path?'text-slate-200 md:text-3xl text-xl':''} `}>
              {tab?.name}
            </span>
            <button className={`md:hidden text-xs bg-blue-900 p-2 font-bold rounded border-1 shadow-2xl b-2 b-gray-900 ${pathname==tab.path?'text-white text-lg':''}`}>{tab?.name}</button>
          </Link>
        </li>
        )
      })
    }
 
    </ul>
  );
};

export default Tabs;
