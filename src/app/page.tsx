import Image from 'next/image'
import ProfileImage from "../../assets/profilepic.jpeg";
import Signature from "../../assets/signature.png";

export default function Home() {
  return (
   <main>
        <section className='flex flex-col justify-center items-center mt-16 md:mt-0 md:h-screen  md:py-4 md:gap-8 '>
        <div className="relative inline-flex items-center justify-center md:w-40 md:h-40 h-20 w-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <Image src={ProfileImage} height={400} width={400} alt="Profile Picture"/>
    
</div>
        <p className="text-sm p-4 md:p-2 md:text-md text-white">
        I am an experienced <strong>Full Stack Developer</strong> with a strong passion for crafting innovative software solutions. My expertise lies in <strong>JavaScript</strong>, TypeScript, React, <strong>Node.js</strong>, Express.js, NEST JS, <strong>Tailwind CSS</strong>, Bootstrap, SQL, and MariaDB. I thrive on challenges and continuously seek opportunities to expand my knowledge. Let's collaborate and create <strong>exceptional experiences</strong> together.
        </p>
        <div className='flex flex-col md:flex-row text-white'>
        <h4 className='text:xl md:text-2xl font-bold'>
             "Believe ... Honesty ... Descipline"
        </h4>
        <Image src={Signature} width={100} height={100} alt="Signature"/>
        </div>
    </section>
   </main>
  )
}
