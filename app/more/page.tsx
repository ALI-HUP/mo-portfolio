"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import More from "../../public/assets/vectores/more/more.png";
import Vector1 from "../../public/assets/vectores/more/Vector1.png";
import Vector2 from "../../public/assets/vectores/more/Vector2.png";
import Signture from "../../public/more-page/signture.png";
import { Button } from "@mui/material";

const MorePage = () => {
  const skills = [
    { name: "Ae", percentage: 85 },
    { name: "Ai", percentage: 75 },
    { name: "Ps", percentage: 60 },
    { name: "Pr", percentage: 45 },
    { name: "Figma", percentage: 20 },
  ];

  const [visible, setVisible] = useState(false);
  const [animatedPercentages, setAnimatedPercentages] = useState(
    skills.map(() => 0)
  );

  useEffect(() => {
    const section = document.querySelector("#skills-section");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.6 }
    );

    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visible) {
      const intervals = skills.map((skill, index) => {
        const step = Math.ceil(skill.percentage / 50);
        return setInterval(() => {
          setAnimatedPercentages((prev) => {
            const newPercentages = [...prev];
            if (newPercentages[index] < skill.percentage) {
              newPercentages[index] += step;
            } else {
              clearInterval(intervals[index]);
              newPercentages[index] = skill.percentage;
            }
            return newPercentages;
          });
        }, 20);
      });

      return () => intervals.forEach((interval) => clearInterval(interval));
    }
  }, [visible, skills]);

  return (
    <div className="bg-div morepage-container p-24">
      <div className="text-2xl">
        <div className="relative w-[500px] h-[420px] mt-6">
          <Image
            src={Vector1}
            alt="Vector"
            className="absolute animate-orbit-slow"
          />
          <Image
            src={Vector2}
            alt="Vector"
            className="absolute animate-orbit-slow-reverse"
          />
          <Image
            src={More}
            alt="Mo-pic"
            className="absolute w-[470px] h-[330px] m-3"
          />
        </div>

        <div>
          <p>
            Hello! I'm Mohammad Sheikhbahaei, a motion designer and video <br />
            editor with a deep passion for visual storytelling. <br /> <br />
            At 18 years old, my journey into the world of art began three years <br />
            ago when I discovered a love for movies and animation. This passion <br />
            quickly grew, and within two months, I had already started working <br />
            as an intern in the field, gaining valuable experience and sharpening
            my <br />
            skills.
            <br /> <br />
            I’ve since become proficient in a range of creative tools, including <br />
            Adobe After Effects, Illustrator, Photoshop, Premiere Pro, and Figma.{" "}
            <br />
            Recently, I’ve also started learning Blender to further expand my <br />
            capabilities. My goal is to one day work as a visual effects artist in{" "}
            <br />
            Hollywood, where I can contribute to the creation of stunning, <br />
            cinematic experiences.
          </p>
        </div>

        <div id="skills-section" className="my-14 w-[800px]">
          <h1 className="mb-10 text-red-500 text-5xl font-bold">SKILLS</h1>

          <div className="flex justify-around items-center">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center space-y-4">
                <div className="relative w-32 h-32">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 36 36"
                    style={{ transform: "rotate(-90deg)" }}
                  >
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      stroke="#1f2937"
                      strokeWidth="3.5"
                      fill="none"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      stroke="#ef4444"
                      strokeWidth="3.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray="100"
                      strokeDashoffset={
                        visible ? 100 - skill.percentage : 100
                      }
                      style={{
                        transition: "stroke-dashoffset 1s ease-in-out",
                      }}
                    />
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-red-500">
                      {animatedPercentages[index]}%
                    </span>
                  </div>
                </div>

                <span className="text-2xl font-bold text-white">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p>
            Beyond my professional interests, I’m an avid sports enthusiast,
            with a <br />
            love for badminton, soccer, ping pong, and chess. Everything related{" "}
            <br />
            to art also sparks my curiosity, from music and movies to theater
            and <br />
            painting. <br /> <br />
            Along the way, I’ve achieved personal milestones. I’ve earned
            medals <br />
            in both badminton and soccer, showcasing my dedication to sports.{" "}
            <br />
            I’m also working remotely as an intern for Podscribe, a New <br />
            York-based company, which has given me valuable experience in a <br />
            professional setting.
            <br />
            <Button
              variant="contained"
              className="my-3 w-40 h-8 text-lg rounded-md"
              href="/"
            >
              BACK
            </Button>
          </p>

          <div className="m-28">
            <Image
              src={Signture}
              alt="Signture"
              className="h-[350px] w-56"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MorePage;
