import { createHand } from "../../helpers/createHands";
import { usePageCounter } from "../../zustand";
import styles from "./page.module.css";
import { IconX } from "@tabler/icons-react";
import { IconCheck } from "@tabler/icons-react";

export default function Page() {
  const pageCounter = usePageCounter((state) => state.pageCounter);
  console.log("🦆 ~ Page ~ pageCounter:", pageCounter);

  return (
    <div className={styles.content}>
      {pageCounter === 0 && (
        <div className={styles.content}>
          {createHand([
            "S2",
            "S3",
            "S4",
            "M2",
            "M3",
            "M4",
            "P7",
            "P8",
            "P9",
            "Z3",
            "Z3",
            "M2",  
            "M3",
          ])}
        </div>
      )}
      {pageCounter === 1 && (
        <div className={styles.wrapper_lines}>
          <div className={styles.line}>
            {createHand([
              "S2",
              "S3",
              "S4",
              "M5",
              "M5",
              "M5",
              "P7",
              "P8",
              "P9",
              "P9",
              "P9",
              "M2",
              "M3",
            ])}
            <IconX stroke={2} style={{ color: "red" }} />
          </div>
          <div className={styles.line}>
            {createHand([
              "S2",
              "S3",
              "S4",
              "Z1",
              "Z1",
              "Z1",
              "P7",
              "P8",
              "P9",
              "P9",
              "P9",
              "M2",
              "M3",
            ])}
            <IconX stroke={2} style={{ color: "red" }} />
          </div>
          <div className={styles.line}>
            {createHand([
              "S2",
              "S3",
              "S4",
              "P1",
              "P2",
              "P3",
              "P7",
              "P8",
              "P9",
              "Z3",
              "Z3",
              "M2",
              "M3",
            ])}
            <IconX stroke={2} style={{ color: "red" }} />
          </div>
          <div className={styles.line}>
            {createHand([
              "S2",
              "S3",
              "S4",
              "Back",
              "Z4",
              "Z4",
              "Back",
              "P7",
              "P8",
              "P9",
              "Z3",
              "Z3",
              "M2",
              "M3",
            ])}
            <IconX stroke={2} style={{ color: "red" }} />
          </div>
          <div className={styles.line}>
            {createHand([
              "S2",
              "S3",
              "S4",
              "M2",
              "M3",
              "M4",
              "P7",
              "P8",
              "P9",
              "Z3",
              "Z3",
              "M2",
              "M3",
            ])}
            <IconCheck style={{ color: "green" }} stroke={2} />
          </div>
        </div>
      )}
      {pageCounter === 2 && (
        <div className={styles.wrapper_lines}>
          <div className={styles.line}>
            {createHand([
              "S2",
              "S3",
              "S4",
              "M7",
              "M8",
              "M9",
              "P7",
              "P8",
              "P9",
              "P9",
              "P9",
              "M2",
              "M3",
            ])}
            <IconCheck style={{ color: "green" }} stroke={2} />
          </div>
          <div className={styles.line}>
            {createHand([
              "S2",
              "S3",
              "S4",
              "M4",
              "M5",
              "M6",
              "M8",
              "M8",
              "P4",
              "P5",
              "P6",
              "P7",
              "P8",
            ])}
            <IconCheck style={{ color: "green" }} stroke={2} />
          </div>
          <div className={styles.line}>
            {createHand([
              "S2",
              "S3",
              "S4",
              "M3",
              "M4",
              "M5",
              "P7",
              "P8",
              "P9",
              "M2",
              "M3",
              "M4",
              "M5",
            ])}
            <IconX stroke={2} style={{ color: "red" }} />
          </div>
        </div>
      )}
    </div>
  );
}
