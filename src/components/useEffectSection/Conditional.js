import React, { useState, useEffect } from 'react';

export const Conditional = () => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log(number)
  }, [number])

  // specify props or state - and compare against previous state for changes
  useEffect(() => {
    console.log(name);
  }, [name])

  return (
    <article>
      <h4 className='title'>Conditional Number</h4>
      <p>{number}</p>
      <section>
        <button onClick={() => setNumber(number + 1)}>Add 1 to Number</button>
      </section>
      <section>
        <input type='text' name='name' value={name} onChange={e => setName(e.target.value)} />
      </section>
      <p>Name is {name}</p>
    </article>
  )
}
