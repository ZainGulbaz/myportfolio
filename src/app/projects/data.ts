import { ProjectCardProps } from "@/utils/Interfaces";


const projects: Readonly<ProjectCardProps>[] = [
    {
      title: "CEM Operator",
      description:
        "CEM Operator software is build in React, JSP, and MariaDB which captures Android app records and sends them to an API, displaying them on a console. The database stores over 30 million records monthly across 6+ countries. It uses Bootleaf map that displays data speed, signal strength, signal quality, SMS, and calls for four technologies i.e., GSM, WCDMA, LTE, 5G LTE and 5G.",
      skills: ["React", "JSPs", "Maria DB", "Bootleaf", "Deck.gl"],
      timeline: "Mar 2022 - Present",
      gitHubUrl: "",
      url: "https://mycemapp.com/onemycem",
      videoUrl:"https://www.loom.com/share/ec43df0cb369405b9d27126ffa61f82c"
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
          " have been developing a truck booking application for towing services, which will soon launch in UAE. With a focus on user convenience, this app allows users to easily book different types of trucks for their transportation needs online.As the lead developer for this project, I have utilized my expertise in full-stack development to build a seamless experience for users. The backend is built using NEST JS and Type ORM, providing a robust and reliable foundation. In addition, I have created a user-friendly dashboard using Chakra UI, enabling easy management and monitoring of bookings.This project has been an exciting challenge for me, and I am thrilled to see it come to fruition soon. I look forward to leveraging my skills and experience in future projects to deliver outstanding results",
        skills: ["NEST JS", "TypeOrm", "Maria DB", "One Signal","React","Chakra UI"],
        timeline: "Dec 2022 - July 2023",
        gitHubUrl: "https://github.com/ZainGulbaz/tuckapp-backend",
        url: "",
      },
      {
        title: "Multilingual Bot",
        description:
          "I've developed a multilingual chatbot using Node.js Botbuilder, Azure Language Services, and Bot Emulator. This chatbot is capable of translating text in Spanish, French, Dutch, and Urdu, while also detecting the language in which users are writing. With this chatbot, communication with individuals who speak different languages has never been easie",
        skills: ["Microsoft Bot Framework", "Azure Language Services"],
        timeline: "Apr 2023",
        gitHubUrl: "https://github.com/ZainGulbaz/multilingualbot",
        url: "",
      },
      {
        title:"Lottery Decentralized Application",
        description:"This groundbreaking platform redefines the traditional lottery experience by seamlessly integrating blockchain technology. Here's how it works: participants engage eagerly, buying their tickets for a chance at fortune. Meanwhile, the managerial role involves overseeing the draw process, ensuring absolute fairness. The innovative twist? The entire prize pool is automatically transferred to the lucky winner as soon as destiny reveals its choice. This project underscores my expertise in blockchain, smart contract development, and user-centered design, all converging to deliver an engaging, secure, and rewarding lottery encounter.",
        skills:["React","Chakra UI","Solidity","Node","Hardhat","Alchemy","Etherjs","Metamask APIs"],
        timeline:"Nov 2022",
        gitHubUrl:"https://github.com/ZainGulbaz/Lottery-App"

      },
      {
        title:"Krypt Web 3.0 application",
        description:"It is a Web 3.0 application in which we can do transactions in to different accounts. Once the transaction is done, it is stored in the array of the smart contract. All transactions that are done through this website are shown below",
        skills:["Node JS","React JS","Hardhat","Alchemy","Etherjs"],
        timeline:"Apr 2022- May 2022",
        gitHubUrl:"https://github.com/ZainGulbaz/KRYPT"
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

  export default projects;