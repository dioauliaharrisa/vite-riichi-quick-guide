import styles from "./index.module.css";

export const IndicatorGameRound = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>東1局 東家 3巡目</div>
      <div className={styles.translation}>Ton 1, North seat, Turn 3</div>
    </div>
  );
};
