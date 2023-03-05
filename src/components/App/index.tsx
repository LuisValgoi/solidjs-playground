import type { Component } from 'solid-js';

import Header from '@/components/Header';
import Counter from '@/components/Counter';

import styles from './index.module.scss';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Header />
      <Counter />
    </div>
  );
};

export default App;
