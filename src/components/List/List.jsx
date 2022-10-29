import React from 'react';
import styles from "./List.module.css";

const List = () => {
  return (
    <div className={styles.general}>
      <h2 className={styles.heading}>Test</h2>
      <div className='tasks'>
        <div className={styles.task}>Test</div>
        <div className={styles.task}>Test</div>
      </div>
    </div>
  )
}

export default List
