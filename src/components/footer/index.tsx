"use client";

// import { usePageCounter } from "../../zustand";
import { Box, Button } from "@mantine/core";
// import { MapPageCounterExplanation } from "./MapPageCounterExplanation";
// import { usePathname } from "next/navigation";

export const Footer = () => {
  // const pageCounter = usePageCounter((state) => state.pageCounter);
  // const increasePageCounter = usePageCounter(
  //   (state) => state.increasePageCounter
  // );
  // const pathname = usePathname();
  // const _pathname: keyof typeof MapPageCounterExplanation =
  //   pathname.split("/")[1];

  return (
    <>
      <Box mx="auto" maw={400} c="blue.6" bg="#fff">
        {/* {MapPageCounterExplanation[_pathname]?.[pageCounter]} */}
      </Box>

      <Button
        variant="gradient"
        gradient={{ from: "blue", to: "cyan", deg: 90 }}
        mx="auto"
        // onClick={increasePageCounter}
      >
        Next
      </Button>
    </>
  );
};
