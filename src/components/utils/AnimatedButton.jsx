import React, { useState, useEffect } from "react";

function AnimatedButton() {
  const [hovered, setHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    setHovered(true);
    setPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  useEffect(() => {
    if (hovered) {
      const button = document.getElementById("position-aware-button");
      if (button) {
        const span = button.querySelector("span");
        if (span) {
          console.log("span found");
          span.style.top = `${position.y}px`;
          span.style.left = `${position.x}px`;
        } else {
          console.log("span not found");
        }
      } else {
        console.log("button not found");
      }
    }
  }, [hovered, position]);

  return (
    <button
      id="position-aware-button"
      className={`position-aware-button ${hovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Hover me
      {hovered && <span className="animation-span" />}
    </button>
  );
}

export default AnimatedButton;
