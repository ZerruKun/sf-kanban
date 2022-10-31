import React from "react";
import styles from "./Main.module.css";
import List from "../List/List";
import tasks from "../../store/tasks"

const Main = () => {

  return (
    <div className={styles.general}>
      <List backlog={tasks.backlog} title="Backlog" addCard={tasks.addCard}/>
      <List backlog={tasks.backlog} title="Ready"/>
      <List backlog={tasks.backlog} title="In progress"/>
      <List backlog={tasks.backlog} title="Finished"/>
    </div>
  );
};

export default Main;