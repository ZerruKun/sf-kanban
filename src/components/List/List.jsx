import styles from "./List.module.css";
import AddCard from "../ui/AddCard/AddCard"
import { observer } from "mobx-react-lite";

const List = observer((props) => {
  return (
    <div className={styles.general}>
      <h2 className={styles.heading}>{props.title}</h2>
      {props.tasks.map(el =>
        <div className={styles.task} key={el.id}>
          {el.name}
        </div>)
      }
      <AddCard title={props.title} tasks={props.tasks} choice={props.choice}/>
    </div>
  );
});

export default List;