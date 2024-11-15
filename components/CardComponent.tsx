import React from "react";

interface CardComponentProps {
  title: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ title }) => {
  return (
    <div className="w-[310px] h-[490px] cursor-pointer relative flex flex-col bg-gradient-to-r from-indigo-950 to-sky-950 rounded-2xl justify-center items-center">
      <div className="text-center">
        <span className="text-3xl font-semibold text-orange-200">{title}</span>
      </div>
    </div>
  );
};

export default CardComponent;
