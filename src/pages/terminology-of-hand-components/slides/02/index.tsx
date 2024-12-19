import { useEffect, useRef, useState } from "react";
import { createHand } from "../../../../helpers/createHands";

export const Slide02 = () => {
  const lineRefs = useRef([]);
  const [translations, setTranslations] = useState([]);

  useEffect(() => {
    const calculateTranslations = () => {
      const viewportWidth = window.innerWidth; // Get the current viewport width
      const newTranslations = lineRefs.current.map((line) => {
        if (line) {
          const rect = line.getBoundingClientRect();
          const currentLeft = rect.left; // Distance from the left edge of the viewport
          const targetLeft = 5; // Desired alignment in px from the left edge

          // Calculate the translation in percentage (vw) instead of pixels
          const translateX = ((targetLeft - currentLeft) / viewportWidth) * 100;
          return translateX; // Return the value in vw
        }
        return 0; // Default for undefined refs
      });
      setTranslations(newTranslations);
    };

    // Calculate translations initially and on resize
    calculateTranslations();

    const handleResize = () => {
      calculateTranslations();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const applyAnimations = () => {
      lineRefs.current.forEach((line, index) => {
        if (line && translations[index] !== undefined) {
          const translateX = translations[index];
          const translateY = -10 * index; // Example dynamic Y offset

          line.animate(
            [
              { transform: "translate(0, 0)" }, // Starting position
              { transform: `translate(${translateX}vw, ${translateY}vh)` }, // Use vw for horizontal translation
            ],
            {
              duration: 1000, // 1 second
              easing: "ease-in-out",
              fill: "forwards", // Keep final position
            }
          );
        }
      });
    };

    // Apply animations whenever translations update
    if (translations.length > 0) {
      applyAnimations();
    }
  }, [translations]); // Re-run whenever translations change

  const linesData = [
    { className: "line_1", content: ["S2", "S3", "S4"] },
    { className: "line_2", content: ["M2", "M2", "M2"] },
    { className: "line_3", content: ["P7", "P8", "P9"] },
    { className: "line_4", content: ["Z3", "Z3"] },
    { className: "line_5", content: ["P5", "Z4"] },
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
        backgroundColor: "brown", // Testing background
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
        }}
      >
        {linesData.map((line, index) => (
          <div
            key={index}
            ref={(el) => (lineRefs.current[index] = el)}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "5rem",
              height: "5rem",
              backgroundColor: "lightblue", // Testing background
            }}
          >
            {createHand(line.content)}
          </div>
        ))}
      </div>
    </div>
  );
};
