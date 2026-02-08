import React, { useState, useMemo, useCallback, memo, useRef, useEffect, useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import PersonIcon from '@mui/icons-material/Person';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { 
  createTheme, ThemeProvider, CssBaseline, Box, Typography, 
  Button, IconButton, Drawer, Badge, useMediaQuery, 
  Avatar, Container, Stack, Skeleton, List, ListItem, ListItemText 
} from '@mui/material';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// Icons
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MenuIcon from '@mui/icons-material/Menu';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import bannerImage from '/images/banner-bg.png';

const NEON_GOLD = '#FFD700';
const BORDER = '1px solid rgba(255, 215, 0, 0.2)';
const GLASS = 'rgba(15, 15, 15, 0.7)';

const theme = createTheme({
  palette: { mode: 'dark', primary: { main: NEON_GOLD } },
  typography: { fontFamily: '"Syncopate", "Orbitron", sans-serif' }
});

// --- PARTICLE ENGINE ---
const ParticleTrail = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrame;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (x, y) => {
      for (let i = 0; i < 2; i++) {
        particles.current.push({
          x, y,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 2,
          speedY: (Math.random() - 0.5) * 2,
          alpha: 0.8
        });
      }
    };

    const handleMove = (e) => {
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const y = e.touches ? e.touches[0].clientY : e.clientY;
      createParticle(x, y);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current.forEach((p, i) => {
        p.x += p.speedX; p.y += p.speedY; p.alpha -= 0.015;
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = NEON_GOLD;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
        if (p.alpha <= 0) particles.current.splice(i, 1);
      });
      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove, { passive: true });
    window.addEventListener('resize', resize);
    resize(); animate();
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 50 }} />;
};

const SmartImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '220px', display: 'flex', justifyContent: 'center' }}>
      {!loaded && <Skeleton variant="rectangular" width="70%" height="100%" sx={{ bgcolor: 'rgba(255,215,0,0.05)', borderRadius: '20px' }} />}
      <motion.img 
        src={src} alt={alt} onLoad={() => setLoaded(true)}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.9 }}
        style={{ width: '90%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.8))' }} 
      />
    </Box>
  );
};

const ProductCard = memo(({ product, onAdd }) => (
  <Box sx={{ 
    height: { xs: 450, md: 550 },
    bgcolor: GLASS,
    backdropFilter: 'blur(20px)',
    border: BORDER,
    borderRadius: '35px',
    p: { xs: 3, md: 5 },
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    '&:hover': { borderColor: NEON_GOLD, transform: 'translateY(-15px)', boxShadow: `0 20px 40px rgba(255,215,0,0.15)` }
  }}>
    <SmartImage src={product.image} alt={product.name} />
    <Box sx={{ mt: 'auto' }}>
      <Typography variant="h6" sx={{ fontWeight: 900, mb: 1, textTransform: 'uppercase', letterSpacing: 2 }}>{product.name}</Typography>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" sx={{ fontWeight: 200, color: NEON_GOLD }}>${product.price}</Typography>
        <Button 
          variant="contained" 
          onClick={() => onAdd(product)}
          sx={{ bgcolor: 'white', color: 'black', borderRadius: '12px', px: 3, fontWeight: 900, '&:hover': { bgcolor: NEON_GOLD } }}
        >
          ACQUIRE
        </Button>
      </Stack>
    </Box>
  </Box>
));

