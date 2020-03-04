import React from 'react';
import './App.scss';
import { FirstCounter } from './components/useStateSection/FirstCounter';
import { SecondCounter } from './components/useStateSection/SecondCounter';
import { StateObject } from './components/useStateSection/StateObject';
import { StateArray } from './components/useStateSection/StateArray';
import { AfterRender } from './components/useEffectSection/AfterRender';
import { Conditional } from './components/useEffectSection/Conditional';
import { EffectCleanup } from './components/useEffectSection/EffectCleanup';
import { Dependency } from './components/useEffectSection/Dependency';
// import { UpdateContact } from './components/useEffectSection/UpdateContact';
// import { RunOnce } from './components/useEffectSection/RunOnce';

function App() {
  return (
    <main className="App">
      <header>
        <h2>My App</h2>
        <p>React Hooks Complete Tutorial</p>
        <hr/>
      </header>
      {/* <section className='useState'>
        <UpdateContact />
      </section> */}
      <section className='useState'>
        <h3>useState Section</h3>
        <FirstCounter />
        <SecondCounter />
        <StateObject />
        <StateArray />
      </section>
      <section className="useEffect">
        <h3>useEffect Section</h3>
        <AfterRender />
        <Conditional />
        {/* <RunOnce /> */}
        <EffectCleanup />
        <Dependency />
      </section>
    </main>
  );
}

export default App;
