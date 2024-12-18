"use client";

import { usePageCounter } from "../../zustand";
import { Box, Button } from "@mantine/core";
import { MapPageCounterExplanation } from "./MapPageCounterExplanation";
import { useLocation } from "react-router";
import styles from "./index.module.css";

export const Footer = () => {
  const { pageCounter, increasePageCounter, decreasePageCounter } =
    usePageCounter((state) => state);

  const location = useLocation();
  const _pathname: keyof typeof MapPageCounterExplanation =
    location.pathname.split("/")[1];

  return (
    <div className={styles.wrapper}>
      <Box className={styles.box} mx="auto" maw={400} c="blue.6" bg="#fff">
        {MapPageCounterExplanation[_pathname]?.[pageCounter]}
      </Box>
      <Button
        variant="gradient"
        gradient={{ from: "blue", to: "cyan", deg: 90 }}
        mx="auto"
        onClick={decreasePageCounter}
      >
        Previous
      </Button>
      <Button
        variant="gradient"
        gradient={{ from: "blue", to: "cyan", deg: 90 }}
        mx="auto"
        onClick={increasePageCounter}
      >
        Next
      </Button>
      <Button
        variant="gradient"
        gradient={{ from: "blue", to: "cyan", deg: 90 }}
        mx="auto"
        onClick={increasePageCounter}
      >
        Next Chapter
      </Button>
    </div>
  );
};
