import {
  createSignal,
  createContext,
  useContext,
  ParentProps,
  Accessor,
  createSelector,
  Setter,
  createEffect,
  onCleanup,
} from "solid-js";

type ICounterContext = {
  list: Accessor<number[]>;
  count: Accessor<number>;
  timerOn: Accessor<boolean>;
  specialNumber: Accessor<number>;
  setSpecialNumber: Setter<number>;
  isSpecialNumber: (current: number) => boolean;
  increment: () => void;
  decrement: () => void;
  turnTimerOn: () => void;
  turnTimerOff: () => void;
};

const CounterContext = createContext<ICounterContext>({} as ICounterContext);

type ICounterProvider = {} & ParentProps;

export function CounterProvider(props: ICounterProvider) {
  const [list, setList] = createSignal<number[]>([]);
  const [specialNumber, setSpecialNumber] = createSignal<number>(5);
  const [count, setCount] = createSignal(0);
  const [timerOn, setTimerOn] = createSignal(false);
  const isSpecialNumber = createSelector(
    count,
    (received) => specialNumber() === received
  );

  const increment = () => {
    setCount((c) => c + 1);
  };

  const decrement = () => {
    setCount((c) => c - 1);
  };

  const turnTimerOn = () => {
    setTimerOn(() => true);
  };

  const turnTimerOff = () => {
    setTimerOn(() => false);
  };

  createEffect(() => {
    let interval: NodeJS.Timeout | undefined = undefined;

    if (timerOn()) {
      interval = setInterval(() => increment(), 1000);
    }

    onCleanup(() => clearInterval(interval));
  });

  createEffect(() => {
    setList((list) => list.concat(count()));
  });

  return (
    <CounterContext.Provider
      value={{
        list,
        timerOn,
        count,
        specialNumber,
        setSpecialNumber,
        isSpecialNumber,
        increment,
        decrement,
        turnTimerOn,
        turnTimerOff,
      }}
    >
      {props.children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  return useContext(CounterContext);
}
