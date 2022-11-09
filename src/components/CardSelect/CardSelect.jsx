import React from "react";
import styles from "./CardSelect.module.css";
import tasks from "../../store/tasks";
import { observer } from "mobx-react-lite";

const CardSelect = observer((props) => {
  return (
    <select className={styles.general}>
      <option></option>
      {props.choice.map(el =>
        <option 
          className={styles.task} key={el.id} 
          onClick={() => {tasks.chooseCard(el, props.tasks, props.choice); props.toogleAddMenu(false)}}
        >
          {el.name}
        </option>)
      }
    </select>
  );
});

export default CardSelect;