import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import ThemePage from './pages/ThemePage'
import TwitterPage from './pages/TwitterPage'
import SearchPage from './pages/SearchPage'
import ColorChange from './pages/ColorChange'
import NotFoundPage from './pages/NotFoundPage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />

      <div style={{ padding: '20px',height:'80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/twitter" element={<TwitterPage />} />
          <Route path="/search" element={<SearchPage />} />
           <Route path="/color-change" element={<ColorChange />} />

          
          {/* The * is a wildcard for "anything else" */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
         <Footer />
    </div>
  )
}

export default App