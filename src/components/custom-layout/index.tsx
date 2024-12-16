// src/components/Layout.tsx
import React from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import styles from "./index.module.css"; // Create styles for the layout if needed
import { Drawer, Text } from "@mantine/core";
import { usePageCounter } from "../../zustand";
import { NavLink } from "react-router";
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
          <NavLink to="/complete-hand" end>
            <Text>Complete Hand</Text>
          </NavLink>
          <Text>Pinfu</Text>
          <Text>Types of Iishanten</Text>
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
