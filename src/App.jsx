import { useState } from 'react'

function App() {
  // 1. Create a "State" variable to hold the data
  const [name, setName] = useState("")

  // 2. Create a function to handle the typing
  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div style={{ padding: '50px' }}>
      <h1>React Live Typing</h1>
      
      {/* 3. The Input Field */}
      <input 
        type="text" 
        placeholder="Type a name..." 
        onChange={handleChange}
        style={{ padding: '10px', fontSize: '16px' }}
      />

      {/* 4. Display the data dynamically */}
      <h3>Result: {name}</h3>
    </div>
  )
}

export default App