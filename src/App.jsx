import styles from "./App.module.css";
import React from "react";
import HeaderPage from "./components/pages/header";
import SocialMedia from "./components/pages/fixed-elements/social-media";
import HeroPage from "./components/pages/main";
import QuotePage from "./components/pages/quote";
import Square672 from "./components/pages/fixed-elements/square/672";
import Projects from "./components/pages/projects";
import Skills from "./components/pages/skills";
import AboutMe from "./components/pages/aboutMe";
import Square1160 from "./components/pages/fixed-elements/square/1160";
import Square2125 from "./components/pages/fixed-elements/square/2125";
import Dot932 from "./components/pages/fixed-elements/dots/932";
import Dot2294 from "./components/pages/fixed-elements/dots/2294";
import Contacts from "./components/pages/contacts";



export default function App() {
  return (
    <div className={styles.pageContainer}>
      <HeaderPage />
      <SocialMedia />
      <HeroPage />
      <QuotePage />
      <Square672 />
      <Square1160 />
      <Square2125 />
      <Dot932 />
      <Dot2294 />
      <Projects />
      <Skills />
      <AboutMe />
      <Contacts />
    </div>
  );
}
