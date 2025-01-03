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

  const totalSlide: number = MapPageCounterExplanation[_pathname]?.length || 0;

  return (
    <div className={styles.wrapper}>
      <Box className={styles.box}>
        {MapPageCounterExplanation[_pathname]?.[pageCounter]}
      </Box>
      <div className={styles.page_counter}>{`${
        pageCounter + 1
      } / ${totalSlide}`}</div>
      <div className={styles.wrapper_buttons}>
        <Button disabled={pageCounter === 0} onClick={decreasePageCounter}>
          Previous
        </Button>
        <Button
          disabled={pageCounter === totalSlide - 1}
          onClick={increasePageCounter}
        >
          Next
        </Button>
        <Button onClick={increasePageCounter}>Next Chapter</Button>
      </div>
    </div>
  );
};
