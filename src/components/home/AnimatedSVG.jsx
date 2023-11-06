import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";

const AnimatedSVG = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const lineProps = {
    lines: [
      {
        id: "svg_11",
        x1: 166.09763,
        y1: 104.13853,
        x2: 211.82295,
        y2: 154.56849,
      },
      {
        id: "svg_12",
        x1: 231.80392,
        y1: 200.42413,
        x2: 320.5145,
        y2: 145.02225,
      },
      {
        id: "svg_14",
        x1: 217.38582,
        y1: 239.30187,
        x2: 299.86709,
        y2: 327.12166,
      },
      {
        id: "svg_15",
        x1: 79.84744,
        y1: 299.88207,
        x2: 159.80596,
        y2: 237.08293,
      },
    ],
  };

  // Definiere eine Animation mit react-spring
  const animationProps = useSpring({
    from: { strokeDasharray: "0 100%" },
    to: async (next) => {
      while (isAnimating) {
        await next({ strokeDasharray: "100% 0%" });
        await next({ strokeDasharray: "0 100%" });
      }
    },
    config: { duration: 1000, easing: config.linear },
  });

  // Funktion zum Starten und Stoppen der Animation
  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <div>
      <h1>SVG Animation</h1>
      <button onClick={toggleAnimation}>
        {isAnimating ? "Stoppe Animation" : "Starte Animation"}
      </button>

      <div style={{ marginTop: "20px" }}>
        {/* Verwende die animierte Komponente von react-spring */}
        <animated.svg
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="400"
          viewBox="0 0 400 400"
          style={{ ...animationProps, overflow: "visible" }}
        >
          {/* Linien mit Animation */}
          {lineProps.lines.map((line) => (
            <line
              key={line.id}
              strokeWidth="15"
              stroke="#000000"
              strokeLinecap="round"
              {...line}
            >
              <animate
                attributeName="strokeDasharray"
                values="0 100%;100% 0%;0 100%"
                dur="1s"
                repeatCount="indefinite"
              />
            </line>
          ))}

          <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
            <g>
              <ellipse
                strokeWidth="15"
                fill="none"
                cx="189.52985"
                cy="206.4689"
                id="svg_4"
                rx="42.43638"
                ry="42.96029"
                stroke="#000000"
              />
            </g>
          </svg>
        </animated.svg>
      </div>
    </div>
  );
};

export default AnimatedSVG;
