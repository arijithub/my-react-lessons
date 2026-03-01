import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function BlogPage() {
  const [posts, setPosts] = useState([])

  // useEffect runs once when the page loads (like a constructor)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, []) // Empty array [] means "run only once"

  return (
    <div>
   
      <div style={{ padding: '20px', paddingTop: '80px' }}>
        <h2>Latest Blog Posts</h2>
        {posts.map(post => (
          <div key={post.id} style={{ 
              border: '1px solid #ccc', 
              padding: '10px', 
              margin: '10px 0', 
              borderRadius: '5px' 
          }}>
            <h3>{post.title}</h3>
            {/* Link to a dynamic URL */}
            <Link to={`/blog/${post.id}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  )
}