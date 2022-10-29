import React from "react";
import styles from "./TaskCounter.module.css";

const TaskCounter = () => {
  return (
    <div className={styles.general}>
      <span>Active tasks: "Num"</span>
      <span className={styles.finishedTasks}>Finished tasks: "Num"</span>
    </div>
  );
};

export default TaskCounter;