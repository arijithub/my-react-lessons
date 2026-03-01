import React, { useState, useMemo, useCallback, memo, useRef, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ProductRecommendations from '../components/ProductRecommendations';
import Reviews from '../components/Reviews';
import Newsletter from '../components/Newsletter';
import CategoriesShowcase from '../components/CategoriesShowcase';
import FlashSales from '../components/FlashSales';
import BrandPartners from '../components/BrandPartners';
import Statistics from '../components/Statistics';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import SocialProof from '../components/SocialProof';
import CallToAction from '../components/CallToAction';
import VideoSection from '../components/VideoSection';
import Testimonials from '../components/Testimonials';

import { 
  createTheme, CssBaseline, Box, Typography, 
  Button, useMediaQuery, 
  Container, Stack, Skeleton
} from '@mui/material';
import BrandIcon from '../components/BrandIcon';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// Icons

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

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
    <Box sx={{ position: 'relative', width: '100%', height: { xs: '180px', md: '220px' }, display: 'flex', justifyContent: 'center' }}>
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
    height: { xs: 300, md: 550 },        // shrink card height on mobile
    bgcolor: GLASS,
    backdropFilter: 'blur(20px)',
    border: BORDER,
    borderRadius: '35px',
    p: { xs: 1.5, md: 5 },              // tighter padding for compact look
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    '&:hover': { borderColor: NEON_GOLD, transform: { md: 'translateY(-15px)' }, boxShadow: `0 20px 40px rgba(255,215,0,0.15)` }
  }}>
    <SmartImage src={product.image} alt={product.name} />
    <Box sx={{ mt: 'auto' }}>
      <Typography variant="h6" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: '0.9rem', md: '1.25rem' }, textTransform: 'uppercase', letterSpacing: { xs: 1, md: 2 } }}>{product.name}</Typography>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" sx={{ fontWeight: 200, color: NEON_GOLD, fontSize: { xs: '1rem', md: '1.5rem' } }}>${product.price}</Typography>
        <Button 
          variant="contained" 
          onClick={() => onAdd(product)}
          sx={{ bgcolor: 'white', color: 'black', borderRadius: '12px', px: { xs: 2, md: 3 }, py: { xs: 0.5, md: 1 }, fontWeight: 900, '&:hover': { bgcolor: NEON_GOLD } }}
        >
          ACQUIRE
        </Button>
      </Stack>
    </Box>
  </Box>
));

const Home = () => {
  const { addToCart } = useContext(CartContext);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { scrollY } = useScroll();
  const bannerScale = useTransform(scrollY, [0, 500], [1, 1.2]);
  const bannerOpacity = useTransform(scrollY, [0, 500], [0.6, 0]);

  // account anchor no longer needed in this page

  const products = useMemo(() => [
    { id: 1, name: 'Cyber Mobile', price: 1300, image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400' },
    { id: 2, name: 'Noir Drapery', price: 450, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400' },
    { id: 3, name: 'Titanium Logic', price: 2500, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400' },
    { id: 4, name: 'Royal Jhumka', price: 890, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400' },
    { id: 5, name: 'Gold Necklace', price: 2200, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400' },
    { id: 6, name: 'Cyber Computer', price: 3200, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400' },
    { id: 7, name: 'V-Neck Tee', price: 1200, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400' },
    { id: 8, name: 'Women Jacket', price: 2400, image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400' },
    { id: 9, name: 'Kangan Set', price: 800, image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400' },
    { id: 10, name: 'Wireless Headphones', price: 1800, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400' },
    { id: 11, name: 'Smart Watch', price: 2100, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400' },
    { id: 12, name: 'Vintage Camera', price: 1600, image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400' }
  ], []);

  const handleAdd = useCallback((p) => {
    addToCart(p);
  }, [addToCart]);

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


      {/* --- HERO --- */}
      <Container maxWidth="xl" sx={{ pt: { xs: 12, md: 22 }, pb: { xs: 3, md: 6 }, position: 'relative' }}>
        <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
          <Typography sx={{ 
            fontSize: 'clamp(2.5rem, 8vw, 8rem)', 
            fontWeight: 900, 
            lineHeight: { xs: 1.1, md: 0.8 }, 
            textAlign: 'center', 
            textTransform: 'uppercase', 
            mb: { xs: 2, md: 1 } 
          }}>
            THE {isMobile ? '' : <br />} <span style={{ color: NEON_GOLD, textShadow: `0 0 30px ${NEON_GOLD}66` }}>ULTRA</span> 
          </Typography>
          <Typography sx={{ textAlign: 'center', opacity: 0.5, letterSpacing: { xs: 2, md: 4 }, fontSize: { xs: '0.65rem', md: '0.8rem' } }}>
            ESTABLISHED 2026 
          </Typography>
        </motion.div>
      </Container>

      {/* --- SHOWCASE --- */}
      <Box sx={{ py: { xs: 5, md: 10 } }}>
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
            <SwiperSlide key={p.id} style={{ width: isMobile ? '70vw' : '480px', maxWidth: isMobile ? '300px' : '480px' }}>
              <ProductCard product={p} onAdd={handleAdd} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* --- EXTERNAL COMPONENTS --- */}
      <ProductRecommendations />
      <Reviews />
      <Newsletter />
      <CategoriesShowcase />
      <FlashSales />
      <BrandPartners />
      <Statistics />
      <Features />
      <SocialProof />
      <CallToAction />
      <VideoSection />
      <Testimonials />
      <FAQ />


      
    </Box>
  );
};

export default Home;