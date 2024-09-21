import styles from "./App.module.css";
import React from "react";
import HeaderPage from "./components/pages/header";
import SocialMedia from "./components/pages/fixed-elements/social-media";
import HeroPage from "./components/pages/main";

export default function App() {
  return (
    <div className={styles.pageContainer}>
      <HeaderPage />
      <SocialMedia />
      <HeroPage />
    </div>
  );
}
