import { createHand } from "../../../../helpers/createHands";
import styles from "./index.module.css";

export const Slide01 = () => {
  return (
    <div className={styles.content}>
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
      {createHand({
        hand: ["S2"],
      })}
    </div>
  );
};
