import React from "react";
import styles from "./Main.module.css";
import List from "../List/List";
import tasks from "../../store/tasks"

const Main = () => {
  return (
    <div className={styles.general}>
      <List backlog={tasks.backlog} title="Backlog"/>
      <List />
      <List />
      <List />
    </div>
  );
};

export default Main;