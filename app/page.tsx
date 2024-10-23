import React from "react";
import Image from "next/image";
import Profile from "../Assets/Group.png";

export default function Home() {
  return (
    <div className="w-[90%] m-auto mb-[20%]">

      <div className="text-white">
        <p className="mt-[15%] ml-[25%]">I'M</p>
        <div className="mt-[10%] ml-[60%] mb-[30%] flex">
          <p className="text-sm">A MOTION </p>
          <p className="text-3xl"> DESIGNER</p>
        </div>
      </div>

      <div className="flex justify-center space-x-36">
        <div className="">
          <p>
            Hello, everyone! I'm Mohammad, and I'm excited to <br />
            share my journey as a motion designer and video <br />
            editor with you. 
          </p>

          <br />

          <p>  
            Three years ago, I realized that I had a deep <br /> 
            passion for art, particularly movies and animation, <br /> 
            so I decided to start learning more about them. <br /> 
            After just two months, thanks to my talent, I began <br /> 
            working in these fields. That early experience was <br /> 
            crucial, as it allowed me to gain both the necessary <br /> 
            skills and an understanding of how the industry <br /> 
            works. 
            <a href="" className="text-red-500 underline p-1">more</a>
          </p>
          
          <br />

          <p>
          let's dive into some of the cool projects and highlights I've <br />
          accomplished over the past three years!
          </p>
        </div>

        <Image src={Profile} alt="Description" className="rounded-full w-96 h-96"/>
      </div>


    </div>
  );
}
