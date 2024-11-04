"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Profile from "../public/assets/profile.png";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import Email from "../public/assets/contacts/email.png";
import Phone from "../public/assets/contacts/phone.png";
import Linkedin from "../public/assets/contacts/linkedin.png";
import Cards from "../public/assets/card.png"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const cardItems = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-[90%] m-auto mb-[10%]">

        <header
          className={`${
            isScrolled
              ? "bg-blue-900/40 backdrop-blur-sm rounded-full shadow-lg w-[65%] items-center p-2 m-3"
              : "w-[85%]"
          } p-2 flex justify-between items-center fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700`}
        >
          <h1 className="text-3xl text-white p-2">Portfolio</h1>

          <div className="text-xl space-x-10 text-white p-2">
            <span>About</span>
            <span>Projects</span>
            <span>Contact</span>
            <span>Resume</span>
          </div>
        </header>


      <div className="text-white">
        <p className="mt-[15%] ml-[25%]">I'M</p>
        <div className="mt-[10%] ml-[60%] mb-[30%] flex">
          <p className="text-sm mr-[5px]">A MOTION</p>
          <p className="text-3xl"> DESIGNER</p>
        </div>
      </div>

      <div className="flex justify-center space-x-36 mb-[30%]">
        <div className="text-2xl">
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
            <a href="" className="text-red-500 underline p-1">
              more
            </a>
          </p>

          <br />

          <p>
            let's dive into some of the cool projects and highlights I've <br />
            accomplished over the past three years!
          </p>
        </div>

        <Image
          src={Profile}
          alt="Description"
          className="rounded-full w-96 h-96"
        />
      </div>

      <div className="mb-[25%]">
        <ScrollMenu>
          {cardItems.map((_, index) => (
            <div key={index} className="card mx-4">
              <div className="cursor-pointer group relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                  <Image
                    className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                    src={Cards}
                    alt={`Card ${index}`}
                  />
                </div>
                <div className="p-4">
                  <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                    Successful Seed Round {index + 1}
                  </h6>
                  <p className="text-slate-600 leading-normal font-light">
                    We are thrilled to announce the completion of our seed
                    round, securing $2M in investment to fuel product
                    development and market expansion.
                  </p>
                </div>
                <div className="px-4 pb-4 pt-0 mt-2"></div>
              </div>
            </div>
          ))}
        </ScrollMenu>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex space-x-56 mb-[15%]">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-neutral-600 opacity-40 rounded-2xl"></div>
            <div className="relative z-10">
              <Image
                src={Email}
                alt="Email-Pic"
                className="p-3 w-40 h-40 border rounded-2xl"
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-neutral-600 opacity-40 rounded-2xl"></div>
            <div className="relative z-10">
              <Image
                src={Phone}
                alt="Phone-Pic"
                className="p-3 w-40 h-40 border rounded-2xl"
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-neutral-600 opacity-40 rounded-2xl"></div>
            <div className="relative z-10">
              <Image
                src={Linkedin}
                alt="Linkedin-Pic"
                className="p-3 w-40 h-40 border rounded-2xl"
              />
            </div>
          </div>
        </div>

        <div>
          <p className="text-7xl">LET'S START NOW</p>
        </div>

        <div className="mt-[10%] space-y-2 text-center">
          <p>Huge thanks for visiting my website</p>
          <p>Hope we can work as soon as possible</p>
          <p>
            Feel free to reach me for everything that comes to your mind about
            my work
          </p>
          <p className="pt-10">Created by ali.sheikhbahaie84@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
