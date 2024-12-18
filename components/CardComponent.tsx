import React from "react";
import Link from "next/link";
import Image from "next/image";
import Line1 from "../public/assets/lines/line1.png";

interface CardComponentProps {
  title: string;
  link: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ title, link }) => {
  return (
    <Link href={link}>
      <div className="relative border-sky-900 border w-[310px] h-[490px] cursor-pointer flex flex-col bg-gradient-to-r from-indigo-950 to-sky-950 rounded-2xl justify-center items-center">
        <Image
          src={Line1}
          alt="line1"
          className="absolute top-7 left-5 w-20"
        />
        <div className="text-center">
          <span
            className="text-3xl font-semibold text-orange-200"
            style={{ fontFamily: "YatraOne" }}
          >
            {title}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CardComponent;
