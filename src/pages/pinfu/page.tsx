import { usePageCounter } from "../../zustand";
import styles from "./page.module.css";
import { Slide01 } from "./slides/01";
import { Slide02 } from "./slides/02";
import { Slide03 } from "./slides/03";

export default function Page() {
  const pageCounter = usePageCounter((state) => state.pageCounter);

  return (
    <div className={styles.content}>
      {pageCounter === 0 && <Slide01 />}
      {pageCounter === 1 && <Slide02 />}
      {pageCounter === 2 && <Slide03 />}
    </div>
  );
}
