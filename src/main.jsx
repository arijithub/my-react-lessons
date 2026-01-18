import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './assets/css/bootstrap.min.css'
import './assets/css/style.css'
import './assets/css/responsive.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
      <App />
  </BrowserRouter>
  </StrictMode>,
)
