import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Container, Stack, Card, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CommonNavbar from '../components/CommonNavbar';

const NEON_GOLD = '#FFD700';
const BORDER = '1px solid rgba(255, 215, 0, 0.2)';
const GLASS = 'rgba(15, 15, 15, 0.7)';

const Shop = () => {
  const navigate = useNavigate();
  const categories = useMemo(() => [
    { id: 1, name: 'Electronics', icon: '📱', description: 'Latest gadgets and tech', color: '#4ECDC4' },
    { id: 2, name: 'Fashion', icon: '👗', description: 'Trendy apparel and styles', color: '#95E1D3' },
    { id: 3, name: 'Jewelry', icon: '💍', description: 'Elegant accessories', color: NEON_GOLD },
    { id: 4, name: 'Home & Garden', icon: '🏠', description: 'Home essentials', color: '#FF6B6B' },
    { id: 5, name: 'Beauty & Cosmetics', icon: '💄', description: 'Beauty and wellness', color: '#FFB6C1' },
    { id: 6, name: 'Sports & Outdoors', icon: '⚽', description: 'Sports equipment', color: '#87CEEB' },
    { id: 7, name: 'Books & Media', icon: '📚', description: 'Educational content', color: '#DDA15E' },
    { id: 8, name: 'Toys & Games', icon: '🎮', description: 'Fun for all ages', color: '#BC6C25' }
  ], []);

  const deals = useMemo(() => [
    { title: 'Mega Sale', discount: '50% OFF', color: '#FF6B6B' },
    { title: 'Free Shipping', discount: 'On orders $50+', color: '#4ECDC4' },
    { title: 'New Arrivals', discount: 'Fresh stock daily', color: NEON_GOLD }
  ], []);

  return (
    <Box sx={{ bgcolor: '#000', color: '#fff', minHeight: '100vh', pt: { xs: 12, md: 15 }, pb: { xs: 6, md: 10 }, px: { xs: 1.5, md: 0 } }}>
      <CommonNavbar />
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
            <Typography sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '3.5rem' }, fontWeight: 900, mb: 3, textTransform: 'uppercase', letterSpacing: 2 }}>
              START <span style={{ color: NEON_GOLD, textShadow: `0 0 30px ${NEON_GOLD}66` }}>SHOPPING</span>
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.9rem', md: '1.1rem' }, opacity: 0.7, maxWidth: 600, mx: 'auto' }}>
              Browse our extensive collection of premium products across all categories.
            </Typography>
          </Box>
        </motion.div>

        {/* Deals Banner */}
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 3 }} sx={{ mb: { xs: 8, md: 12 } }}>
          {deals.map((deal, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              style={{ flex: 1 }}
            >
              <Card
                sx={{
                  bgcolor: GLASS,
                  border: `1px solid ${deal.color}50`,
                  borderRadius: '15px',
                  p: { xs: 2.5, md: 4 },
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  minHeight: { xs: 120, md: 'auto' },
                  '&:hover': {
                    borderColor: deal.color,
                    transform: { xs: 'scale(1.02)', md: 'scale(1.05)' },
                    boxShadow: `0 15px 40px ${deal.color}40`
                  }
                }}
              >
                <Typography sx={{ fontWeight: 900, fontSize: { xs: '1rem', md: '1.2rem' }, mb: 2 }}>
                  {deal.title}
                </Typography>
                <Typography sx={{ fontSize: { xs: '1.4rem', md: '1.8rem' }, fontWeight: 900, color: deal.color }}>
                  {deal.discount}
                </Typography>
              </Card>
            </motion.div>
          ))}
        </Stack>

        {/* Categories */}
        <Typography sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 900, mb: { xs: 4, md: 6 }, textTransform: 'uppercase', textAlign: 'center', letterSpacing: 2 }}>
          SHOP BY <span style={{ color: NEON_GOLD }}>CATEGORY</span>
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 2, md: 3 }, justifyContent: 'center', mb: { xs: 6, md: 10 } }}>
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              style={{ flex: { xs: '1 1 calc(50% - 8px)', md: '1 1 auto' } }}
            >
              <Card
                sx={{
                  width: { xs: '100%', md: 180 },
                  height: { xs: 180, md: 240 },
                  bgcolor: GLASS,
                  border: BORDER,
                  borderRadius: '20px',
                  p: { xs: 1.5, md: 2.5 },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    borderColor: cat.color,
                    transform: 'translateY(-8px)',
                    boxShadow: `0 20px 40px ${cat.color}40`
                  }
                }}
              >
                <Typography sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 1 }}>{cat.icon}</Typography>
                <Typography sx={{ fontWeight: 900, fontSize: { xs: '0.85rem', md: '1rem' }, mb: 0.5 }}>
                  {cat.name}
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.65rem', md: '0.75rem' }, opacity: 0.5, mb: 1.5, lineHeight: 1.2 }}>
                  {cat.description}
                </Typography>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button
                    startIcon={<ShoppingBagIcon />}
                    onClick={() => navigate('/products', { state: { category: cat.name.toLowerCase() } })}
                    sx={{
                      bgcolor: cat.color,
                      color: 'black',
                      fontWeight: 900,
                      borderRadius: '8px',
                      px: { xs: 1, md: 1.5 },
                      py: { xs: 0.5, md: 0.7 },
                      textTransform: 'uppercase',
                      fontSize: { xs: '0.55rem', md: '0.65rem' },
                      cursor: 'pointer',
                      '&:hover': { bgcolor: cat.color, opacity: 0.9 }
                    }}
                  >
                    Browse
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </Box>

        {/* CTA */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Box
            sx={{
              bgcolor: GLASS,
              border: BORDER,
              borderRadius: '20px',
              p: { xs: 4, md: 8 },
              textAlign: 'center',
              '&:hover': { borderColor: NEON_GOLD, boxShadow: `0 20px 60px ${NEON_GOLD}20` }
            }}
          >
            <Typography sx={{ fontSize: { xs: '1.3rem', md: '1.8rem' }, fontWeight: 900, mb: 3 }}>
              Exclusive Member Rewards
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.9rem', md: '1rem' }, opacity: 0.7, mb: 4 }}>
              Join our loyalty program and earn points on every purchase. Redeem for exclusive rewards and discounts!
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate('/signup')}
              sx={{
                bgcolor: NEON_GOLD,
                color: 'black',
                fontWeight: 900,
                borderRadius: '12px',
                px: { xs: 2.5, md: 4 },
                py: { xs: 1, md: 1.5 },
                textTransform: 'uppercase',
                letterSpacing: 1,
                cursor: 'pointer',
                fontSize: { xs: '0.8rem', md: '1rem' },
                '&:hover': { bgcolor: '#fff' }
              }}
            >
              Learn More
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Shop;
