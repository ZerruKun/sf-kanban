import React from 'react'
import { useParams } from 'react-router-dom'
import tasks from '../../store/tasks'

const TaskDetails = () => {

const backlog = tasks.backlog
const {id} = useParams();
const task = backlog.find((el) => el.id === id)

  return (
    <div>
        {console.log(task)}
    </div>
  )
}

export default TaskDetails
