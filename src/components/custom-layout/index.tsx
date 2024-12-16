// src/components/Layout.tsx
import React from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import styles from "./index.module.css"; // Create styles for the layout if needed
import { Drawer } from "@mantine/core";
import { usePageCounter } from "../../zustand";
// import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const shouldToggleDrawer = usePageCounter(
    (state) => state.shouldToggleDrawer
  );
  const toggleDrawer = usePageCounter((state) => state.toggleDrawer);

  return (
    <>
      <Drawer
        opened={shouldToggleDrawer}
        onClose={toggleDrawer}
        title="Table of contents"
        position="right"
      >
        <div className={styles.table_of_contents}>
          {/* <Link href="/set">Complete Hand</Link>
          <Link href="/pinfu">Pinfu</Link>
          <Link href="/types-of-iishanten">Types of Iishanten</Link> */}
        </div>
      </Drawer>
      <div className={styles.page}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.content}>{children}</div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
};
