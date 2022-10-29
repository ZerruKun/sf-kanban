import React from 'react'
import styles from "./Submit.module.css"

const Submit = () => {
  return (
    <div className={styles.general}>
      <input className={styles.input}/>
      <button className={styles.button}>Submit</button>
    </div>
  )
}

export default Submit
