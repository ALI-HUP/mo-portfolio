"use client";

import React from "react";
import Image from "next/image";
import More from "../../public/assets/pictures/more/more.png";
import Vector1 from "../../public/assets/pictures/more/Vector1.png";
import Vector2 from "../../public/assets/pictures/more/Vector2.png";
import Signture from "../../public/more-page/signture.png";
import { Button } from "@mui/material";
import ProgressCircle from "../../components/ProgressCircle";

const MorePage = () => {
  return (
    <div className="morepage-container w-[52%] m-24">
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

        <ProgressCircle />

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
              className="my-2 w-40 h-8 text-lg rounded-md"
              href="/"
            >
              BACK
            </Button>
          </p>

          <div className="flex flex-col items-center -ml-28 mt-20">
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
