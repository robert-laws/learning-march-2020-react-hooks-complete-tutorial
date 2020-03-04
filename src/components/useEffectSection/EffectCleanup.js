import React, { useState } from 'react';
import { RunOnce } from './RunOnce';

export const EffectCleanup = () => {
  const [display, setDisplay] = useState(true);

  // ComponentWillUnmount equivalent
  // Cancel subscription in RunOnce component

  return (
    <article>
      <h4 className='title'>Effect Cleanup</h4>
      <section>
        {display && <RunOnce />}
        <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      </section>
    </article>
  )
}
