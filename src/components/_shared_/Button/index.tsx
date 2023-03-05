import { Component, JSX } from "solid-js";

import styles from "./index.module.scss";

type IButton = {} & JSX.IntrinsicElements["button"];

const Button: Component<IButton> = (props) => {
  return <button class={styles.button} {...props} />;
};

export default Button;
