import React, { useEffect, useState } from "react";

interface ProgressCircleProps {
  skill: {
    name: string;
    percentage: number;
  };
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({ skill }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [animatedPercentage, setAnimatedPercentage] = useState<number>(0);

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
      const interval = setInterval(() => {
        setAnimatedPercentage((prev) => {
          const step = Math.ceil(skill.percentage / 50);
          if (prev < skill.percentage) {
            return prev + step;
          } else {
            clearInterval(interval);
            return skill.percentage;
          }
        });
      }, 20);

      return () => clearInterval(interval);
    }
  }, [visible, skill.percentage]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full" viewBox="0 0 36 36" style={{ transform: "rotate(-90deg)" }}>
          <circle cx="18" cy="18" r="16" stroke="#1f2937" strokeWidth="3.5" fill="none" />
          <circle
            cx="18"
            cy="18"
            r="16"
            stroke="#ef4444"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="100"
            strokeDashoffset={visible ? 100 - skill.percentage : 100}
            style={{
              transition: "stroke-dashoffset 1s ease-in-out",
            }}
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-red-500">{animatedPercentage}%</span>
        </div>
      </div>
      <span className="text-2xl font-bold text-white">{skill.name}</span>
    </div>
  );
};

export default ProgressCircle;
