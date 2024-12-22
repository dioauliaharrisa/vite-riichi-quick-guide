import { TileImage } from "../../components/tile-image";
import styles from "./index.module.css";

export const createHand = ({ hand }: { hand: string[] }) => {
  const mapped = hand.map((each) => {
    const Component = <TileImage name={each} key={Math.random()} />;
    return Component || null;
  });
  return <div className={styles.wrapper}>{mapped}</div>;
};
