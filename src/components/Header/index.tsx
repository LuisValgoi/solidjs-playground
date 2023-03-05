import type { Component } from "solid-js";

import logo from "@/assets/logo.svg";

import styles from "./index.module.scss";

const Header: Component = () => {
  return (
    <header class={styles.header}>
      <img src={logo} class={styles.logo} alt="logo" />
      <p class={styles.text}>SolidJS Playground</p>
    </header>
  );
};

export default Header;
