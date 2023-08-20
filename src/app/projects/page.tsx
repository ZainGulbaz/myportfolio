
import React from "react";
import Project from "./project";
import { ProjectCardProps } from "@/utils/Interfaces";

const Projects = () => {
  const projects: Readonly<ProjectCardProps>[] = [
    {
      title: "CEM Operator",
      description:
        "CEM Operator software is build in React, JSP, and MariaDB which captures Android app records and sends them to an API, displaying them on a console. The database stores over 30 million records monthly across 6+ countries. It uses Bootleaf map that displays data speed, signal strength, signal quality, SMS, and calls for four technologies i.e., GSM, WCDMA, LTE, 5G LTE and 5G.",
      skills: ["React", "JSPs", "Maria DB", "Bootleaf", "Deck.gl"],
      timeline: "Mar 2022 - Present",
      gitHubUrl: "",
      url: "https://mycemapp.com/onemycem",
    },
    {
        title: "Chat Bot",
        description:
          "It is an artificialy developed chat bot that answers the questions using AI. It has two parts: 1-Web Chat Bot 2-Chat Bot Assistant. The Web Chat Bot can answer any query related to the website whereas the chat bot assistant is connected to a specific database and give any result related to that database. It is deployed in Slack and Microsoft Teams",
        skills: ["Bot Framework", "Azure Tools"],
        timeline: "Apr 2023 - Present",
        gitHubUrl: "",
        url: "http://rockwellits.com/index.html",
      },
      {
        title:"AI Blog Post",
        description:"Imagine generating AI-powered blog posts tailored to your desired topic and specific keywords–that's exactly what this project is all about. Through dedicated exploration and hands-on experience, I've successfully developed a system that crafts insightful blog content using cutting-edge technology.",
        gitHubUrl:"https://github.com/ZainGulbaz/blogpost",
        url:"",
        skills:["Next JS","Tailwind CSS","Open AI","Stripe","OAuth"],
        timeline:"July 2023- August 2023",
        videoUrl:"https://www.loom.com/share/1805f0d5114840a78c8d242839b087c6"
      },
    {
        title: "Truck Booking App Backend",
        description:
          "The application is designed to book rides for tow trucks. The tow trucks can also provide various services to the clients like battery or tyre replacement. The customer can request a ride , the drivers can send the offers, customer accepts suitable offer and the ride starts. After completing his service, the driver can complete his ride",
        skills: ["NEST JS", "TypeOrm", "Maria DB", "One Signal"],
        timeline: "Dec 2022 - July 2023",
        gitHubUrl: "https://github.com/ZainGulbaz/tuckapp-backend",
        url: "",
      },
      {
        title: "Truck Booking App Dashboard",
        description:
          "It is developed for the admin to manage the drivers. He can see records of the rides and drivers. He can also create transactions and disable any driver",
        skills: ["React JS", "Chakra UI"],
        timeline: "Dec 2022 - Feb 2023",
        gitHubUrl: "https://github.com/ZainGulbaz/Truck-App-FE",
        url: "",
      },
      {
        title: "Multilingual Bot",
        description:
          "It is a bot that understands the different languages and translates it on the basis of selected language",
        skills: ["Microsoft Bot Framework", "Azure Language Services"],
        timeline: "Apr 2022 - Apr 2023",
        gitHubUrl: "https://github.com/ZainGulbaz/multilingualbot",
        url: "",
      },
      {
        title: "Bridal Concept CRM",
        description:
          "The project was built for a bridal brand. The customer can fill a heyflow form and his order will be placed. The data comes to our api with webhooks and we create the order and invoice in square platform. The credentials of dashboard is send to the customer email where he/she can track orders. At the same time the orders are also generated in pipedrive where the admin can manage the orders",
        skills: ["React", "Express JS","PSQL","HeyFlow","Square","Zoho","Pipedrive"],
        timeline: "Aug 2021 - Mar 2022",
        gitHubUrl: "",
        url: "",
        videoUrl:"https://www.loom.com/share/76501a1f9c004f9cb1657d815dd98d33"
      },
      {
        title: "Apple Warehouse Management",
        description:
          "The project is used to manage the warehouse for an apple store in the USA. It parses the invoice with docparser and the data is stored in our database with the help of webhooks.",
        skills: ["UI Bakery", "Express JS","PSQL","DocParser"],
        timeline: "Apr 2021 - Aug 2021",
        
      }
      
  ];
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
