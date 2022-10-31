import React from "react";
import styles from "./List.module.css";


const List = (props) => {
  return (
    <div className={styles.general}>
      <h2 className={styles.heading}>{props.title}</h2>
      {/* Key изменить!!! */}
      {props.backlog.map(el =>
      <div className={styles.task} key={el.name}>
        {el.name}
      </div>)}
    </div>
  );
};

export default List;