import React, { useState, useEffect } from 'react'

export const AfterRender = () => {
  const [count, setCount] = useState(0);

  // useEffect runs after every render 
  // same as componentDidMount (1st render)
  // componentDidUpdate (subsequent render)
  useEffect(() => {
    document.title = `${count} clicks.`
  })

  return (
    <article>
      <h4 className='title'>Counter One</h4>
      <p>{count}</p>
      <section>
        <button onClick={() => setCount(count + 1)}>Add 1 to Count</button>
      </section>
    </article>
  )
}
