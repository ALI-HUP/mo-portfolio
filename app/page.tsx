"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Profile from "../public/assets/vectores/main/profile.png";
import Vector1 from "../public/assets/vectores/main/Vector1.png";
import Vector2 from "../public/assets/vectores/main/Vector2.png";
import "react-horizontal-scrolling-menu/dist/styles.css";
import Email from "../public/assets/contacts/email.png";
import Phone from "../public/assets/contacts/phone.png";
import Linkedin from "../public/assets/contacts/linkedin.png";
import { ToastContainer, ToastContentProps, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/pagination";
import { Modal, Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SwiperComponent from "../components/SwiperComponent";


export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [open, setOpen] = useState(false);
  const cardItems = [
    { title: "Animation" },
    { title: "Video Editing" },
    { title: "Motion Design" },
    { title: "Design" },
    { title: "Logo Motion" },
    { title: "Logo" },
  ];

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

  const handleCopy = (text: string, message: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<React.AwaitedReactNode> | ((props: ToastContentProps<unknown>) => React.ReactNode) | null | undefined) => {
    navigator.clipboard.writeText(text);
    toast.success(message, {
      position: "bottom-left",
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="w-[90%] m-auto">

      <header
        className={`${isScrolled
          ? "bg-blue-950/70 backdrop-blur-sm rounded-full shadow-xl w-[65%] items-center p-3 m-3 h-12"
          : "w-[85%]"
        } p-3 flex justify-between items-center fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-1000`}
      >
        <h1 className="text-3xl p-2">Portfolio</h1>

        <div className="text-xl space-x-10 p-2">
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
            onClick={() => setOpen(true)}
            className={activeSection === "resume" ? "text-red-500" : ""}
          >
            Resume
          </span>
        </div>
      </header>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="resume-popup"
        aria-describedby="resume-popup-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            height: 200,
            bgcolor: "rgb(15 23 42)",
            boxShadow: 24,
            borderRadius: "1rem",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            border: "1px solid white",
          }}
        >
          <Button
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              color: "white",
              bgcolor: "transparent",
              "&:hover": {
                color: "rgb(37 99 235)",
              },
            }}
          >
            <CloseIcon />
          </Button>

          <p id="resume-popup-description" style={{ fontSize: "18px", marginBottom: "25px", color: "white" }}>
            Click the button below to download my resume
          </p>
          <Button
            variant="contained"
            color="primary"
            href="/resume/Mo-resume.pdf"
            download
            sx={{
              fontSize: "16px",
              padding: "10px 20px",
              bgcolor: "rgb(30 64 175)",
              "&:hover": {
                bgcolor: "rgb(37 99 235)",
              },
            }}
          >
            Download
          </Button>
        </Box>
      </Modal>

      <div className="text-md mb-[25%]">
        <p className="mt-[15%] ml-[20%]">I'M</p>

        <div className="mt-[10%] ml-[65%] flex">
          <p className="mr-[5px]">A MOTION</p>
          <p className="text-3xl"> DESIGNER</p>
        </div>
      </div>
      
      <div>
        <div id="about" className="flex justify-center space-x-36 mb-[10%]">
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
              <br />
              <Button variant="contained" className="my-3 w-40 h-8 text-lg rounded-md" href="/more">
                MORE
              </Button>
            </p>

            <br />

            <p>
              Let's dive into some of the cool projects and highlights I've <br />
              accomplished over the past three years!
            </p>
          </div>

          <div className="relative w-[500px] h-[500px]">
            <Image
              src={Vector1}
              alt="Description"
              className="absolute w-[490px] h-[490px] animate-orbit-slow"
            />
            <Image
              src={Vector2}
              alt="Description"
              className="absolute w-[490px] h-[490px] animate-orbit-slow-reverse"
            />
            <Image
              src={Profile}
              alt="Description"
              className="absolute w-[480px] h-[480px] m-1 rounded-full"
            />
          </div>
        </div>
      </div>

      <div id="projects" className="mb-[10%] relative">
      <SwiperComponent cardItems={cardItems} />
      </div>

      <div id="contact" className="flex flex-col items-center">
        <div className="flex space-x-56 mb-24">
          <div className="relative" onClick={() => handleCopy("sheikhbahaie.md@gmail.com", "Email address copied!")}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-neutral-600 opacity-40 rounded-2xl"></div>
            <div className="relative z-10">
              <Image
                src={Email}
                alt="Email-Pic"
                className="p-3 w-28 h-28 border rounded-2xl"
              />
            </div>
          </div>

          <div className="relative" onClick={() => handleCopy("09912618098", "Phone number copied!")}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-neutral-600 opacity-40 rounded-2xl"></div>
            <div className="relative z-10">
              <Image
                src={Phone}
                alt="Phone-Pic"
                className="p-3 w-28 h-28 border rounded-2xl"
              />
            </div>
          </div>

          <a href="https://www.linkedin.com/in/mohammad-sheikhbahaei-1824a82a5" target="_blank" rel="noopener noreferrer" className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-neutral-600 opacity-40 rounded-2xl"></div>
            <div className="relative z-10">
              <Image
                src={Linkedin}
                alt="Linkedin-Pic"
                className="p-3 w-28 h-28 border rounded-2xl"
              />
            </div>
          </a>
        </div>

        <ToastContainer />

        <div>
          <p className="text-6xl">LET'S START NOW</p>
        </div>

        <div className="absolute mt-[400px] space-y-1 text-center w-full pb-3 pt-3">
          <div className="absolute inset-0 bg-slate-900 opacity-70"></div>
          <p className="relative z-10">Huge thanks for visiting my website</p>
          <p className="relative z-10">Hope we can work as soon as possible</p>
          <p className="relative z-10">
            Feel free to reach me for everything that comes to your mind about my work
          </p>
          <p className="relative z-10">Created by ali.sheikhbahaie84@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
