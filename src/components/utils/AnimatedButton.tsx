// AnimatedButton.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./AnimatedButton.css";

interface AnimatedButtonProps {
  text: string;
  link: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ text, link }) => {
  return (
    <Link to={link} className="relative inline-block btn btn-1">
      <span className="text-color_font">{text}</span>
      <svg
        className="btn-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 220"
        height="45px"
        width="100%"
        preserveAspectRatio="none"
      >
        <rect x="10" y="10" rx="5" ry="5" width="300" height="200"></rect>
      </svg>
    </Link>
  );
};

export default AnimatedButton;
