import { useState } from 'react'

export default function TwitterPage() {
  const [tweet, setTweet] = useState("")
  const MAX_CHARS = 50
  const isOverLimit = tweet.length > MAX_CHARS

  return (
    <div style={{ padding: '20px' }}>
      <h2>Twitter Input Example</h2>
      <textarea 
        onChange={(e) => setTweet(e.target.value)}
        style={{ borderColor: isOverLimit ? 'red' : '#ccc' }} 
      />
      <p style={{ color: isOverLimit ? 'red' : 'green' }}>
        {MAX_CHARS - tweet.length} chars left
      </p>
    </div>
  )
}