
import React from "react";
import Project from "./project";
import projects from "./data";

const Projects = () => {
  
  return (
    <div className="flex flex-col justify-center items-center p-2 gap-4 h-full">
      {projects?.map((project,index) => (
        <Project
          title={project?.title}
          timeline={project?.timeline}
          description={project?.description}
          skills={project?.skills}
          gitHubUrl={project?.gitHubUrl}
          url={project?.url}
          videoUrl={project?.videoUrl}
          key={index}
        />
      ))}
    </div>
  );
};

export default Projects;
