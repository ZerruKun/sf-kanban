import React from "react";
import styles from "./Main.module.css";
import List from "../List/List";
import task from "../../store/tasks"

const Main = () => {

  return (
    <div className={styles.general}>
      <List backlog={task.backlog} title="Backlog"/>
      <List backlog={task.backlog} title="Ready"/>
      <List backlog={task.backlog} title="In progress"/>
      <List backlog={task.backlog} title="Finished"/>
    </div>
  );
};

export default Main;