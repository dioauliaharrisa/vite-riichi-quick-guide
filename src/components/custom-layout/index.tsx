// src/components/Layout.tsx
import React from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import styles from "./index.module.css"; // Create styles for the layout if needed
import { Drawer, Text } from "@mantine/core";
import { usePageCounter } from "../../zustand";
import { NavLink, Outlet } from "react-router";

export const Layout: React.FC = () => {
  const shouldToggleDrawer = usePageCounter(
    (state) => state.shouldToggleDrawer
  );
  console.log("🦆 ~ shouldToggleDrawer:", shouldToggleDrawer);
  const toggleDrawer = usePageCounter((state) => state.toggleDrawer);

  return (
    <>
      <div className={styles.page}>
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
        <div className={styles.header}>
          <Header />
        </div>
        <Outlet></Outlet>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
};
