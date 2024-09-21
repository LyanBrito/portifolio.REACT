import styles from "./App.module.css";
import React from "react";
import HeaderPage from "./components/pages/header";
import SocialMedia from "./components/pages/fixed-elements/social-media";
import HeroPage from "./components/pages/main";
import QuotePage from "./components/pages/quote";
import Square from "./components/pages/fixed-elements/square";

export default function App() {
  return (
    <div className={styles.pageContainer}>
      <HeaderPage />
      <SocialMedia />
      <HeroPage />
      <QuotePage />
      <Square />
    </div>
  );
}
