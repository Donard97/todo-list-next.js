import styles from "./page.module.css";
import { ReactElement } from "react";
import { Button, DeleteButton, TasksParent, TasksSection } from "./styles/styles";
import TopControls from "./components/Controls/controls";
import FilterParent from "./components/Filter/filter";
import Task from "./components/Task/task";

export default function Home():ReactElement {
  return (
    <main className={styles.main}>
      <TopControls />
      <TasksSection>
        <FilterParent />
        <TasksParent>
        <Task />
        <Button>Edit</Button>
        <DeleteButton>Delete</DeleteButton>
        </TasksParent>
      </TasksSection>
    </main>
  );
}
