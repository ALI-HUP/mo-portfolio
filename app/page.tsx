"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Profile from "../public/assets/pictures/profile.png";
import "react-horizontal-scrolling-menu/dist/styles.css";
import Email from "../public/assets/contacts/email.png";
import Phone from "../public/assets/contacts/phone.png";
import Linkedin from "../public/assets/contacts/linkedin.png";
import Cards from "../public/assets/card.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const cardItems = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      const sections = ["about", "projects", "contact", "resume"];
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const offset = 100;
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-[90%] m-auto">

      <header
        className={`${ isScrolled
            ? "bg-blue-900/40 backdrop-blur-sm rounded-full shadow-lg w-[65%] items-center p-2 m-3"
            : "w-[85%]"
        } p-2 flex justify-between items-center fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700`}
      >
        <h1 className="text-3xl text-white p-2">Portfolio</h1>

        <div className="text-xl space-x-10 text-white p-2">
          <span
            onClick={() => scrollToSection("about")}
            className={activeSection === "about" ? "text-red-500" : ""}
          >
            About
          </span>
          <span
            onClick={() => scrollToSection("projects")}
            className={activeSection === "projects" ? "text-red-500" : ""}
          >
            Projects
          </span>
          <span
            onClick={() => scrollToSection("contact")}
            className={activeSection === "contact" ? "text-red-500" : ""}
          >
            Contact
          </span>
          <span
            onClick={() => scrollToSection("resume")}
            className={activeSection === "resume" ? "text-red-500" : ""}
          >
            Resume
          </span>
        </div>
      </header>

      <div className="text-white mb-[30%]">
        <p className="mt-[15%] ml-[25%]">I'M</p>
        <div className="mt-[10%] ml-[60%] mb-[30%] flex">
          <p className="text-sm mr-[5px]">A MOTION</p>
          <p className="text-3xl"> DESIGNER</p>
        </div>
      </div>
      
      <div>
        <div id="about" className="flex justify-center space-x-36 mb-[30%]">
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
              <a href="/more" className="text-red-500 underline p-1">
                more
              </a>
            </p>

            <br />

            <p>
              Let's dive into some of the cool projects and highlights I've <br />
              accomplished over the past three years!
            </p>
          </div>

          <Image
            src={Profile}
            alt="Description"
            className="rounded-full w-96 h-96"
          />
        </div>
      </div>

      <div id="projects" className="mb-[30%] relative">
        <div className="swiper-container-wrapper">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            centeredSlides={false}
            grabCursor={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              el: ".custom-pagination",
            }}
            loop={true}
            autoplay={{ delay: 3000 }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {cardItems.map((_, index) => (
              <SwiperSlide key={index} className="mx-4">
                <div className="cursor-pointer relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-[345px] hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                    <Image
                      className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                      src={Cards}
                      alt={`Card ${index + 1}`}
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
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination mt-4"></div>
        </div>
      </div>

      <div id="contact" className="flex flex-col items-center">
        <div className="flex space-x-56 mb-[10%]">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-neutral-600 opacity-40 rounded-2xl"></div>
            <div className="relative z-10">
              <Image
                src={Email}
                alt="Email-Pic"
                className="p-3 w-32 h-32 border rounded-2xl"
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-neutral-600 opacity-40 rounded-2xl"></div>
            <div className="relative z-10">
              <Image
                src={Phone}
                alt="Phone-Pic"
                className="p-3 w-32 h-32 border rounded-2xl"
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-neutral-600 opacity-40 rounded-2xl"></div>
            <div className="relative z-10">
              <Image
                src={Linkedin}
                alt="Linkedin-Pic"
                className="p-3 w-32 h-32 border rounded-2xl"
              />
            </div>
          </div>
        </div>

        <div>
          <p className="text-7xl">LET'S START NOW</p>
        </div>

        <div className="absolute mt-[450px] space-y-2 text-center w-full pb-5 pt-5">
          <div className="absolute inset-0 bg-slate-900 opacity-60 pointer-events-none"></div>
          <p className="relative z-10">Huge thanks for visiting my website</p>
          <p className="relative z-10">Hope we can work as soon as possible</p>
          <p className="relative z-10">
            Feel free to reach me for everything that comes to your mind about my work
          </p>
          <p className="relative z-10 pt-10">Created by ali.sheikhbahaie84@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
