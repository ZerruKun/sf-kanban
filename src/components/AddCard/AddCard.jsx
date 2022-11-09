import React, { useState } from "react";
import styles from "./AddCard.module.css";
import Submit from "../Submit/Submit"
import CardSelect from "../CardSelect/CardSelect"
import { observer } from "mobx-react-lite";

const AddButton = observer((props) => {

  //Чтобы не делать уникальное глобальное состояние для каждого листа в основном сторе
  const [isAddActive, setIsAddActive] = useState(false);

  //Переключатель для отобрадения соответствующей кнопки
  const toogleAddMenu = (status) => {
    setIsAddActive(status);
  }

  //Вспомогательная функция для измерения массива
  const arrayLength = (arr) => {
    if(!arr) {
      return 0;
    }
    const innerArray = arr;
    let result = innerArray.length;
    return result;
  }

  //Сравнение с props.title захардкодил, так как это параметр не планируются к изменению
  return (
    <>
      {isAddActive ? props.title === "Backlog" ? (<Submit toogleAddMenu={toogleAddMenu}/>) 
      : (<CardSelect title={props.title} tasks={props.tasks} choice={props.choice} toogleAddMenu={toogleAddMenu}/>) 
      : (arrayLength(props.choice) > 0 || props.title === "Backlog") 
      ? (<button className={styles.general} onClick={() => toogleAddMenu(true)}>+ Add card</button>)
      : (<button className={styles.general} disabled>+ Add card</button>)
      }
    </>
  )
});

export default AddButton;