import { observer } from "mobx-react-lite";
import React from "react";
import styles from "./CardSelect.module.css";

const CardSelect = observer((props) => {

  console.log(props.choice)

  return (
    <select className={styles.general}>
      <option></option>
      {props.choice.map(el =>
        <option className={styles.task} key={el.id}>
          {el.name}
        </option>)
      }
    </select>
  );
});

export default CardSelect;