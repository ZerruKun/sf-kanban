import React from "react";
import styles from "./Main.module.css";
import List from "../List/List";
import tasks from "../../store/tasks"

const Main = () => {

  return (
    <div className={styles.general}>
      <List tasks={tasks.backlog} title="Backlog" addCard={tasks.addCard}/>
      <List tasks={tasks.ready} choice={tasks.backlog} title="Ready"/>
      <List tasks={tasks.inProgress} choice={tasks.ready} title="In progress"/>
      <List tasks={tasks.finished} choice={tasks.inProgress} title="Finished"/>
    </div>
  );
};

export default Main;