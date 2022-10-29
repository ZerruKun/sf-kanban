import React from "react";
import styles from "./CardSelect.module.css";

const CardSelect = () => {
  return (
    <select className={styles.general}>
      <option></option>
      <option>Test1</option>
      <option>Test2</option>
      <option>Test3</option>
      <option>Test4</option>
    </select>
  );
};

export default CardSelect;