export interface ExpCardProps{
    title:string,
    skills:string[],
    description:string,
    timeline:string,
    company:string
}

export interface ProjectCardProps{
    title:string,
    description:string,
    url?:string,
    gitHubUrl?:string,
    timeline:string,
    videoUrl?:string,
    skills:string[]
}