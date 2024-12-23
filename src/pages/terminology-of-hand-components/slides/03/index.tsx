import { useEffect, useRef, useState } from "react";
import { createHand } from "../../../../helpers/createHands";
import { Text } from "@mantine/core";

export const Slide03 = () => {
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const termRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const calculatePositions = () => {
      const viewportWidth = window.innerWidth; // Get the current viewport width
      const newPositions = lineRefs.current.map((line, index) => {
        if (line) {
          const rect = line.getBoundingClientRect();
          const currentLeft = rect.left; // Distance from the left edge of the viewport
          const targetLeft = 0.05 * viewportWidth; // Desired alignment in px from the left edge

          // Calculate the translation in percentage (vw) instead of pixels
          const translateX = ((targetLeft - currentLeft) / viewportWidth) * 100;
          const translateY = -10 * index + 20; // Example dynamic Y offset
          return { x: translateX, y: translateY }; // Return final positions
        }
        return { x: 0, y: 0 }; // Default for undefined refs
      });
      setPositions(newPositions);
    };

    // Calculate positions initially and on resize
    calculatePositions();

    const handleResize = () => {
      calculatePositions();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const linesData = [
    { className: "line_1", content: ["S2", "S3", "S4"] },
    { className: "line_2", content: ["M2", "M2", "M2"] },
    { className: "line_3", content: ["P7", "P8", "P9"] },
    { className: "line_4", content: ["Z3", "Z3"] },
    { className: "line_5", content: ["P5", "Z4"] },
  ];

  const termsData = [
    { name: "Floaters" },
    { name: "Toitsu" },
    { name: "Mentsu" },
    { name: "Koutsu" },
    { name: "Floaters" },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        width: "100%",
        margin: "auto",
        position: "relative",
        // backgroundColor: "brown", // Testing background
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          {linesData.map((line, index) => (
            <div
              key={`hand-${index}`}
              ref={(el) => (lineRefs.current[index] = el)}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "5rem",
                height: "5rem",
                // backgroundColor: "blue", // Testing background
                transform: positions[index]
                  ? `translate(${positions[index].x}vw, ${positions[index].y}vh)`
                  : "translate(0, 0)", // Apply final positions
              }}
            >
              {createHand({ hand: line.content })}
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
          }}
        >
          {termsData.map((term, index) => (
            <div
              key={`terms-${index}`}
              ref={(el) => (termRefs.current[index] = el)}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "5rem",
                height: "5rem",
                // backgroundColor: "yellow", // Testing background
                transform: positions[index]
                  ? `translate(${positions[index].x + 20}vw, ${
                      positions[index].y
                    }vh)`
                  : "translate(0, 0)", // Apply final positions
              }}
            >
              <Text>{term.name}</Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
