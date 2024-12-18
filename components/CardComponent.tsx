import React from "react";
import Link from "next/link";

interface CardComponentProps {
  title: string;
  link: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ title, link }) => {
  return (
    <Link href={link}>
      <div className="w-[310px] h-[490px] cursor-pointer relative flex flex-col bg-gradient-to-r from-indigo-950 to-sky-950 rounded-2xl justify-center items-center">
        <div className="text-center">
          <span className="text-3xl font-semibold text-orange-200" style={{ fontFamily: "YatraOne" }}>
            {title}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CardComponent;
