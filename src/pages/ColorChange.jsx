import { useState } from 'react'

export default function ColorChange() {
  const [coloritem, setcoloritem] = useState("")

  return (
    <div style={{ padding: '20px',background:coloritem }}>
      <h2>Color Change</h2>
      <input 
        placeholder="Search..." 
        onKeyUp={(e) => setcoloritem(e.target.value)} 
      />

    </div>
  )
}