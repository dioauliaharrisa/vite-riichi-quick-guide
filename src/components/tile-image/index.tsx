import { Image } from "@mantine/core";
import { Wrapper3dTiles } from "../3d-tiles-wrapper";

export const TileImage = ({ name }: { name: string }) => {
  if (name.includes("E")) {
    return (
      <Wrapper3dTiles orientation={"horizontal"}>
        <Image
          src={`/tiles/${name.substring(0, 2)}.png`}
          // objectFit="contain"
          width={60}
          height={38}
        />
      </Wrapper3dTiles>
    );
  }
  return (
    <Wrapper3dTiles orientation={"vertical"}>
      <Image
        src={`/tiles/${name}.png`}
        height={"100%"}
        width={"100%"}
        fit="contain"
      />
    </Wrapper3dTiles>
  );
};
