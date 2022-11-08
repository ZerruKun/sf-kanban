import styles from "./List.module.css";
import AddCard from "../ui/AddCard/AddCard"
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

const List = observer((props) => {
  // {props.tasks.map(el => {
  //   console.log(el.id)
  // })}
  return (
    <div className={styles.general}>
      <h2 className={styles.heading}>{props.title}</h2>
      {props.tasks.map(el =>
        <Link to={`/tasks/${el.id}`} key={el.id}>
          <div className={styles.task}>
              {el.name} 
          </div>
        </Link>
        )
      }
      <AddCard title={props.title} tasks={props.tasks} choice={props.choice}/>
    </div>
  );
});

export default List;