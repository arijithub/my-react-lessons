import { Routes, Route, Link } from 'react-router-dom'
import ThemePage from './pages/ThemePage'
import TwitterPage from './pages/TwitterPage'
import SearchPage from './pages/SearchPage'
// Import new pages
import BlogPage from './pages/BlogPage'
import SinglePostPage from './pages/SinglePostPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <div>
      <nav style={{ padding: '20px', background: '#eee', display: 'flex', gap: '15px' }}>
        <Link to="/">Home (Theme)</Link>
        <Link to="/twitter">Twitter</Link>
        <Link to="/search">Search</Link>
        {/* New Link */}
        <Link to="/blog">Blog</Link>
      </nav>

      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<ThemePage />} />
          <Route path="/twitter" element={<TwitterPage />} />
          <Route path="/search" element={<SearchPage />} />
          
          {/* New Routes */}
          <Route path="/blog" element={<BlogPage />} />
          
          {/* The :id part is a variable placeholder */}
          <Route path="/blog/:id" element={<SinglePostPage />} />
          
          {/* The * is a wildcard for "anything else" */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App