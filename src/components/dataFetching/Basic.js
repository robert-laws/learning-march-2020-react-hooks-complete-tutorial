import React, { useState, useEffect } from 'react'
import axios from 'axios';

export const Basic = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState('');
  const [id, setId] = useState(1);
  const [buttonId, setButtonId] = useState(id)

  const url = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    axios.get(url).then(res => {
      console.log(res)
      setPosts(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonId}`).then(res => {
      setPost(res.data.title)
    }).catch(err => {
      console.log(err)
    })
  }, [buttonId])

  const handleClick = () => {
    setButtonId(id)
  }

  return (
    <article>
      <h4 className='title'>Basic Data Fetching</h4>
      <p>Your Post: {post}</p>
      <ul>
        {posts.slice(0, 10).map(post => {
          return <li key={post.id}>{post.title}</li>
        })}
      </ul>
      <button onClick={handleClick}>Update Post</button>
      <input type='text' value={id} onChange={e => setId(e.target.value)} />
    </article>
  )
}
