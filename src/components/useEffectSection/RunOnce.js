import React, { useState, useEffect } from 'react'

export const RunOnce = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = e => {
    console.log('Mouse event');
    setX(e.clientX);
    setY(e.clientY)
  }

  // ComponentDidMount equivalent
  // Empty array as second parameter will apply effect only on initial render
  //
  // ComponentWillUnmount equivalent
  // Cleanup code is a function returned from useEffect code
  useEffect(() => {
    console.log('useEffect called');
    window.addEventListener('mousemove', logMousePosition);

    return () => {
      console.log('Component un-mounting');
      window.removeEventListener('mousemove', logMousePosition);
    }
  }, [])

  return (
    <article>
      <h4 className='title'>Run Only Once</h4>
      <section>
        Hooks X - {x} / Y - {y}
      </section>
    </article>
  )
}
