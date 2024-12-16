import { TileImage } from "../../components/tile-image";
import { Group } from "@mantine/core";

export const createHand = (text: string[]) => {
  const mapped = text.map((each) => {
    const Component = <TileImage name={each} key={Math.random()} />;
    return Component || null; // Render the component if it exists
  });
  return <Group gap={"0.1rem"}>{mapped}</Group>;
};