const Home = () => {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { scrollY } = useScroll();
  const bannerScale = useTransform(scrollY, [0, 500], [1, 1.2]);
  const bannerOpacity = useTransform(scrollY, [0, 500], [0.6, 0]); // Increased starting opacity for visibility
  const navBlur = useTransform(scrollY, [0, 100], [0, 15]);

  const { user, logout } = useContext(AuthContext);
  const [accountAnchor, setAccountAnchor] = useState(null);

  const products = useMemo(() => [
    { id: 1, name: 'Cyber Mobile', price: 1300, image: '/images/mobile-img.png' },
    { id: 2, name: 'Noir Drapery', price: 450, image: '/images/dress-shirt-img.png' },
    { id: 3, name: 'Titanium Logic', price: 2500, image: '/images/laptop-img.png' },
    { id: 4, name: 'Royal Jhumka', price: 890, image: '/images/jhumka-img.png' },
    { id: 5, name: 'Gold Necklace', price: 2200, image: '/images/neklesh-img.png' },
    { id: 6, name: 'Cyber Computer', price: 3200, image: '/images/computer-img.png' },
    { id: 7, name: 'T-Shirt', price: 1200, image: '/images/tshirt-img.png' },
    { id: 8, name: 'Women Clothes', price: 2400, image: '/images/women-clothes-img.png' },
    { id: 9, name: 'Kangan', price: 800, image: '/images/kangan-img.png' }
  ], []);

  const handleAdd = useCallback((p) => {
    setCart(prev => [...prev, { ...p, cid: Math.random() }]);
    setCartOpen(true);
  }, []);

  return (
    <Box sx={{ bgcolor: '#000', color: '#fff', minHeight: '100vh', overflowX: 'hidden' }}>
      <CssBaseline />
      <ParticleTrail />

      {/* --- SUPER BANNER --- */}
      <Box sx={{ position: 'fixed', inset: 0, zIndex: -2, overflow: 'hidden' }}>
        <motion.div 
          style={{ 
            scale: bannerScale, 
            opacity: bannerOpacity,
            backgroundImage: "url('/images/banner-bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            width: '100%'
          }} 
        />
        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, #000)' }} />
      </Box>

      {/* --- GLASS NAV --- */}
      <motion.div style={{ backdropFilter: `blur(${navBlur}px)`, position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: { xs: 2, md: 4 } }}>
          <IconButton 
            onClick={() => setMenuOpen(true)} 
            sx={{ color: 'white', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" sx={{ fontWeight: 900, letterSpacing: { xs: 2, md: 8 }, ml: 2 }}>EFLYER</Typography>
          
          <IconButton onClick={() => setCartOpen(true)} sx={{ color: NEON_GOLD, border: BORDER, bgcolor: 'rgba(0,0,0,0.3)' }}>
            <Badge badgeContent={cart.length} color="error" sx={{ '& .MuiBadge-badge': { fontWeight: 900 } }}>
              <ShoppingBagOutlinedIcon />
            </Badge>
          </IconButton>

          {/* Account button */}
          <IconButton onClick={(e) => setAccountAnchor(e.currentTarget)} sx={{ color: 'white', border: '1px solid rgba(255,255,255,0.08)' }}>
            <PersonIcon />
          </IconButton>

          <Menu anchorEl={accountAnchor} open={Boolean(accountAnchor)} onClose={() => setAccountAnchor(null)}>
            {user ? (
              <MenuItem onClick={() => { logout(); setAccountAnchor(null); }}>Logout</MenuItem>
            ) : (
              <>
                <MenuItem onClick={() => { window.location.href = '/login'; setAccountAnchor(null); }}>Login</MenuItem>
                <MenuItem onClick={() => { window.location.href = '/signup'; setAccountAnchor(null); }}>Sign Up</MenuItem>
              </>
            )}
          </Menu>
        </Stack>
      </motion.div>

      {/* --- HERO --- */}
      <Container maxWidth="xl" sx={{ pt: { xs: 20, md: 35 }, pb: 10, position: 'relative' }}>
        <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
          <Typography sx={{ fontSize: { xs: '2.5rem', md: '8rem' }, fontWeight: 900, lineHeight: 0.8, textAlign: 'center', textTransform: 'uppercase', mb: 2 }}>
            THE <br /> <span style={{ color: NEON_GOLD, textShadow: `0 0 30px ${NEON_GOLD}66` }}>ULTRA</span> VAULT
          </Typography>
          <Typography sx={{ textAlign: 'center', opacity: 0.5, letterSpacing: 4, fontSize: '0.8rem' }}>
            [ ESTABLISHED 2026 // NEURAL COMMERCE ]
          </Typography>
        </motion.div>
      </Container>

      {/* --- SHOWCASE --- */}
      <Box sx={{ py: 10 }}>
        <Swiper
          modules={[Autoplay, EffectCoverflow, Pagination]}
          effect="coverflow"
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{ delay: 3000 }}
          speed={1000}
          coverflowEffect={{ rotate: 5, stretch: 0, depth: 100, modifier: 2.5, slideShadows: false }}
        >
          {products.map((p) => (
            <SwiperSlide key={p.id} style={{ width: isMobile ? '300px' : '480px' }}>
              <ProductCard product={p} onAdd={handleAdd} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* --- SIDE MENU DRAWER --- */}
      <Drawer
        anchor="left"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        PaperProps={{ sx: { width: 300, bgcolor: '#080808', borderRight: BORDER } }}
      >
        <Box sx={{ p: 4 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 900 }}>NAVIGATION</Typography>
            <IconButton onClick={() => setMenuOpen(false)}><CloseIcon /></IconButton>
          </Stack>
          <List>
            {['COLLECTIONS', 'TECH', 'APPAREL', 'ACCESSORIES'].map((text) => (
              <ListItem button key={text} sx={{ py: 2 }}>
                <ListItemText primary={text} primaryTypographyProps={{ fontWeight: 900, letterSpacing: 2 }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* --- CART DRAWER --- */}
      <Drawer 
        anchor="right" open={cartOpen} onClose={() => setCartOpen(false)} 
        sx={{ zIndex: 12000 }}
        PaperProps={{ 
          sx: { width: { xs: '100vw', sm: 450 }, bgcolor: '#080808', borderLeft: BORDER, backgroundImage: 'none' } 
        }}
      >
        <Box sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 6 }}>
            <Typography variant="h5" sx={{ fontWeight: 900 }}>VAULT_LIST</Typography>
            <IconButton onClick={() => setCartOpen(false)} sx={{ color: 'white', border: '1px solid #222' }}><CloseIcon /></IconButton>
          </Stack>

          <Box sx={{ flex: 1, overflowY: 'auto' }}>
            <AnimatePresence mode="popLayout">
              {cart.length === 0 ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <Typography sx={{ textAlign: 'center', mt: 10, opacity: 0.3 }}>VAULT IS EMPTY</Typography>
                </motion.div>
              ) : (
                cart.map((item, i) => (
                  <motion.div 
                    key={item.cid} layout
                    initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }}
                    transition={{ type: 'spring', damping: 20, delay: i * 0.05 }}
                  >
                    <Stack direction="row" spacing={2} sx={{ mb: 3, p: 2, borderRadius: '25px', bgcolor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <Avatar src={item.image} variant="rounded" sx={{ width: 60, height: 60, border: BORDER }} />
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 900 }}>{item.name}</Typography>
                        <Typography variant="h6" sx={{ color: NEON_GOLD, fontSize: '1rem' }}>${item.price}</Typography>
                      </Box>
                      <IconButton onClick={() => setCart(c => c.filter(prev => prev.cid !== item.cid))}>
                        <DeleteOutlineIcon sx={{ color: 'rgba(255,255,255,0.3)' }} />
                      </IconButton>
                    </Stack>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </Box>

          <Box sx={{ pt: 4, borderTop: '1px solid #222' }}>
            <Stack direction="row" justifyContent="space-between" sx={{ mb: 3 }}>
              <Typography sx={{ opacity: 0.5 }}>TOTAL_VALUE</Typography>
              <Typography variant="h5" sx={{ fontWeight: 900, color: NEON_GOLD }}>
                ${cart.reduce((sum, item) => sum + item.price, 0)}
              </Typography>
            </Stack>
            <Button 
              fullWidth variant="contained" 
              sx={{ py: 2.5, bgcolor: NEON_GOLD, color: 'black', fontWeight: 900, borderRadius: '15px', '&:hover': { bgcolor: '#fff' } }}
            >
              INITIALIZE CHECKOUT
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}