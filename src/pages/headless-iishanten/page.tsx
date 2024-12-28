import { useEffect, useRef } from "react";
import { usePageCounter } from "../../zustand";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import styles from "./index.module.css";
import { createHand } from "../../helpers/createHands";
import { Text } from "@mantine/core";

export const HeadlessIishanten = () => {
  const pageCounter = usePageCounter((state) => state.pageCounter);

  const hand = useRef<HTMLDivElement>(null);

  const timelinePage0 = useRef(gsap.timeline({ paused: true }));
  const timelinePage1 = useRef(gsap.timeline({ paused: true }));
  const timelinePage2 = useRef(gsap.timeline({ paused: true }));

  useGSAP(() => {
    // Timeline for page 0
    timelinePage0.current
      .set(".hand1", { display: "flex" })
      .set(".hand2", { display: "none" })
      .set(".hand3", { display: "none" })
      .fromTo(".discard1", { y: 0, opacity: 1 }, { y: -20, opacity: 0 })
      .to(".right_part1", { x: -25 });

    // Timeline for page 1
    timelinePage1.current
      .set(".acceptance2", { display: "none" })
      .set(".acceptance3", { display: "none" })
      .fromTo(".hand1", { display: "flex" }, { display: "none" })
      .fromTo(
        ".hand2",
        { display: "none", x: 0, y: 0 },
        { display: "flex", flexDirection: "column", x: 0, y: -65 }
      )
      .fromTo(
        ".hand3",
        { display: "none", x: 0, y: 0 },
        { display: "flex", flexDirection: "column", x: 0, y: 65 },
        "<"
      )
      .to(".row", { display: "flex" }, "<")
      .to(".discard2", { y: -25, opacity: 0 })
      .to(".discard3", { y: -25, opacity: 0 }, "<")
      .to(".right_part2", { x: -25 })
      .to(".right_part3", { x: -25 }, "<")
      .fromTo(
        ".acceptance2",
        { display: "none", opacity: 0, x: 0, y: 0 },
        { display: "flex", opacity: 1, x: 0, y: 25 }
      )
      .fromTo(
        ".acceptance3",
        { display: "none", opacity: 0, x: 0, y: 0 },
        { display: "flex", opacity: 1, x: 0, y: 25 },
        "<"
      );

    timelinePage2.current
      .set(".hand1", { display: "none" })
      .set(".hand2", { display: "flex", flexDirection: "column", x: 0, y: -65 })
      .to(".row", { display: "flex" }, "<")
      .set(".hand3", { display: "none" })
      .fromTo(
        ".acceptance2",
        { display: "flex", opacity: 1, x: 0, y: 25 },
        { display: "none", opacity: 0, y: 0 },
        "<"
      );
  }, []);

  useEffect(() => {
    const timelines = [timelinePage0, timelinePage1, timelinePage2];

    timelines.forEach((timeline, index) => {
      if (pageCounter === index) {
        timeline.current.restart(); // Restart the active timeline
      } else {
        timeline.current.pause(0).progress(0); // Reset inactive timelines
      }
    });
  }, [pageCounter, timelinePage0, timelinePage1]);

  const styleAcceptanceBox = {
    // backgroundColor: "antiquewhite", // FOR TESTING
    height: "5rem",
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  };

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
          <div className="row">
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
          <div className="acceptance2" style={styleAcceptanceBox}>
            {createHand({
              hand: ["P8", "M2", "M6", "M9"],
            })}
            <Text
              size="xl"
              fw={900}
              variant="gradient"
              gradient={{ from: "blue", to: "cyan", deg: 90 }}
            >
              13 Ukeire
            </Text>
          </div>
        </div>
        <div className="hand3">
          <div className="row">
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
          <div className="acceptance3" style={styleAcceptanceBox}>
            {createHand({
              hand: ["M1", "M2", "M3", "P7", "P8", "P9"],
            })}
            <Text
              size="xl"
              fw={900}
              variant="gradient"
              gradient={{ from: "blue", to: "cyan", deg: 90 }}
            >
              20 Ukeire
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
