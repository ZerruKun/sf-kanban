import React from "react";
import styles from "./Lists.module.css";
import List from "../List/List";
import tasks from "../../store/tasks"
import { observer } from "mobx-react-lite";

const Lists = observer(() => {
  
  //Получение данных из localStorage и распределине по категориям
  const getLocalStorageCards = () => {
    let storage = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;
    while (i--) {
      storage[keys[i]] = JSON.parse(localStorage.getItem(keys[i]));
    }
    //При таком подходе первый объект всегда получается пустым - убираем его
    storage.shift();
    for (let i = 0; i < storage.length; i++) {
      if(storage[i].category === "backlog") {
        tasks.backlog.push(storage[i]);
      } else if(storage[i].category === "ready") {
        tasks.ready.push(storage[i]);
      } else if(storage[i].category === "inProgress") {
        tasks.inProgress.push(storage[i]);
      } else if(storage[i].category === "finished") {
        tasks.finished.push(storage[i]);
      }        
    }
  }

  getLocalStorageCards();

  //Title задан строкой, так как не планируется к изменению
  return (
    <div className={styles.general}>
      <List tasks={tasks.backlog} title="Backlog" addCard={tasks.addCard}/>
      <List tasks={tasks.ready} choice={tasks.backlog} title="Ready"/>
      <List tasks={tasks.inProgress} choice={tasks.ready} title="In progress"/>
      <List tasks={tasks.finished} choice={tasks.inProgress} title="Finished"/>
    </div>
  );
});

export default Lists;