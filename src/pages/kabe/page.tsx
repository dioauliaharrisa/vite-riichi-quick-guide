import { useMemo } from "react";
import { createDiscardPond } from "../../helpers/createDiscardPond";
import { createHand } from "../../helpers/createHands";
import { usePageCounter } from "../../zustand";
import styles from "./page.module.css";

export default function Page() {
  const pageCounter = usePageCounter((state) => state.pageCounter);

  const discardPond = useMemo(() => {
    return createDiscardPond([
      [
        "Z3",
        "P2",
        "Z4",
        "P1",
        "M2",
        "Z5",
        "M9",
        "S2",
        "Z4",
        "Z1",
        "S9",
        pageCounter === 3 ? "rS8" : "S8",
        "S7",
        "S7",
      ],
      [
        "Z4",
        "M9",
        pageCounter === 3 ? "rS8" : "S8",
        "Z4",
        "Z6",
        "P9",
        "Z3",
        "S4",
        pageCounter === 3 ? "rS8" : "S8",
        "S6",
        "P2",
        "S7",
        pageCounter === 3 ? "rS8" : "S8",
      ],
      [
        "Z3",
        "S5",
        "M9",
        "Z5",
        "P4",
        "M1",
        "M1",
        "P9",
        "P9",
        "S9",
        "Z2",
        "S3",
        "S2",
        "P8",
      ],
      [
        "Z3",
        "Z5",
        "S1",
        "Z6",
        "M1",
        "S3",
        "M2",
        "Z1",
        "S6",
        "S6",
        "S3",
        "S1",
        "S2",
        "Z5",
      ],
    ]);
  }, [pageCounter]);

  const firstHand = useMemo(() => {
    return createHand([
      "M3",
      "M3",
      "M4",
      "M5",
      "M6",
      "M6",
      "M7",
      "M8",
      "Z7",
      "Z7",
      "M2",
      "M3",
      "S9",
    ]);
  }, []);

  return (
    <div className={styles.page}>
      {pageCounter < 4 && (
        <>
          <div className={styles.discard_pond}>{discardPond}</div>
          {firstHand}
        </>
      )}
      {/* {pageCounter === 1 && (
        <>
          <div className={styles.discard_pond}>
            {createDiscardPond([
              [
                "S3",
                "S3",
                "S4",
                "S2",
                "S3",
                "S4",
                "S2",
                "S3",
                "S4",
                "S2",
                "S3",
                "S4",
              ],
              ["M2", "M3", "M4"],
              ["P2", "P3", "P4"],
              ["Z2", "Z3", "Z4"],
            ])}
          </div>
          {createHand([
            "M3",
            "M3",
            "M4",
            "M5",
            "M6",
            "M6",
            "M7",
            "M8",
            "Z7",
            "Z7",
            "M2",
            "M3",
            "M4",
          ])}
        </>
      )} */}
    </div>
  );
}
