import { Component, Setter } from "solid-js";

import styles from "./index.module.scss";

type ISpecialNumberInput = {
  setSpecialNumber: Setter<number>;
  specialNumber: number;
};

const SpecialNumberInput: Component<ISpecialNumberInput> = (props) => {
  return (
    <>
      <h3 class={styles.h3}>Special Number</h3>
      <input
        type="number"
        class={styles.input}
        value={props.specialNumber}
        onBlur={(e) =>
          props.setSpecialNumber(parseInt(e.currentTarget.value, 20))
        }
      />
    </>
  );
};

export default SpecialNumberInput;
