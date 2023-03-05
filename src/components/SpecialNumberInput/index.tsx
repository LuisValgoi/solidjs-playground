import { Component } from "solid-js";

import { useCounter } from "@/providers/CounterProvider";

import styles from "./index.module.scss";

type ISpecialNumberInput = {};

const SpecialNumberInput: Component<ISpecialNumberInput> = (props) => {
  const { specialNumber, setSpecialNumber } = useCounter();

  return (
    <>
      <h3 class={styles.h3}>Special Number</h3>
      <input
        type="number"
        class={styles.input}
        value={specialNumber()}
        onBlur={(e) => setSpecialNumber(parseInt(e.currentTarget.value, 20))}
      />
    </>
  );
};

export default SpecialNumberInput;
