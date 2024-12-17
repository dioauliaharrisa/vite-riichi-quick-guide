import { TileImage } from "../../components/tile-image";
import styles from "./index.module.css";

export const createHand = (text: string[]) => {
  const mapped = text.map((each) => {
    const Component = <TileImage name={each} key={Math.random()} />;
    return Component || null;
  });
  return <div className={styles.wrapper}>{mapped}</div>;
};
