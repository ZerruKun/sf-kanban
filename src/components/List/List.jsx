import styles from "./List.module.css";
import AddCard from "../ui/AddCard/AddCard"
import { observer } from "mobx-react-lite";

const List = observer((props) => {
  return (
    <div className={styles.general}>
      <h2 className={styles.heading}>{props.title}</h2>
      {props.backlog.map(el =>
        <div className={styles.task} key={el.id}>
          {el.name}
        </div>)
      }
      {/* Временно */}
      <AddCard title={props.title}/>
    </div>
  );
});

export default List;