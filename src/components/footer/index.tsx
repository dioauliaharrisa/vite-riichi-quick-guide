"use client";

import { usePageCounter } from "../../zustand";
import { Box, Button } from "@mantine/core";
import { MapPageCounterExplanation } from "./MapPageCounterExplanation";
import { useLocation } from "react-router";

export const Footer = () => {
  const pageCounter = usePageCounter((state) => state.pageCounter);
  const increasePageCounter = usePageCounter(
    (state) => state.increasePageCounter
  );
  const location = useLocation();
  console.log("🦆 ~ Footer ~ location:", location);
  const _pathname: keyof typeof MapPageCounterExplanation =
    location.pathname.split("/")[1];

  return (
    <>
      <Box mx="auto" maw={400} c="blue.6" bg="#fff">
        {MapPageCounterExplanation[_pathname]?.[pageCounter]}
      </Box>

      <Button
        variant="gradient"
        gradient={{ from: "blue", to: "cyan", deg: 90 }}
        mx="auto"
        onClick={increasePageCounter}
      >
        Next
      </Button>
    </>
  );
};