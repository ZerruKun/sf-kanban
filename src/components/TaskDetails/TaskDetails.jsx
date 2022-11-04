import React from "react";
import { useParams } from "react-router-dom";
import tasks from "../../store/tasks";

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
        
    </div>
  );
};

export default TaskDetails;