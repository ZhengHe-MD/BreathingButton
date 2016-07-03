import React from 'react';
import BreathingButton from './src/BreathingButton.jsx';
import styles from './App.css';

const App = () => (
  <div className={styles.container}>
    <div className={styles.button}>
      <BreathingButton
        targetScale={1.05}
      >
        BreathingButton
      </BreathingButton>
    </div>
  </div>
);

export default App;
