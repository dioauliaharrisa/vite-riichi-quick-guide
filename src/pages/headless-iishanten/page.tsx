import { useEffect, useRef } from "react";
import { usePageCounter } from "../../zustand";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import styles from "./index.module.css";
import { createHand } from "../../helpers/createHands";

export const HeadlessIishanten = () => {
  const pageCounter = usePageCounter((state) => state.pageCounter);

  const hand = useRef<HTMLDivElement>(null);

  const timelinePage0 = useRef(gsap.timeline({ paused: true }));
  const timelinePage1 = useRef(gsap.timeline({ paused: true }));

  useGSAP(() => {
    // Timeline for page 0
    timelinePage0.current
      .set(".hand1", { display: "flex" })
      .set(".hand2", { display: "none" })
      .set(".hand3", { display: "none" })
      .fromTo(".discard1", { y: 0, opacity: 1 }, { y: -20, opacity: 0 });

    // Timeline for page 1
    timelinePage1.current
      .fromTo(".hand1", { display: "flex" }, { display: "none" })
      .fromTo(
        ".hand2",
        { display: "none", x: 0, y: 0 },
        { display: "flex", x: 0, y: -45 }
      )
      .fromTo(
        ".hand3",
        { display: "none", x: 0, y: 0 },
        { display: "flex", x: 0, y: 45 },
        "<"
      ) 
      .to(".discard2", { y: -25, opacity: 0 })
      .to(".discard3", { y: -25, opacity: 0 }, "<")
      .to(".right_part2", { x: -22 })
      .to(".right_part3", { x: -22 }, "<");
  }, []);

  useEffect(() => {
    if (pageCounter === 0) {
      timelinePage1.current.pause(0).progress(0); // Reset page1 animation
      timelinePage0.current.restart(); // Restart page0 animation
    } else if (pageCounter === 1) {
      timelinePage0.current.pause(0).progress(0); // Reset page0 animation
      timelinePage1.current.restart(); // Restart page1 animation
    }
  }, [pageCounter, timelinePage0, timelinePage1]);

  return (
    <div className={styles.page}>
      <div className={styles.hand} ref={hand}>
        <div className="hand1">
          <div className="left_part1">
            {createHand({
              hand: ["S2", "S3", "S4", "M7", "M8", "M9"],
            })}
          </div>
          <div className="discard1">
            {createHand({
              hand: ["M9"],
            })}
          </div>
          <div className="right_part1">
            {createHand({
              hand: ["P7", "P9", "S7", "S8", "S9", "M1", "M2"],
            })}
          </div>
        </div>
        <div className="hand2">
          <div className="left_part2">
            {createHand({
              hand: [
                "S2",
                "S3",
                "S4",
                "M7",
                "M8",
                "M9",
                "M9",
                "P7",
                "P9",
                "S7",
                "S8",
                "S9",
              ],
            })}
          </div>
          <div className="discard2">
            {createHand({
              hand: ["M1"],
            })}
          </div>
          <div className="right_part2">
            {createHand({
              hand: ["M2"],
            })}
          </div>
        </div>
        <div className="hand3">
          <div className="left_part3">
            {createHand({
              hand: ["S2", "S3", "S4", "M7", "M8", "M9"],
            })}
          </div>
          <div className="discard3">
            {createHand({
              hand: ["M9"],
            })}
          </div>
          <div className="right_part3">
            {createHand({
              hand: ["P7", "P9", "S7", "S8", "S9", "M1", "M2"],
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
