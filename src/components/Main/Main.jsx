import React from "react";
import styles from "./Main.module.css";
import List from "../List/List";
import tasks from "../../store/tasks"

const Main = () => {

  return (
    <div className={styles.general}>
      <List backlog={tasks.backlog} title="Backlog" addCard={tasks.addCard}/>
      <List backlog={tasks.ready} title="Ready"/>
      <List backlog={tasks.inProgress} title="In progress"/>
      <List backlog={tasks.finished} title="Finished"/>
    </div>
  );
};

export default Main;