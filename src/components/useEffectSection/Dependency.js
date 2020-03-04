import React, { useState, useEffect } from 'react'

export const Dependency = () => {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(prevCount => prevCount + 1);
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    }
  }, [count])

  return (
    <article>
      <h4 className='title'>Effect Dependency</h4>
      <section>
        {count}
      </section>
    </article>
  )
}
