import React, { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <article>
      <h4>Counter</h4>
      <p>{count}</p>
      <section>
        <button onClick={handleClick}>Add 1 to Count</button>
      </section>
    </article>
  )
}
