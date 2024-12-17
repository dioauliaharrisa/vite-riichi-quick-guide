// src/components/Layout.tsx
import React from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import styles from "./index.module.css";

import { Outlet } from "react-router";

export const Layout: React.FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Header />
      </div>
      <Outlet></Outlet>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};
