import type { Component } from 'solid-js';

import Header from '@/components/Header';
import Counter from '@/containers/Counter';

import { CounterProvider } from '@/providers/CounterProvider';

import styles from './index.module.scss';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Header />
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </div>
  );
};

export default App;
