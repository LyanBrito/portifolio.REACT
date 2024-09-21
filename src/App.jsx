import styles from "./App.module.css";
import React from "react";
import HeaderPage from "./components/pages/header";

export default function App() {
  return <div className={styles.pageContainer}>
    <HeaderPage />
  </div>;
}
