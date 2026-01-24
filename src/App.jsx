import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { 
  createTheme, ThemeProvider, CssBaseline, Box, Typography, 
  Button, IconButton, Drawer, Grid, Badge, useMediaQuery, 
  List, ListItem, ListItemText, Divider, Avatar
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';

// Icons & Swiper
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

// --- CONFIGURATION ---
const ACCENT_GOLD = '#D4AF37';
const GLASS_BORDER = '1px solid rgba(255, 255, 255, 0.12)';

const theme = createTheme({
  palette: { mode: 'dark', secondary: { main: ACCENT_GOLD } },
  typography: { fontFamily: '"Poppins", sans-serif' }
});

// --- STYLED COMPONENTS ---

const GrainOverlay = styled(Box)({
  position: 'fixed', top: '-50%', left: '-50%', width: '200%', height: '200%',
  background: `url('https://grainy-gradients.vercel.app/noise.svg')`,
  opacity: 0.05, pointerEvents: 'none', zIndex: 9999,
  animation: 'noise 0.2s infinite steps(2)',
  '@keyframes noise': {
    '0%': { transform: 'translate(0,0)' },
    '50%': { transform: 'translate(-5%, 5%)' },
    '100%': { transform: 'translate(0,0)' },
  }
});

// --- TIME-BASED GREETING LOGIC ---
const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "GOOD MORNING";
  if (hour < 17) return "GOOD AFTERNOON";
  if (hour < 21) return "GOOD EVENING";
  return "WELCOME, NIGHT OWL";
};

