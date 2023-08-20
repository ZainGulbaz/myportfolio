import { StaticImageData } from "next/image"
export type Certificate={
    icon:StaticImageData,
    description:string,
    timeline:string,
    url:string,
    title:string,
    platform:"Udemy"|"LinkedIn"|"Coursera"|"Hackerank";    
}