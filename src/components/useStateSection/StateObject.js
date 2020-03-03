import React, { useState } from 'react'

export const StateObject = () => {
  const [name, setName] = useState({ firstName: '', lastName: '' });

  return (
    <article className='counter'>
      <form>
        <input type='text' value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value})} />
        <input type='text' value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value})} />
        <h4>Your name is: {name.firstName} {name.lastName}</h4>
      </form>
    </article>
  )
}
