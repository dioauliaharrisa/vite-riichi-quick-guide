import styles from "./index.module.css";
import { createHand } from "../../../../helpers/createHands";
import { IconCheck, IconX } from "@tabler/icons-react";

export const Slide03 = () => {
  return (
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
          "M4",
          "M5",
          "M6",
          "M7",
        ])}
        <IconX stroke={2} style={{ color: "red" }} />
      </div>
    </div>
  );
};
