import React, { useMemo } from 'react';
import { Box, Typography, Container, Stack, Card } from '@mui/material';
import { motion } from 'framer-motion';

const NEON_GOLD = '#FFD700';
const BORDER = '1px solid rgba(255, 215, 0, 0.2)';
const GLASS = 'rgba(15, 15, 15, 0.7)';

const ProductRecommendations = () => {
  const recommendations = useMemo(() => [
    { id: 1, title: 'Trending Now', icon: '🔥', color: '#FF6B6B' },
    { id: 2, title: 'Best Sellers', icon: '⭐', color: '#4ECDC4' },
    { id: 3, title: 'New Arrivals', icon: '✨', color: '#95E1D3' },
    { id: 4, title: 'Limited Edition', icon: '💎', color: '#FFD700' },
    { id: 5, title: 'Flash Sale', icon: '⚡', color: '#FF8C42' },
    { id: 6, title: 'Premium Plus', icon: '👑', color: '#C0AFF0' }
  ], []);

  return (
    <Box sx={{ py: 10, bgcolor: 'transparent', color: '#fff' }}>
      <Container maxWidth="xl">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography sx={{ fontSize: '2rem', fontWeight: 900, mb: 6, textAlign: 'center', textTransform: 'uppercase', letterSpacing: 3 }}>
            CURATED <span style={{ color: NEON_GOLD, textShadow: `0 0 20px ${NEON_GOLD}66` }}>SELECTIONS</span>
          </Typography>
        </motion.div>

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
          {recommendations.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Card
                sx={{
                  width: { xs: '100%', md: 200 },
                  height: 150,
                  bgcolor: GLASS,
                  border: BORDER,
                  borderRadius: '20px',
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    borderColor: item.color,
                    transform: 'translateY(-10px)',
                    boxShadow: `0 15px 40px ${item.color}40`
                  }
                }}
              >
                <Typography sx={{ fontSize: '3rem', mb: 1 }}>{item.icon}</Typography>
                <Typography sx={{ fontWeight: 900, fontSize: '0.9rem', color: item.color, letterSpacing: 1 }}>
                  {item.title}
                </Typography>
              </Card>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default ProductRecommendations;
