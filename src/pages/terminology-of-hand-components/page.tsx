// import { useMemo } from "react";
// import { createHand } from "../../helpers/createHands";
import { usePageCounter } from "../../zustand";
import styles from "./page.module.css";

export default function Page() {
  const pageCounter = usePageCounter((state) => state.pageCounter);

  // const firstHand = useMemo(() => {
  //   return createHand([
  //     "M3",
  //     "M3",
  //     "M4",
  //     "M5",
  //     "M6",
  //     "M6",
  //     "M7",
  //     "M8",
  //     "Z7",
  //     "Z7",
  //     "M2",
  //     "M3",
  //     "S9",
  //   ]);
  // }, []);

  return (
    <div className={styles.page}>
      {pageCounter < 4 && (
        <>
          {/* <div className={styles.discard_pond}>{discardPond}</div>
          {firstHand} */}
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
