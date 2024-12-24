import { createHand } from "../../../../helpers/createHands";
import styles from "./index.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { usePageCounter } from "../../../../zustand";

gsap.registerPlugin(MotionPathPlugin);

export const Slide01 = () => {
  const line = useRef(null);
  const tileRefs = useRef<HTMLDivElement[]>([]);
  const m2AcceptanceRefs = useRef<HTMLDivElement[]>([]);
  const refM2Acceptance = useRef<HTMLDivElement>(null);
  const refS7Acceptance = useRef<HTMLDivElement>(null);

  const pageCounter = usePageCounter((state) => state.pageCounter);
  console.log("🦆 ~ Slide01 ~ pageCounter:", pageCounter);
  const prevPageCounter = useRef(pageCounter); // Track the previous pageCounter value

  // const m2AcceptanceRefs = useRef<HTMLDivElement[]>([]);

  const tl = useRef(gsap.timeline({ paused: true }));

  // Initialize animations
  useEffect(() => {
    const viewportWidth = window.innerWidth;

    // Define the timeline and animation states
    tl.current.clear();

    // Animation for pageCounter === 1
    tl.current.addLabel("page0");
    tl.current.fromTo(
      tileRefs.current[0],
      { opacity: 1 },
      { x: -190, opacity: 0, duration: 1 }
    );
    tileRefs.current.forEach((element, index) => {
      if (element) {
        const rect = element.getBoundingClientRect();
        const targetX = viewportWidth - rect.x - viewportWidth - rect.width / 2;

        tl.current.to(
          element,
          {
            x: targetX + (index / 6) * viewportWidth,
            duration: 1,
          },
          "<"
        );
      }
    });

    // Animation for pageCounter === 2
    tl.current.addLabel("page1");
    tileRefs.current.forEach((element, index) => {
      if (element) {
        const rect = element.getBoundingClientRect();
        const targetX = -rect.x + rect.width;

        tl.current.to(
          element,
          {
            x: targetX,
            y: -180 + index * 60,
            duration: 1,
          },
          "page2"
        );
      }
    });
    tl.current.addLabel("page2");

    if (refM2Acceptance.current) {
      tl.current.to(
        refM2Acceptance.current,

        {
          display: "flex",
          position: "absolute",
          onComplete: () => {
            // This will run after the animation completes
            if (refM2Acceptance.current) {
              const rectM2Acceptance =
                refM2Acceptance.current.getBoundingClientRect();

              tl.current.fromTo(
                refM2Acceptance.current,
                {},
                {
                  x: -rectM2Acceptance.x + 150,
                  y: -180 + 1 * 60,
                  display: "flex",
                  position: "absolute",
                },

                "page3"
              );
            }
          },
        },
        "page3"
      );
    }
    if (refS7Acceptance.current) {
      tl.current.to(
        refS7Acceptance.current,

        {
          display: "flex",
          position: "absolute",
          onComplete: () => {
            // This will run after the animation completes
            if (refS7Acceptance.current) {
              const rectS7Acceptance =
                refS7Acceptance.current.getBoundingClientRect();

              tl.current.fromTo(
                refS7Acceptance.current,
                {},
                {
                  x: -rectS7Acceptance.x + 150,
                  y: -180 + 2 * 60,
                  display: "flex",
                  position: "absolute",
                },

                "page3"
              );
            }
          },
        },
        "page3"
      );
      // const rectS7Acceptance = refS7Acceptance.current.getBoundingClientRect();
    }

    tl.current.addLabel("page3");
  }, []);

  // Play or reverse the animation based on pageCounter
  useEffect(() => {
    if (pageCounter > prevPageCounter.current) {
      tl.current.tweenTo(`page${pageCounter}`); // Play forward
    } else if (pageCounter < prevPageCounter.current) {
      tl.current.reverse(`page${pageCounter}`); // Reverse to the previous state
    }

    prevPageCounter.current = pageCounter; // Update the previous counter
  }, [pageCounter]);

  const createHandDiv = (hand: string[], className: string, index: number) => (
    <div
      key={index}
      className={className}
      ref={(el) => {
        if (el) {
          if (index > 5) {
            m2AcceptanceRefs.current[index] = el;
          } else {
            tileRefs.current[index] = el;
          }
        }
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
        <div className={styles.x} ref={refM2Acceptance}>
          {createHandDiv(["M1"], styles.M2_acceptance, 6)}
          {createHandDiv(["M2"], styles.M2_acceptance, 7)}
          {createHandDiv(["M3"], styles.M2_acceptance, 8)}
          {createHandDiv(["M4"], styles.M2_acceptance, 9)}
        </div>
        <div className={styles.x} ref={refS7Acceptance}>
          {createHandDiv(["S5"], styles.M2_acceptance, 6)}
          {createHandDiv(["S6"], styles.M2_acceptance, 7)}
          {createHandDiv(["S7"], styles.M2_acceptance, 8)}
          {createHandDiv(["S8"], styles.M2_acceptance, 9)}
          {createHandDiv(["S9"], styles.M2_acceptance, 9)}
        </div>
      </div>
    </div>
  );
};
