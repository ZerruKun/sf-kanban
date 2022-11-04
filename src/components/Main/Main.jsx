import React from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./Main.module.css";
import Lists from "../Lists/Lists";
import NotFound from "../NotFound/NotFound"

const Main = () => {

  return (
    <div className={styles.general}>
      <Routes>
        <Route path="/" element={<Lists />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default Main;