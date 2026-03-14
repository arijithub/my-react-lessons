import React, { useState, useContext } from 'react';
import { 
  Box, Typography, IconButton, Drawer, Badge, Stack, List, ListItem, ListItemText, useMediaQuery, useTheme, Avatar, Button 
} from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import { useThemeMode } from '../context/ThemeContext';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AccountMenuPopper } from './Navbar';
import BrandIcon from './BrandIcon';
import { CartContext } from '../context/CartContext';

const NEON_GOLD = '#FFD700';

const CommonNavbar = () => {
  const navigate = useNavigate();
  const { mode, toggleMode } = useThemeMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountAnchor, setAccountAnchor] = useState(null);
  const { scrollY } = useScroll();
  const navBlur = useTransform(scrollY, [0, 100], [0, 15]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const BORDER = theme.palette.mode === 'dark' ? '1px solid rgba(255, 215, 0, 0.2)' : '1px solid rgba(0, 0, 0, 0.16)';
  const NAV_BG = theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.85)';
  const DRAWER_BG = theme.palette.background.paper;

  const { user } = useContext(AuthContext);
  // cart context
  const { cart, cartOpen, setCartOpen, removeFromCart, updateQuantity, clearCart, total } = useContext(CartContext);
  const cartQty = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Shop', path: '/shop' },
    { label: 'Contact Us', path: '/contact' }
  ];

  return (
    <>
      {/* --- GLASS NAV --- */}
      <motion.div style={{ backdropFilter: `blur(${navBlur}px)`, position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
        <Stack 
          direction="row" 
          justifyContent="space-between" 
          alignItems="center" 
          sx={{ 
            height: { xs: '64px', md: '80px' },
            px: { xs: 2, md: 4 },
            bgcolor: NAV_BG,
            borderBottom: BORDER
          }}
        >
          {/* left group: menu + optional brand on mobile */}
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton 
              onClick={() => setMenuOpen(true)} 
              sx={{ color: theme.palette.text.primary, border: `1px solid ${theme.palette.divider}` }}
            >
              <MenuIcon />
            </IconButton>
            {isMobile && <BrandIcon onClick={() => navigate('/')} />}
          </Stack>

          {/* center brand for desktop */}
          {!isMobile && <BrandIcon onClick={() => navigate('/')} />}

          <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
            <IconButton 
              sx={{ color: NEON_GOLD, border: BORDER, bgcolor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.06)' }}
              onClick={() => setCartOpen(true)}
            >
              <Badge badgeContent={cartQty} color="error" sx={{ '& .MuiBadge-badge': { fontWeight: 900 } }}>
                <ShoppingBagOutlinedIcon />
              </Badge>
            </IconButton>

            <IconButton 
              onClick={(e) => setAccountAnchor(e.currentTarget)} 
              sx={{ color: theme.palette.text.primary, border: `1px solid ${theme.palette.divider}` }}
            >
              <PersonIcon />
            </IconButton>

            <AccountMenuPopper accountAnchor={accountAnchor} setAccountAnchor={setAccountAnchor} />
          </Stack>
        </Stack>
      </motion.div>

      {/* --- SIDE MENU DRAWER --- */}
      <Drawer
        anchor="left"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        PaperProps={{ sx: { width: 300, bgcolor: DRAWER_BG, borderRight: BORDER } }}
      >
        <Box sx={{ p: 4 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 900, color: theme.palette.text.primary }}>Hello {user ? user.name : 'MENU'}</Typography>
            <IconButton onClick={() => setMenuOpen(false)}><CloseIcon /></IconButton>
          </Stack>
          <List>
            {navLinks.map((item) => (
              <ListItem 
                button 
                key={item.label} 
                sx={{ py: 2 }}
                onClick={() => {
                  navigate(item.path);
                  setMenuOpen(false);
                }}
              >
                <ListItemText 
                  primary={item.label} 
                  primaryTypographyProps={{ fontWeight: 900, letterSpacing: 2, color: '#fff' }} 
                />
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
          sx: { width: { xs: '100vw', sm: 450 }, bgcolor: DRAWER_BG, borderLeft: { sm: BORDER }, backgroundImage: 'none' } 
        }}
      >
        <Box sx={{ p: { xs: 3, md: 4 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: { xs: 4, md: 6 } }}>
            <Typography variant="h5" sx={{ fontWeight: 900 }}>YOUR CART</Typography>
            <IconButton onClick={() => setCartOpen(false)} sx={{ color: theme.palette.text.primary, border: `1px solid ${theme.palette.divider}` }}><CloseIcon /></IconButton>
          </Stack>

          <Box sx={{ flex: 1, overflowY: 'auto' }}>
            <AnimatePresence mode="popLayout">
              {cart.length === 0 ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <Typography sx={{ textAlign: 'center', mt: 10, opacity: 0.3 }}>CART IS EMPTY</Typography>
                </motion.div>
              ) : (
                cart.map((item, i) => (
                  <motion.div 
                    key={item.cid} layout
                    initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }}
                    transition={{ type: 'spring', damping: 20, delay: i * 0.05 }}
                  >
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2, p: 1.5, borderRadius: '25px', bgcolor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <Avatar src={item.image} variant="rounded" sx={{ width: { xs: 50, md: 60 }, height: { xs: 50, md: 60 }, border: BORDER }} />
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 900, fontSize: { xs: '0.85rem', md: '0.9rem' }, lineHeight: 1.2 }}>{item.name}</Typography>
                        <Typography variant="h6" sx={{ color: NEON_GOLD, fontSize: { xs: '0.9rem', md: '1rem' }, mt: 0.5 }}>${item.price}</Typography>
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
                          <IconButton
                            size="small"
                            onClick={() => updateQuantity(item.cid, -1)}
                            sx={{ p: 0.5, border: '1px solid rgba(255,255,255,0.15)' }}
                          >
                            <RemoveIcon fontSize="small" />
                          </IconButton>
                          <Typography sx={{ minWidth: 20, textAlign: 'center', fontWeight: 900 }}>{item.quantity || 1}</Typography>
                          <IconButton
                            size="small"
                            onClick={() => updateQuantity(item.cid, 1)}
                            sx={{ p: 0.5, border: '1px solid rgba(255,255,255,0.15)' }}
                          >
                            <AddIcon fontSize="small" />
                          </IconButton>
                        </Stack>
                      </Box>
                      <IconButton onClick={() => removeFromCart(item.cid)} size="small">
                        <CloseIcon sx={{ color: 'rgba(255,255,255,0.3)' }} fontSize="small" />
                      </IconButton>
                    </Stack>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </Box>

          <Box sx={{ pt: 3, borderTop: '1px solid #222' }}>
            <Stack direction="row" justifyContent="space-between" sx={{ mb: 3 }}>
              <Typography sx={{ opacity: 0.5 }}>TOTAL_VALUE</Typography>
              <Typography variant="h5" sx={{ fontWeight: 900, color: NEON_GOLD, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                ${total}
              </Typography>
            </Stack>
            <Button 
              fullWidth variant="contained" 
              sx={{ py: { xs: 2, md: 2.5 }, bgcolor: NEON_GOLD, color: 'black', fontWeight: 900, borderRadius: '15px', '&:hover': { bgcolor: '#fff' } }}
              onClick={() => {
                setCartOpen(false);
                navigate('/checkout', { state: { cart } });
              }}
            >
              INITIALIZE CHECKOUT
            </Button>
            <Button
              fullWidth
              variant="text"
              sx={{ mt: 1, color: 'rgba(255,255,255,0.7)' }}
              onClick={() => clearCart()}
            >
              Clear cart
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default CommonNavbar;
