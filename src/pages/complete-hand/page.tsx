"use client";

import { Layout } from "../../components/custom-layout";
import { createHand } from "../../helpers/createHands";
import { usePageCounter } from "../../zustand";
import styles from "./page.module.css";

export default function Page() {
  const pageCounter = usePageCounter((state) => state.pageCounter);

  return (
    <Layout>
      {pageCounter > 0 && (
        <div className={styles.first_set}>{createHand(["S2", "S3", "S4"])}</div>
      )}
      {pageCounter > 0 && (
        <div className={styles.second_set}>
          {createHand(["S6", "S7", "S8"])}
        </div>
      )}
      {pageCounter > 0 && (
        <div className={styles.third_set}>{createHand(["M5", "M6", "M7"])}</div>
      )}
      {pageCounter > 0 && (
        <div className={styles.pair}>{createHand(["Z3", "Z3"])}</div>
      )}
      {pageCounter > 1 && (
        <div className={styles.fifth_set}>{createHand(["P2", "P3"])}</div>
      )}
      {pageCounter > 2 && (
        <div className={styles.agarihai_1}>{createHand(["P1"])}</div>
      )}
      {pageCounter > 2 && (
        <div className={styles.agarihai_2}>{createHand(["P4"])}</div>
      )}
      <div className={styles.content}>
        {createHand([
          "S2",
          "S3",
          "S4",
          "S6",
          "S7",
          "S8",
          "M5",
          "M6",
          "M7",
          "Z3",
          "Z3",
          "P2",
          "P3",
        ])}
      </div>
    </Layout>
  );
}