const GlassShatterLoader = ({ onComplete }) => {
  const greeting = getGreeting();
  
  return (
    <Box sx={{ position: 'fixed', inset: 0, zIndex: 10001, display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#050505', flexDirection: 'column' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <Typography variant="caption" sx={{ color: ACCENT_GOLD, letterSpacing: 5, mb: 1, display: 'block', textAlign: 'center' }}>
          {greeting}
        </Typography>
        <Typography variant="h2" sx={{ fontFamily: 'Playfair Display', color: 'white', letterSpacing: { xs: 8, md: 20 }, fontWeight: 300 }}>
          EFLYER
        </Typography>
        <motion.div 
          initial={{ scaleX: 0 }} 
          animate={{ scaleX: 1 }} 
          transition={{ duration: 2.2, ease: "easeInOut" }} 
          onAnimationComplete={onComplete} 
          style={{ height: '1px', background: ACCENT_GOLD, marginTop: 15 }} 
        />
      </motion.div>
    </Box>
  );
};

const ProductCard = ({ product, onAddToCart }) => {
  const imgRef = useRef(null);
  return (
    <motion.div whileHover={{ scale: 1.02, rotateY: 12, rotateX: -5 }} style={{ perspective: '1200px' }}>
      <Box sx={{ 
        background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(30px)', 
        border: GLASS_BORDER, borderRadius: '40px', height: { xs: '450px', md: '520px' }, 
        display: 'flex', flexDirection: 'column', overflow: 'hidden' 
      }}>
        <Box sx={{ p: 4, height: '60%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <motion.img 
            ref={imgRef}
            src={product.image} 
            style={{ maxWidth: '85%', maxHeight: '85%', filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.6))' }}
            onError={(e) => { e.target.src = 'https://via.placeholder.com/300?text=Luxury'; }}
          />
        </Box>
        <Box sx={{ p: 4, flexGrow: 1, background: 'rgba(0,0,0,0.5)', borderRadius: '0 0 40px 40px' }}>
          <Typography variant="overline" sx={{ color: ACCENT_GOLD, letterSpacing: 4 }}>THE VAULT</Typography>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>{product.name}</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5" sx={{ fontWeight: 300 }}>${product.price}</Typography>
            <Button 
              onClick={() => onAddToCart(product, imgRef.current.getBoundingClientRect())}
              variant="outlined" 
              sx={{ borderColor: ACCENT_GOLD, color: 'white', borderRadius: '50px', px: 4, '&:hover': { bgcolor: ACCENT_GOLD, color: 'black' } }}
            >
              Acquire
            </Button>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

// --- MAIN PAGE ---

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [flyingItems, setFlyingItems] = useState([]);
  const [navOpen, setNavOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  
  const cartIconRef = useRef(null);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const mouseX = useSpring(0);
  const mouseY = useSpring(0);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);

const products = [
    { id: 1, name: 'Cyber Mobile', price: 1300, image: 'images/mobile-img.png' },
    { id: 2, name: 'Noir Drapery', price: 450, image: 'images/dress-shirt-img.png' },
    { id: 3, name: 'Titanium Logic', price: 2500, image: 'images/laptop-img.png' },
    { id: 4, name: 'Royal Jhumka', price: 890, image: 'images/jhumka-img.png' },
    { id: 5, name: 'Gold Necklace', price: 2200, image: 'images/neklesh-img.png' },
    { id: 6, name: 'Cyber Computer', price: 3200, image: 'images/computer-img.png' },
  ];

  const addToCart = (product, rect) => {
    const cartRect = cartIconRef.current.getBoundingClientRect();
    const flyId = Date.now();
    setFlyingItems(prev => [...prev, { id: flyId, image: product.image, startX: rect.left, startY: rect.top, endX: cartRect.left, endY: cartRect.top }]);
    setTimeout(() => {
      setCartItems(prev => [...prev, { ...product, cartId: flyId }]);
      setFlyingItems(prev => prev.filter(i => i.id !== flyId));
    }, 850);
  };

  const removeFromCart = (cartId) => {
    setCartItems(prev => prev.filter(item => item.cartId !== cartId));
  };

  return (
    <Box onMouseMove={(e) => { mouseX.set(e.clientX - 100); mouseY.set(e.clientY - 100); }}
         sx={{ bgcolor: '#020202', color: 'white', minHeight: '100vh', overflowX: 'hidden' }}>
      <CssBaseline />
      <GrainOverlay />
      
      <AnimatePresence>{loading && <GlassShatterLoader onComplete={() => setLoading(false)} />}</AnimatePresence>

      <AnimatePresence>
        {flyingItems.map(item => (
          <motion.img key={item.id} src={item.image}
            initial={{ left: item.startX, top: item.startY, width: 100, opacity: 1 }}
            animate={{ left: item.endX, top: item.endY, width: 20, opacity: 0, scale: 0.1, rotate: 1080 }}
            transition={{ duration: 0.85, ease: [0.6, -0.05, 0.01, 0.99] }}
            style={{ position: 'fixed', zIndex: 11000, pointerEvents: 'none' }}
          />
        ))}
      </AnimatePresence>

      {/* NAVIGATION DRAWER */}
      <Drawer anchor="left" open={navOpen} onClose={() => setNavOpen(false)} PaperProps={{ sx: { width: '85%', maxWidth: '350px', bgcolor: 'rgba(5,5,5,0.98)', backdropFilter: 'blur(20px)', borderRight: GLASS_BORDER } }}>
        <Box sx={{ p: 4, height: '100%' }}>
          <IconButton onClick={() => setNavOpen(false)} sx={{ color: 'white', mb: 5 }}><CloseIcon /></IconButton>
          <Typography variant="h3" sx={{ mb: 6, letterSpacing: 5, fontStyle: 'italic', color: ACCENT_GOLD }}>EFLYER</Typography>
          {['Collections', 'Menswear', 'Women', 'Digital Vault'].map(text => (
            <Typography key={text} variant="h4" sx={{ mb: 4, fontWeight: 200, cursor: 'pointer', '&:hover': { color: ACCENT_GOLD } }}>{text}</Typography>
          ))}
        </Box>
      </Drawer>

      {/* MINI-CART DRAWER */}
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)} PaperProps={{ sx: { width: '85%', maxWidth: '400px', bgcolor: 'rgba(5,5,5,0.98)', backdropFilter: 'blur(20px)', borderLeft: GLASS_BORDER } }}>
        <Box sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>Your Fleet</Typography>
            <IconButton onClick={() => setCartOpen(false)} sx={{ color: 'white' }}><CloseIcon /></IconButton>
          </Box>
          <Divider sx={{ mb: 4, borderColor: 'rgba(255,255,255,0.1)' }} />
          <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
            {cartItems.length === 0 ? (
              <Typography sx={{ opacity: 0.5, textAlign: 'center', mt: 10 }}>Your fleet is empty.</Typography>
            ) : (
              cartItems.map((item, idx) => (
                <Box key={idx} sx={{ display: 'flex', gap: 2, mb: 3, alignItems: 'center' }}>
                  <Avatar src={item.image} variant="rounded" sx={{ width: 60, height: 60, bgcolor: 'rgba(255,255,255,0.05)', p: 1 }} />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle1">{item.name}</Typography>
                    <Typography variant="body2" color="secondary">${item.price}</Typography>
                  </Box>
                  <IconButton onClick={() => removeFromCart(item.cartId)} sx={{ color: 'rgba(255,255,255,0.3)' }}><DeleteOutlineIcon /></IconButton>
                </Box>
              ))
            )}
          </Box>
          <Box sx={{ pt: 4, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Typography variant="h6">Total Value</Typography>
              <Typography variant="h6" color="secondary">${cartItems.reduce((acc, curr) => acc + curr.price, 0)}</Typography>
            </Box>
            <Button fullWidth variant="contained" sx={{ bgcolor: ACCENT_GOLD, color: 'black', fontWeight: 900, py: 2, borderRadius: '50px' }}>
              PROCEED TO VOYAGE
            </Button>
          </Box>
        </Box>
      </Drawer>

      {/* PAGE CONTENT */}
      <Box sx={{ p: { xs: 2, md: 6 }, opacity: loading ? 0 : 1, transition: 'opacity 1.5s ease' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: { xs: 4, md: 10 } }}>
          <IconButton onClick={() => setNavOpen(true)} sx={{ color: 'white' }}><MenuIcon /></IconButton>
          <Typography variant="h4" sx={{ fontWeight: 900, letterSpacing: { xs: 3, md: 10 }, fontStyle: 'italic', fontFamily: 'Playfair Display' }}>
            EFLYER
          </Typography>
          <motion.div ref={cartIconRef} whileTap={{ scale: 0.9 }}>
            <IconButton onClick={() => setCartOpen(true)} sx={{ color: ACCENT_GOLD, p: { xs: 1, md: 2 }, border: `1px solid ${ACCENT_GOLD}30` }}>
              <Badge badgeContent={cartItems.length} color="error">
                <ShoppingBagOutlinedIcon fontSize={isMobile ? "medium" : "large"} />
              </Badge>
            </IconButton>
          </motion.div>
        </Box>

        <motion.div style={{ y: isMobile ? 0 : heroY }}>
          <Grid container spacing={4} alignItems="center" sx={{ mb: { xs: 10, md: 20 }, textAlign: { xs: 'center', md: 'left' } }}>
            <Grid item xs={12} md={7}>
              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }}>
                <Typography variant="h1" sx={{ fontSize: { xs: '3rem', sm: '4.5rem', md: '8.5rem' }, fontWeight: 900, lineHeight: 0.85, mb: 4 }}>
                  THE GOLDEN <br /> <span style={{ color: ACCENT_GOLD }}>VOYAGE.</span>
                </Typography>
                <Typography sx={{ opacity: 0.5, mb: 5, fontSize: { xs: '1rem', md: '1.4rem' }, maxWidth: 600, mx: { xs: 'auto', md: 0 } }}>
                  Experience luxury through high-performance code. Meticulously curated masterpieces for the modern navigator.
                </Typography>
                <Button sx={{ border: `2px solid ${ACCENT_GOLD}`, color: 'white', px: { xs: 4, md: 8 }, py: 2, borderRadius: 0, fontWeight: 900, fontSize: '1.1rem' }}>
                  ENTER THE VAULT
                </Button>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
              <motion.img 
                animate={{ y: [0, -40, 0], rotateZ: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                src="/images/laptop-img.png" 
                style={{ width: '120%', filter: 'drop-shadow(0 60px 80px rgba(0,0,0,0.9))' }} 
              />
            </Grid>
          </Grid>
        </motion.div>

        <Box sx={{ py: 10 }}>
          <Typography variant="h3" sx={{ mb: 10, textAlign: 'center', fontWeight: 200, letterSpacing: 8, fontSize: { xs: '2rem', md: '3.5rem' } }}>
            MASTERPIECES
          </Typography>
          <Swiper
            modules={[Navigation, Autoplay, EffectCoverflow]}
            effect="coverflow"
            centeredSlides={true}
            slidesPerView="auto"
            autoplay={{ delay: 3500 }}
            coverflowEffect={{ 
              rotate: isMobile ? 30 : 50, 
              stretch: 0, 
              depth: 200, 
              modifier: 1, 
              slideShadows: false 
            }}
          >
            {products.map((p, i) => (
              <SwiperSlide key={i} style={{ width: isMobile ? '300px' : '480px', padding: '20px' }}>
                <ProductCard product={p} onAddToCart={addToCart} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        <Box sx={{ mt: 20, py: 10, borderTop: GLASS_BORDER, textAlign: 'center', opacity: 0.3 }}>
          <Typography variant="caption" sx={{ letterSpacing: 10, fontSize: '0.8rem' }}>
            © MMXXVI EFLYER ULTRA • {new Date().getFullYear()} VOYAGE
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}