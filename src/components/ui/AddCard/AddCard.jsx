import React, { useState } from "react";
import styles from "./AddCard.module.css";
import Submit from "../Submit/Submit"
import CardSelect from "../CardSelect/CardSelect"

const AddButton = (props) => {

  //Чтобы не делать уникальное глобальное состояние для каждого листа в основном сторе
  const [isAddActive, setIsAddActive] = useState(false);

  const toogleAddMenu = (status) => {
    setIsAddActive(status);
  }

  return (
    <>
      {isAddActive ? props.title === "Backlog" ? (<Submit toogleAddMenu={toogleAddMenu}/>) 
      : (<CardSelect tasks={props.tasks} choice={props.choice} toogleAddMenu={toogleAddMenu}/>) 
      : (<button className={styles.general} onClick={() => toogleAddMenu(true)}>+ Add card</button>)}
    </>
  )
};

export default AddButton;