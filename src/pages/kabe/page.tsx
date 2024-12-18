import { createDiscardPond } from "../../helpers/createDiscardPond";
import { createHand } from "../../helpers/createHands";
import { usePageCounter } from "../../zustand";
import styles from "./page.module.css";

export default function Page() {
  const pageCounter = usePageCounter((state) => state.pageCounter);

  return (
    <div className={styles.page}>
      {pageCounter === 0 && (
        <>
          <div className={styles.discard_pond}>
            {createDiscardPond([
              [
                "S2",
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
                "S2",
                "S3",
                "S4",
              ],
              ["M2", "M3", "M4", "M7"],
              ["P2", "P3", "P4"],
              ["Z2", "Z3", "Z4"],
            ])}
          </div>
          {createHand([
            "P2",
            "P4",
            "S5",
            "S0",
            "S6",
            "M6",
            "M7",
            "Z2",
            "Z4",
            "M7",
            "M7",
            "M9",
            "M9",
          ])}
        </>
      )}
      {pageCounter === 1 && (
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
      )}
    </div>
  );
}
