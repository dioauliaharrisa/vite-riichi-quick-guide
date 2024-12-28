import { TileImage } from "../../components/tile-image";
import styles from "./index.module.css";

export const createHand = ({
  hand,
  acceptance,
}: {
  hand: string[];
  acceptance?: [];
}) => {
  const mapped = hand.map((each, index) => {
    const Component = (
      <TileImage name={each} key={`wrapper ${each}-${index}`} />
    );
    return Component || null;
  });

  // unused yet
  const mappedAcceptance = acceptance?.map((each, index) => {
    const Component = (
      <TileImage name={each} key={`wrapper ${each}-${index}`} />
    );
    return Component || null;
  });
  return (
    <div className={`wrapper_3d ${styles.wrapper}`}>
      {mapped}
      <div>{mappedAcceptance}</div>
    </div>
  );
};
