import React, { useMemo } from 'react';
import { Box, Typography, Container, Stack, Card } from '@mui/material';
import { motion } from 'framer-motion';

const NEON_GOLD = '#FFD700';
const BORDER = '1px solid rgba(255, 215, 0, 0.2)';
const GLASS = 'rgba(15, 15, 15, 0.7)';

const BrandPartners = () => {
  const brands = useMemo(() => [
    { id: 1, name: 'Sony', logo: '🔴' },
    { id: 2, name: 'Apple', logo: '🍎' },
    { id: 3, name: 'Samsung', logo: '📦' },
    { id: 4, name: 'Nike', logo: '✓' },
    { id: 5, name: 'Adidas', logo: '▲' },
    { id: 6, name: 'LG', logo: '◻️' },
    { id: 7, name: 'Canon', logo: '📷' },
    { id: 8, name: 'Nikon', logo: '📸' }
  ], []);

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'transparent', color: '#fff', px: { xs: 2, md: 0 } }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography sx={{ fontSize: { xs: '1.3rem', md: '2rem' }, fontWeight: 900, mb: { xs: 4, md: 6 }, textAlign: 'center', textTransform: 'uppercase', letterSpacing: 2 }}>
            TRUSTED <span style={{ color: NEON_GOLD, textShadow: `0 0 20px ${NEON_GOLD}66` }}>PARTNERS</span>
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: { xs: 1.5, md: 3 },
            justifyContent: 'center'
          }}
        >
          {brands.map((brand, idx) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              whileHover={{ y: -5 }}
            >
              <Card
                sx={{
                  width: { xs: 100, md: 130 },
                  height: { xs: 100, md: 130 },
                  bgcolor: GLASS,
                  border: BORDER,
                  borderRadius: '15px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    borderColor: NEON_GOLD,
                    boxShadow: `0 15px 40px ${NEON_GOLD}30`,
                    transform: 'scale(1.08)'
                  }
                }}
              >
                <Typography sx={{ fontSize: { xs: '1.6rem', md: '2.2rem' }, mb: 0.5 }}>{brand.logo}</Typography>
                <Typography sx={{ fontWeight: 900, fontSize: { xs: '0.7rem', md: '0.85rem' }, letterSpacing: 0.5, textAlign: 'center', lineHeight: 1.1 }}>
                  {brand.name}
                </Typography>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default BrandPartners;
