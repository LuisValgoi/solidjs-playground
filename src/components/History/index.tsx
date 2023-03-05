import { Accessor, Component, For } from "solid-js";

import styles from "./index.module.scss";

type IHistory = {
  list: Accessor<number[]>;
  isSpecialNumber: (key: number) => boolean;
};

const History: Component<IHistory> = (props) => {
  return (
    <>
      <h3 class={styles.h3}>History</h3>
      <For each={props.list()}>
        {(item) => (
          <p
            class={
              props.isSpecialNumber(item) ? styles.textHighlighted : styles.text
            }
          >{`The number is: ${item}`}</p>
        )}
      </For>
    </>
  );
};

export default History;
