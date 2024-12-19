import { createHand } from "../../../../helpers/createHands";
import styles from "./index.module.css";

export const Slide02 = () => {
  return (
    <div className={styles.slide}>
      <div className={styles.wrapper_lines}>
        {/* <div className={styles.line}> */}
        <div className={styles.line_1}>{createHand(["S2", "S3", "S4"])}</div>
        {/* <div>Mentsu</div> */}
        {/* </div> */}
        <div className={styles.line_2}>{createHand(["M2", "M2", "M2"])}</div>
        <div className={styles.line_3}>{createHand(["P7", "P8", "P9"])}</div>
        <div className={styles.line_4}>{createHand(["Z3", "Z3"])}</div>
        <div className={styles.line_5}>{createHand(["P5", "Z4"])}</div>
      </div>
    </div>
  );
};
