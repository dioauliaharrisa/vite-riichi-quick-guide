import { createHand } from "../../../../helpers/createHands";
// import { usePageCounter } from "../../../../zustand";
import styles from "./index.module.css";

export const Slide01 = () => {
  // const pageCounter = usePageCounter((state) => state.pageCounter);
  return (
    <div className={styles.page}>
      <div className={styles.line}>
        <div className={styles.one}>
          {createHand({
            hand: ["S2", "S3", "S4", "M4", "M5", "M6", "P7", "P8"],
          })}
        </div>
        <div className={styles.two}>
          {createHand({
            hand: ["M2"],
          })}
        </div>
        <div className={styles.three}>
          {createHand({
            hand: ["S7"],
          })}
        </div>
        <div className={styles.four}>
          {createHand({
            hand: ["Z3"],
          })}
        </div>
        <div className={styles.five}>
          {createHand({
            hand: ["P5"],
          })}
        </div>
        <div className={styles.six}>
          {createHand({
            hand: ["M9"],
          })}
        </div>
      </div>
    </div>
  );
};
