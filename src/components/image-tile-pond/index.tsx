import { Image } from "@mantine/core";
import styles from "./index.module.css";

export const ImageTilePond = ({
  name,
  isMarked = false,
}: {
  name: string;
  isMarked: boolean;
}) => {
  console.log("🦆 ~ name,isMarked:", name, isMarked);
  return (
    <div className={isMarked ? styles.marked_tile : styles.tile}>
      <Image
        src={`/tiles/${isMarked ? name.substring(1) : name}.png`}
        height={"100%"}
        width={"100%"}
        fit="contain"
      />
    </div>
  );
};
