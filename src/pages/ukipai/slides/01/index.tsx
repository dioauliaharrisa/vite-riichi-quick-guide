import { createHand } from "../../../../helpers/createHands";
import styles from "./index.module.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { usePageCounter } from "../../../../zustand";

gsap.registerPlugin(useGSAP, MotionPathPlugin);

export const Slide01 = () => {
  const line = useRef(null);
  const tileRefs = useRef<HTMLDivElement[]>([]); // A single ref for all tiles

  const pageCounter = usePageCounter((state) => state.pageCounter);

  const animateSlide01 = () => {
    const viewportWidth = window.innerWidth;

    tileRefs.current.forEach((element, index) => {
      if (element) {
        const rect = element.getBoundingClientRect();

        const targetX = viewportWidth - rect.x - viewportWidth - rect.width / 2;


        gsap.to(
          element,
          {
            x: targetX + (index / 6) * viewportWidth, 
            duration: 1,
          }
        );
      }
    });

    // Specific animation for the first group
    gsap.fromTo(
      tileRefs.current[0],
      { opacity: 1 },
      { x: -190, opacity: 0, duration: 1 }
    );
  };

  useGSAP(
    () => {
      if (pageCounter === 1) {
        animateSlide01();
      }
    },
    { dependencies: [pageCounter], scope: line, revertOnUpdate: true }
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
