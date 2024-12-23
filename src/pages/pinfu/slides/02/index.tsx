import { IndicatorGameRound } from "../../../../components/indicator-game-round";
import { createHand } from "../../../../helpers/createHands";
import styles from "./index.module.css";
import { IconX } from "@tabler/icons-react";
import { IconCheck } from "@tabler/icons-react";

export const Slide02 = () => {
  return (
    <>
      <IndicatorGameRound />
      <div className={styles.wrapper_lines}>
        <div className={styles.line}>
          {createHand({
            hand: [
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
            ],
          })}
          <IconX stroke={2} style={{ color: "red" }} />
        </div>
        <div className={styles.line}>
          {createHand({
            hand: [
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
            ],
          })}
          <IconX stroke={2} style={{ color: "red" }} />
        </div>
        <div className={styles.line}>
          {createHand({
            hand: [
              "S2",
              "S3",
              "S4",
              "P1",
              "P2",
              "P3",
              "P7",
              "P8",
              "P9",
              "Z4",
              "Z4",
              "M2",
              "M3",
            ],
          })}
          <IconX stroke={2} style={{ color: "red" }} />
        </div>
        <div className={styles.line}>
          {createHand({
            hand: [
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
            ],
          })}
          <IconX stroke={2} style={{ color: "red" }} />
        </div>
        <div className={styles.line}>
          {createHand({
            hand: [
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
            ],
          })}
          <IconCheck style={{ color: "green" }} stroke={2} />
        </div>
      </div>
    </>
  );
};
