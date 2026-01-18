import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ThemePage from './pages/ThemePage'
import TwitterPage from './pages/TwitterPage'
import SearchPage from './pages/SearchPage'
import ColorChange from './pages/ColorChange'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/twitter" element={<TwitterPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/color-change" element={<ColorChange />} />

        {/* The * is a wildcard for "anything else" */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App