import styles from "./page.module.css";
import { ReactElement } from "react";
import { TasksSection } from "./styles/styles";
import TopControls from "./components/Controls/controls";
import FilterParent from "./components/Filter/filter";

export default function Home():ReactElement {
  return (
    <main className={styles.main}>
      <TopControls />
      <TasksSection>
        <FilterParent />
      </TasksSection>
    </main>
  );
}
