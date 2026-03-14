import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeModeContext } from './context/ThemeContext';
import { createTheme, ThemeProvider } from '@mui/material';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Checkout from './pages/Checkout';
import Footer from './components/Footer';
import CommonNavbar from './components/CommonNavbar';
import ThemeToggle from './components/ThemeToggle';
import { CartProvider } from './context/CartContext';

const NEON_GOLD = '#FFD700';
const THEME_MODE_KEY = 'learn-react-theme-mode';

// Theme is generated dynamically inside the App component (for day/night mode).

export default function App() {
  const [mode, setMode] = useState('dark');

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(THEME_MODE_KEY);
      if (stored === 'light' || stored === 'dark') setMode(stored);
    } catch {
      // ignore
    }
  }, []);

  const toggleMode = () => {
    setMode((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      try {
        window.localStorage.setItem(THEME_MODE_KEY, next);
      } catch {
        // ignore storage errors
      }
      return next;
    });
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: NEON_GOLD },
          ...(mode === 'light'
            ? {
                background: { default: '#f4f6ff', paper: '#ffffff' },
                text: { primary: '#101828', secondary: 'rgba(16, 24, 40, 0.65)' },
              }
            : {
                background: { default: '#05060b', paper: '#080808' },
                text: { primary: '#fff', secondary: 'rgba(255,255,255,0.7)' },
              }),
        },
        typography: { fontFamily: '"Syncopate", "Orbitron", sans-serif' },
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <ThemeModeContext.Provider value={{ mode, toggleMode }}>
        <BrowserRouter>
          <AuthProvider>
            <CartProvider>
              <CommonNavbar />
              <ThemeToggle />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
              <Footer />
            </CartProvider>
          </AuthProvider>
        </BrowserRouter>
      </ThemeModeContext.Provider>
    </ThemeProvider>
  );
}