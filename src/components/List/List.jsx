import React from "react";
import styles from "./List.module.css";
import Submit from "../ui/Submit/Submit";
import { observer } from "mobx-react-lite";

const List = observer((props) => {
  return (
    <div className={styles.general}>
      <h2 className={styles.heading}>{props.title}</h2>
      {props.backlog.map(el =>
      <div className={styles.task} key={el.id}>
        {el.name}
      </div>)}
      {/* Временно */}
      <Submit />
    </div>
  );
});

export default List;