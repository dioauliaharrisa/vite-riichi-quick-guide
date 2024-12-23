import { createHand } from "../../../../helpers/createHands";
import styles from "./index.module.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(useGSAP, MotionPathPlugin);

export const Slide01 = () => {
  const line = useRef(null);
  const tileRefs = useRef<HTMLDivElement[]>([]); // A single ref for all tiles

  const animateElements = () => {
    const viewportWidth = window.innerWidth;

    tileRefs.current.forEach((element, index) => {
      if (element) {
        console.log("🦆 ~ tileRefs.current.forEach ~ index:", index);
        const rect = element.getBoundingClientRect();

        const targetX = viewportWidth - rect.x - viewportWidth - rect.width / 2;

        // Animate the elements to their new position
        gsap.to(
          element,
          // { x: 0, y: 0 },
          {
            x: targetX + (index / 6) * viewportWidth, // Calculate the offset based on the current position
            duration: 1,
          }
        );
      }
    });

    // Specific animation for the first group
    gsap.fromTo(
      tileRefs.current[0],
      { opacity: 1 },
      { x: -190, opacity: 0, duration: 1, repeat: -1 }
    );
  };

  useGSAP(
    () => {
      animateElements();
    },
    { scope: line }
  );

  const createHandDiv = (hand: string[], className: string, index: number) => (
    <div
      key={index}
      className={className}
      ref={(el) => {
        if (el) tileRefs.current[index] = el;
      }}
    >
      {createHand({ hand })}
    </div>
  );

  return (
    <div className={styles.page}>
      <div className={styles.line} ref={line}>
        {createHandDiv(
          ["S2", "S3", "S4", "M4", "M5", "M6", "P7", "P8"],
          styles.one,
          0
        )}
        {createHandDiv(["M2"], styles.two, 1)}
        {createHandDiv(["S7"], styles.tile, 2)}
        {createHandDiv(["Z3"], styles.tile, 3)}
        {createHandDiv(["P5"], styles.tile, 4)}
        {createHandDiv(["M9"], styles.tile, 5)}
      </div>
    </div>
  );
};
