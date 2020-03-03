import React, { useState } from 'react'

export const SecondCounter = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    // update state value based on previous state value
    // use arrow function passing previous state as an argument
    setCount(prevCount => prevCount + 5);
  }

  const incrementTen = () => {
    setCount(prevState => {
      return count + 10
    })
  }

  return (
    <article className='counter'>
      <h4 className='title'>Second Counter</h4>
      <p>{count}</p>
      <section>
        <button onClick={() => setCount(initialCount)}>Reset Count</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={incrementFive}>Add Five</button>
        <button onClick={incrementTen}>Add Ten</button>
      </section>
    </article>
  )
}
