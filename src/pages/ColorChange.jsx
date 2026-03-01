import { useState } from 'react'

export default function ColorChange() {
  const [coloritem, setcoloritem] = useState("")

  return (
    <div>
     
      <div style={{ padding: '20px', paddingTop: '80px', background: coloritem }}>
        <h2>Color Change</h2>
        <input 
          placeholder="Search..." 
          onKeyUp={(e) => setcoloritem(e.target.value)} 
        />

      </div>
    </div>
  )
}