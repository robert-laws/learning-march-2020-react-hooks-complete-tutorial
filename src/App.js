import React from 'react';
import './App.scss';
import { Counter } from './components/Counter';



function App() {
  return (
    <main className="App">
      <header>
        <h2>My App</h2>
        <p>React Hooks Complete Tutorial</p>
        <hr/>
      </header>
      <Counter />
    </main>
  );
}

export default App;
