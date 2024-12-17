import { ImageTilePond } from "../../components/image-tile-pond";
import styles from "./index.module.css";

export const createDiscardPond = (text: string[][]) => {
  const mapped = text.map((each: string[]) => {
    const eachMapped = each.map((eachOfEach: string) => {
      const Component = <ImageTilePond name={eachOfEach} key={Math.random()} />;
      return Component || null;
    });
    return eachMapped;
  });
  return (
    <div className={styles.discard_pond}>
      <div className={styles.ton_discards}>{mapped[0]}</div>
      <div className={styles.nan_discards}>{mapped[1]}</div>
      <div className={styles.sha_discards}>{mapped[2]}</div>
      <div className={styles.pei_discards}>{mapped[3]}</div>
    </div>
  );
};
