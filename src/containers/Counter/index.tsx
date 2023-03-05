import { Component, Show } from "solid-js";

import Button from "@/components/_shared_/Button";
import History from "@/components/History";
import SpecialNumberInput from "@/components/SpecialNumberInput";

import { useCounter } from "@/providers/CounterProvider";

import styles from "./index.module.scss";

const Counter: Component = () => {
  const props = useCounter();

  return (
    <div class={styles.wrapper}>
      <p class={styles.text}>{props.count()}</p>

      <div class={styles.actions}>
        <Button onClick={props.decrement}>➖</Button>

        <Button onClick={props.increment}>➕</Button>

        <Show when={props.timerOn()}>
          <Button onClick={props.turnTimerOff}>🛑</Button>
        </Show>

        <Show when={!props.timerOn()}>
          <Button onClick={props.turnTimerOn}>⏰</Button>
        </Show>
      </div>

      <SpecialNumberInput />

      <History />
    </div>
  );
};

export default Counter;
