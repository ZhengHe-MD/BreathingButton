import React from 'react';
import BreathingButton from './src/BreathingButton.jsx';
import styles from './App.css';

const App = () => (
  <div className={styles.container}>
    <div className={styles.button}>
      <BreathingButton
        onClick={() => { console.log('clicked'); }}
      >
        BreathingButton
      </BreathingButton>
    </div>
  </div>
);

export default App;
