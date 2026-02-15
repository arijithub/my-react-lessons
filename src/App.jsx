import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { createTheme, ThemeProvider } from '@mui/material';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';

const NEON_GOLD = '#FFD700';

const theme = createTheme({
  palette: { mode: 'dark', primary: { main: NEON_GOLD } },
  typography: { fontFamily: '"Syncopate", "Orbitron", sans-serif' }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </AuthProvider>
        <SpeedInsights />
      </BrowserRouter>
    </ThemeProvider>
  );
}