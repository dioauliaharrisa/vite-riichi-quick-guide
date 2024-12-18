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
      <Box className={styles.box} mx="auto">
        {MapPageCounterExplanation[_pathname]?.[pageCounter]}
      </Box>
      <div className={styles.wrapper_buttons}>
        <Button mx="auto" onClick={decreasePageCounter}>
          Previous
        </Button>
        <Button mx="auto" onClick={increasePageCounter}>
          Next
        </Button>
        <Button mx="auto" onClick={increasePageCounter}>
          Next Chapter
        </Button>
      </div>
    </div>
  );
};
