import React from 'react'
import styles from "./Main.module.css"
import List from '../List/List'

const Main = () => {
  return (
    <div className={styles.general}>
      <List />
      <List />
      <List />
      <List />
    </div>
  )
}

export default Main
