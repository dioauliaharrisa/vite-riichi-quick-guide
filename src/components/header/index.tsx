import { ActionIcon, Box } from "@mantine/core";
import { IconMenu2 } from "@tabler/icons-react";
import styles from "./index.module.css";
import { usePageCounter } from "../../zustand";
import { NavLink } from "react-router";
import { Drawer, Text } from "@mantine/core";
import { useLocation } from "react-router";
import { MapPageCounterExplanation } from "../footer/MapPageCounterExplanation";

export const Header = () => {
  const { toggleDrawer, shouldToggleDrawer, resetPageCounter } = usePageCounter(
    (state) => state
  );
  const location = useLocation();
  const _pathname: keyof typeof MapPageCounterExplanation =
    location.pathname.split("/")[1];

  const handleClickDrawer = (): void => {
    toggleDrawer();
    resetPageCounter();
  };
  return (
    <Box className={styles.header}>
      <Drawer
        opened={shouldToggleDrawer}
        onClose={toggleDrawer}
        title="Table of contents"
        position="right"
      >
        <div className={styles.table_of_contents}>
          <NavLink to="/complete-hand" end onClick={handleClickDrawer}>
            <Text>Complete Hand</Text>
          </NavLink>
          <NavLink to="/pinfu" onClick={handleClickDrawer}>
            <Text>Pinfu</Text>
          </NavLink>
          <NavLink to="/5-blocks-theory" onClick={handleClickDrawer}>
            <Text>5 Blocks Theory</Text>
          </NavLink>
          <NavLink to="/6-blocks-theory" onClick={handleClickDrawer}>
            <Text>6 Blocks Theory</Text>
          </NavLink>
          <NavLink to="/types-of-iishanten" onClick={handleClickDrawer}>
            <Text>Types of Iishanten</Text>
          </NavLink>
          <NavLink to="/types-of-iishanten" onClick={handleClickDrawer}>
            <Text>Defense Technique</Text>
          </NavLink>
          <NavLink to="/kabe" onClick={handleClickDrawer}>
            <Text>Kabe</Text>
          </NavLink>
        </div>
      </Drawer>
      <div className={styles.z1}></div>
      <div className={styles.middle_part}>
        <Text className={styles.title}>{_pathname}</Text>
      </div>
      <div className={styles.drawer_button}>
        <ActionIcon variant="default" aria-label="Settings">
          <IconMenu2 stroke={2} onClick={toggleDrawer} />
        </ActionIcon>
      </div>
    </Box>
  );
};
