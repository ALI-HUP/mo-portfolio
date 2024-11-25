"use client";

import React, { useState, useEffect } from "react";

const ProgressCircle = () => {
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
        const step = Math.ceil(skill.percentage / 100);
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
        }, 40);
      });

      return () => intervals.forEach((interval) => clearInterval(interval));
    }
  }, [visible, skills]);

  return (
    <div id="skills-section" className="my-14">
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
                    transition: "stroke-dashoffset 2.5s ease-in-out",
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
  );
};

export default ProgressCircle;
