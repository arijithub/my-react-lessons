import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div>
     
      <div style={{ textAlign: 'center', paddingTop: '80px' }}>
        <h1 style={{ fontSize: '4rem' }}>404</h1>
        <p>Oops! The page you are looking for does not exist.</p>
        <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>
          Go Home
        </Link>
      </div>
    </div>
  )
}