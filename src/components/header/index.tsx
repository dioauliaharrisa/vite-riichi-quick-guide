import { ActionIcon, Box, Text } from "@mantine/core";
import { IconMenu2 } from "@tabler/icons-react";
import styles from "./index.module.css";
import { usePageCounter } from "../../zustand";

export const Header = () => {
  const toggleDrawer = usePageCounter((state) => state.toggleDrawer);
  return (
    <Box className={styles.header}>
      <div className={styles.z1}></div>
      <div className={styles.title}>
        <Text>Game Objective</Text>
      </div>
      <div className={styles.drawer_button}>
        <ActionIcon variant="default" aria-label="Settings">
          <IconMenu2 stroke={2} onClick={toggleDrawer} />
        </ActionIcon>
      </div>
    </Box>
  );
};
