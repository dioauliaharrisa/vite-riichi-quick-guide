import styles from "./index.module.css";
import { ReactNode } from "react";

interface Wrapper3dTilesProps {
  children: ReactNode;
  orientation: "horizontal" | "vertical";
}

export const Wrapper3dTiles: React.FC<Wrapper3dTilesProps> = ({
  children,
  orientation = "vertical",
}) => {
  if (orientation === "horizontal") {
    return (
      <div className={styles.wrapper_3d}>
        <div className={styles.h_black} />
        <div className={styles.h_shadow} />
        <div className={styles.h_tile}>{children}</div>
      </div>
    );
  }
  return (
    <div className={styles.wrapper_3d}>
      <div className={styles.black} />
      <div className={styles.shadow} />
      <div className={styles.tile}>{children}</div>
    </div>
  );
};
