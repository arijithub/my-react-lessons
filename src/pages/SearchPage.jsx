import { useState } from 'react'

export default function SearchPage() {
  const users = ["Alex", "Ben", "Charlie", "David"]
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Search Example</h2>
      <input 
        placeholder="Search..." 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <ul>
        {users
          .filter(u => u.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(u => <li key={u}>{u}</li>)
        }
      </ul>
    </div>
  )
}