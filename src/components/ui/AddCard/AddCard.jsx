import React, { useState } from "react";
import styles from "./AddCard.module.css";
import Submit from "../Submit/Submit"
import CardSelect from "../CardSelect/CardSelect"

const AddButton = (props) => {

  const [isAddActive, setIsAddActive] = useState(false);

  const showAddMenu = () => {
    setIsAddActive(true);
  }

  return (
    <>
      {isAddActive ? props.title === "Backlog" ? (<Submit />) : (<CardSelect />) 
      : (<button className={styles.general} onClick={showAddMenu}>+ Add card</button>)}
    </>
  )
};

export default AddButton;