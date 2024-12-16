import Image from "next/image";
import { Wrapper3dTiles } from "../3d-tiles-wrapper";

export const TileImage = ({ name }: { name: string }) => {
  console.log("🦆 ~ TileImage ~ name:", name);

  if (name.includes("E")) {
    return (
      <Wrapper3dTiles orientation={"horizontal"}>
        <Image
          layout="intrinsic"
          src={`/tiles/${name.substring(0, 2)}.png`}
          alt="Next.js logo"
          objectFit="contain"
          width={60}
          height={38}
        />
      </Wrapper3dTiles>
    );
  }
  return (
    <Wrapper3dTiles orientation={"vertical"}>
      <Image
        layout="responsive"
        // src={`/tiles/${name}.png`}
        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/tiles/${name}.png`}
        alt="Next.js logo"
        objectFit="contain"
        width={38}
        height={60}
      />
    </Wrapper3dTiles>
  );
};
