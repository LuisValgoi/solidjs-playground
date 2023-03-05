import {
  Component,
  createEffect,
  createSelector,
  createSignal,
  onCleanup,
  Show,
} from "solid-js";

import Button from "@/components/_shared_/Button";
import History from "@/components/History";
import SpecialNumberInput from "@/components/SpecialNumberInput";

import styles from "./index.module.scss";

const Counter: Component = () => {
  const [counter, setCounter] = createSignal(1);
  const [timerOn, setTimerOn] = createSignal(false);
  const [list, setList] = createSignal<number[]>([]);
  const [specialNumber, setSpecialNumber] = createSignal<number>(5);
  const isSpecialNumber = createSelector(
    counter,
    (received) => specialNumber() === received
  );

  createEffect(() => {
    let interval: NodeJS.Timeout | undefined = undefined;

    if (timerOn()) {
      interval = setInterval(
        () => setCounter((prevValue) => setCounter(prevValue + 1)),
        1000
      );
    }

    onCleanup(() => clearInterval(interval));
  });

  createEffect(() => {
    setList((list) => list.concat(counter()));
  });

  return (
    <div class={styles.wrapper}>
      <p class={styles.text}>{counter()}</p>
      <div class={styles.actions}>
        <Button onClick={() => setCounter((prevValue) => prevValue - 1)}>
          ➖
        </Button>
        <Button onClick={() => setCounter((prevValue) => prevValue + 1)}>
          ➕
        </Button>

        <Show when={timerOn()}>
          <Button onClick={() => setTimerOn(() => false)}>
            🛑
          </Button>
        </Show>

        <Show when={!timerOn()}>
          <Button onClick={() => setTimerOn(() => true)}>
            ⏰
          </Button>
        </Show>
      </div>

      <SpecialNumberInput
        setSpecialNumber={setSpecialNumber}
        specialNumber={specialNumber()}
      />

      <History isSpecialNumber={isSpecialNumber} list={list} />
    </div>
  );
};

export default Counter;
