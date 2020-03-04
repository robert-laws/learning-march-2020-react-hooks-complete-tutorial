import React, { useState, useEffect } from 'react'

export const UpdateContact = () => {
  const [name, setName] = useState('');
  const [nameCharCount, setNameCharCount] = useState(0);

  const handleChange = event => {
    setName(event.target.value);
  }

  useEffect(() => {
     setNameCharCount(name.length + 1)
  }, [name.length])

  return (
    <div>
      <input type='text' value={name} onChange={handleChange} />
      <p>{name}</p>
      <p>{nameCharCount}</p>
    </div>
  )
}
