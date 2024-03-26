import styles from "./page.module.css";
import { ReactElement } from "react";
import { ControlArea, CreateButton, Input } from "./styles/styles";
import Controls from "./components/Controls/controls";

export default function Home():ReactElement {
  return (
    <main className={styles.main}>
      <Controls />
      <div ></div>
    </main>
  );
}
