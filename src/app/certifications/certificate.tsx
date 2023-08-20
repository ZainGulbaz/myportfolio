"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Certificate } from "@/utils/types";
import { IoIosOpen } from "react-icons/io";

const CertificateComponent = (props: Certificate) => {
  return (
    <div className="flex flex-col md:w-3/4 w-full  bg-opacity-20 backdrop-blur-lg border-1 shadow-lg bg-slate-800 drop-shadow-lg p-2 md:p-8">
      <div className="flex justify-between items-center">
        <div className="text-sm md:text-lg text-white font-bold mb-2">{props?.title}</div>
        <Link
          className="flex text-blue-600 items-center justify-center cursor-pointer gap-1"
          href={props.url}
        >
          {"Open "} <IoIosOpen />{" "}
        </Link>
      </div>

      <div className="grid grid-cols-12 gap-2 md:gap-0">
        <div className="flex-col col-span-2">
          <div>
            <Image src={props.icon} width={70} height={70} alt="Icon" />
          </div>
          <div className="mt-2">
            <h5 className="text-blue-600 text-xs ">{props.timeline}</h5>
            <h5 className="font-bold text-purple-700 text-xs">
              {props.platform}
            </h5>
          </div>
        </div>

        <div className="text-xs md:text-sm text-white col-span-10">
          {props.description}
        </div>
      </div>
    </div>
  );
};

export default CertificateComponent;
