import React from 'react';
import './App.scss';
import { FirstCounter } from './components/FirstCounter';
import { SecondCounter } from './components/SecondCounter';
import { StateObject } from './components/StateObject';
import { StateArray } from './components/StateArray';



function App() {
  return (
    <main className="App">
      <header>
        <h2>My App</h2>
        <p>React Hooks Complete Tutorial</p>
        <hr/>
      </header>
      <FirstCounter />
      <SecondCounter />
      <StateObject />
      <StateArray />
    </main>
  );
}

export default App;
