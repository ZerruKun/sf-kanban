import React from "react";
import { useParams } from "react-router-dom";
import tasks from "../../store/tasks";
import NotFound from "../NotFound/NotFound";
import styles from "./TaskDetails.module.css";
import { Link } from "react-router-dom";

const TaskDetails = () => {
  const allTasks = [tasks.backlog, tasks.ready, tasks.inProgress, tasks.finished];
  const { id } = useParams();
  let task = {};
  allTasks.forEach((el) => {
    el.forEach((el) => {
      if (el.id === +id) {
        task = el;
      }
    });
  });

  return (
    <div>
      {task === {} ? (
        <NotFound />
      ) : (
        <div className={styles.container}>
          <div className={styles.general}> 
            <div className={styles.taskHead}>
              <h2>{task.name}</h2>
              <Link to="/">
                <button className={styles.cross}>
                  <img
                    src={require("../../img/ui/cross.svg").default}
                    alt="close task"
                  />
                </button>
              </Link>
            </div>
            <div className={styles.taskDescription}>
              {task.description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskDetails;