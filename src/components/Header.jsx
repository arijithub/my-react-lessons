   import { Link } from 'react-router-dom'

   export default function Header() {
   return (
   <nav style={{ padding: '20px', background: '#eee', display: 'flex', gap: '15px' }}>
        <Link to="/">Home</Link>
        {/* <Link to="/theme">Theme</Link> 
        <Link to="/twitter">Twitter</Link>
        <Link to="/search">Search</Link>
        <Link to="/color-change">Color Change</Link> */}
      </nav>
    )
}

