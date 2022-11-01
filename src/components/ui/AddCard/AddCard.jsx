import React, { useState } from "react";
import styles from "./AddCard.module.css";
import Submit from "../Submit/Submit"
import CardSelect from "../CardSelect/CardSelect"

const AddButton = (props) => {

  //Чтобы не делать уникальное состояние для каждого листа в основном сторе
  const [isAddActive, setIsAddActive] = useState(false);

  const showAddMenu = (status) => {
    setIsAddActive(status);
  }

  return (
    <>
      {isAddActive ? props.title === "Backlog" ? (<Submit showAddMenu={showAddMenu}/>) : (<CardSelect choice={props.choice}/>) 
      : (<button className={styles.general} onClick={() => showAddMenu(true)}>+ Add card</button>)}
    </>
  )
};

export default AddButton;