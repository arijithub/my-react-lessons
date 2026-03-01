import { useState } from 'react'

export default function ThemePage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  
  return (
    <div>
     
      <div style={{ 
        padding: '20px', 
        paddingTop: '80px',
        height: '300px',
        background: isDarkMode ? '#333' : '#fff', 
        color: isDarkMode ? '#fff' : '#000' 
      }}>
        <h2>Dark Mode Example</h2>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Theme</button>
      </div>
    </div>
  )
}