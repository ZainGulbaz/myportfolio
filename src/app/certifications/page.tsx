
import React from "react";
import { CertificationsData } from "./data";
import CertificateComponent from "./certificate";
const Certifications = () => {
  
    
  return (
    <div className="flex flex-col justify-center items-center p-2 gap-4 h-full">
      {CertificationsData?.map((certificate,index) => (
       
       <CertificateComponent
        title={certificate.title}
        description={certificate.description}
        icon={certificate.icon}
        url={certificate.url}
        timeline={certificate.timeline}
        platform={certificate.platform}
        key={index}
       />
       
       
      ))}
    </div>
  );
};

export default Certifications;
