import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function SinglePostPage() {
  // 1. Get the ID from the URL (e.g., /blog/5 -> id is 5)
  const { id } = useParams()
  
  const [post, setPost] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
  }, [id]) // Re-run if the ID changes

  if (!post) return <h2>Loading...</h2>

  return (
    <div style={{ padding: '20px' }}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <hr />
      <Link to="/blog">Back to Blog</Link>
    </div>
  )
}