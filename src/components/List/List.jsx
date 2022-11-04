import styles from "./List.module.css";
import AddCard from "../ui/AddCard/AddCard"
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

const List = observer((props) => {
  return (
    <div className={styles.general}>
      <h2 className={styles.heading}>{props.title}</h2>
      {props.tasks.map(el =>
        <div className={styles.task} key={el.id}>
          <Link to={`/tasks/${el.id}`}></Link>
          {el.name}
        </div>)
      }
      <AddCard title={props.title} tasks={props.tasks} choice={props.choice}/>
    </div>
  );
});

export default List;