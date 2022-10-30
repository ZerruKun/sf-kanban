import React from "react";
import styles from "./List.module.css";
import { observer } from "mobx-react-lite";


const List = observer((props) => {
  return (
    <div className={styles.general}>
      <h2 className={styles.heading}>{props.title}</h2>
      <div className={styles.task}>123</div>
    </div>

// {props.backlog}
  );
});

export default List;