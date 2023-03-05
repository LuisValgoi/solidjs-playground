import { Component, For } from "solid-js";

import { useCounter } from "@/providers/CounterProvider";

import styles from "./index.module.scss";

type IHistory = {};

const History: Component<IHistory> = (props) => {
  const { isSpecialNumber, list } = useCounter();

  return (
    <>
      <h3 class={styles.h3}>History</h3>
      <For each={list()}>
        {(item) => (
          <p
            class={isSpecialNumber(item) ? styles.textHighlighted : styles.text}
          >{`The number is: ${item}`}</p>
        )}
      </For>
    </>
  );
};

export default History;
