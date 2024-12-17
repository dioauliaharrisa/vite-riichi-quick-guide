import { ActionIcon, Box } from "@mantine/core";
import { IconMenu2 } from "@tabler/icons-react";
import styles from "./index.module.css";
import { usePageCounter } from "../../zustand";
import { NavLink } from "react-router";
import { Drawer, Text } from "@mantine/core";

export const Header = () => {
  const toggleDrawer = usePageCounter((state) => state.toggleDrawer);
  const shouldToggleDrawer = usePageCounter(
    (state) => state.shouldToggleDrawer
  );
  return (
    <Box className={styles.header}>
      <Drawer
        opened={shouldToggleDrawer}
        onClose={toggleDrawer}
        title="Table of contents"
        position="right"
      >
        <div className={styles.table_of_contents}>
          <NavLink to="/complete-hand" end>
            <Text>Complete Hand</Text>
          </NavLink>{" "}
          <NavLink to="/pinfu" end>
            <Text>Pinfu</Text>{" "}
          </NavLink>
          <Text>Types of Iishanten</Text>
        </div>
      </Drawer>
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
