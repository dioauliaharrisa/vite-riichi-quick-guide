import { Image } from "@mantine/core";
import styles from "./index.module.css";

export const ImageTilePond = ({ name }: { name: string }) => {
  // if (name.includes("E")) {
  //   return (
  //     <Wrapper3dTiles orientation={"horizontal"}>
  //       <Image
  //         src={`/tiles/${name.substring(0, 2)}.png`}
  //         // objectFit="contain"
  //         width={60}
  //         height={38}
  //       />
  //     </Wrapper3dTiles>
  //   );
  // }
  return (
    // <Wrapper3dTiles orientation={"vertical"}>
    <div className={styles.tile}>
      <Image
        src={`/tiles/${name}.png`}
        height={"100%"}
        width={"100%"}
        fit="contain"
      />
    </div>
    // </Wrapper3dTiles>
  );
};
