import { Image } from "@mantine/core";
import { Wrapper3dTiles } from "../3d-tiles-wrapper";

export const TileImage = ({ name }: { name: string }) => {
  console.log("🦆 ~ TileImage ~ name:", name);

  if (name.includes("E")) {
    return (
      <Wrapper3dTiles orientation={"horizontal"}>
        <Image
          src={`/tiles/${name.substring(0, 2)}.png`}
          alt="Next.js logo"
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
        alt="Next.js logo"
        // objectFit="contain"
        width={38}
        height={60}
      />
    </Wrapper3dTiles>
  );
};
