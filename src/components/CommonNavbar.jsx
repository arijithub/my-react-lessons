import React, { useState } from 'react';
import { 
  Box, Typography, IconButton, Drawer, Badge, Stack, List, ListItem, ListItemText, useMediaQuery, createTheme 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonIcon from '@mui/icons-material/Person';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AccountMenuPopper } from './Navbar';

const NEON_GOLD = '#FFD700';
const BORDER = '1px solid rgba(255, 215, 0, 0.2)';

const theme = createTheme({
  palette: { mode: 'dark', primary: { main: NEON_GOLD } },
  typography: { fontFamily: '"Syncopate", "Orbitron", sans-serif' }
});

const CommonNavbar = ({ cartCount = 0 }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountAnchor, setAccountAnchor] = useState(null);
  const { scrollY } = useScroll();
  const navBlur = useTransform(scrollY, [0, 100], [0, 15]);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
            p: { xs: 2, md: 4 },
            bgcolor: 'rgba(0, 0, 0, 0.8)',
            borderBottom: BORDER
          }}
        >
          <IconButton 
            onClick={() => setMenuOpen(true)} 
            sx={{ color: 'white', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography 
            variant="h6" 
            onClick={() => navigate('/')}
            sx={{ 
              fontWeight: 900, 
              letterSpacing: { xs: 2, md: 8 }, 
              ml: 2,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': { color: NEON_GOLD }
            }}
          >
            EFLYER
          </Typography>
          
          <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
            <IconButton 
              sx={{ color: NEON_GOLD, border: BORDER, bgcolor: 'rgba(0,0,0,0.3)' }}
              onClick={() => {/* Cart functionality */}}
            >
              <Badge badgeContent={cartCount} color="error" sx={{ '& .MuiBadge-badge': { fontWeight: 900 } }}>
                <ShoppingBagOutlinedIcon />
              </Badge>
            </IconButton>

            <IconButton 
              onClick={(e) => setAccountAnchor(e.currentTarget)} 
              sx={{ color: 'white', border: '1px solid rgba(255,255,255,0.08)' }}
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
        PaperProps={{ sx: { width: 300, bgcolor: '#080808', borderRight: BORDER } }}
      >
        <Box sx={{ p: 4 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 900 }}>NAVIGATION</Typography>
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
                  primaryTypographyProps={{ fontWeight: 900, letterSpacing: 2 }} 
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default CommonNavbar;
