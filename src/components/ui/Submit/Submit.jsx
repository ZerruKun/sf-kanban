import React from "react";
import styles from "./Submit.module.css";
import tasks from "../../../store/tasks";
import { observer } from "mobx-react-lite";
// Использовано для простой генерации id
import nextId from "react-id-generator";

const Submit = observer((props) => {
  let taskId = nextId();
  
  return (
    <div className={styles.general}>
      <input 
        className={styles.input}
        placeholder="Enter task name"
        value={tasks.taskName}
        onChange={(event) => {tasks.setTaskName(event.target.value)}}
      />
      <button 
        className={styles.button} 
        onClick={() => {tasks.addCard(taskId, tasks.taskName); props.toogleAddMenu(false)}}>
          Submit
      </button>
    </div>
  );
});

export default Submit;