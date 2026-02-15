import React, { useMemo } from 'react';
import { Box, Typography, Container, Card, Chip, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const NEON_GOLD = '#FFD700';
const BORDER = '1px solid rgba(255, 215, 0, 0.2)';
const GLASS = 'rgba(15, 15, 15, 0.7)';

const CategoriesShowcase = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const categories = useMemo(() => [
    { id: 1, name: 'Electronics', icon: '📱', products: '1,250+' },
    { id: 2, name: 'Fashion', icon: '👗', products: '3,890+' },
    { id: 3, name: 'Jewelry', icon: '💍', products: '890+' },
    { id: 4, name: 'Home & Garden', icon: '🏠', products: '2,140+' },
    { id: 5, name: 'Beauty & Cosmetics', icon: '💄', products: '1,560+' },
    { id: 6, name: 'Sports & Outdoors', icon: '⚽', products: '1,890+' },
    { id: 7, name: 'Books & Media', icon: '📚', products: '950+' },
    { id: 8, name: 'Toys & Games', icon: '🎮', products: '1,420+' }
  ], []);

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'transparent', color: '#fff', px: { xs: 2, md: 0 } }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography sx={{ fontSize: { xs: '1.3rem', md: '2rem' }, fontWeight: 900, mb: { xs: 4, md: 6 }, textAlign: 'center', textTransform: 'uppercase', letterSpacing: 2 }}>
            SHOP BY <span style={{ color: NEON_GOLD, textShadow: `0 0 20px ${NEON_GOLD}66` }}>CATEGORY</span>
          </Typography>
        </motion.div>

        {/* Mobile Slider View */}
        {isMobile && (
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            slidesPerView={1.5}
            spaceBetween={12}
            centeredSlides={true}
            loop={true}
            sx={{ w: '100%' }}
          >
            {categories.map((cat) => (
              <SwiperSlide key={cat.id} style={{ display: 'flex', justifyContent: 'center' }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card
                    sx={{
                      width: 160,
                      height: 160,
                      bgcolor: GLASS,
                      border: BORDER,
                      borderRadius: '20px',
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.4s ease',
                      '&:hover': {
                        borderColor: NEON_GOLD,
                        transform: 'scale(1.05)',
                        boxShadow: `0 15px 40px ${NEON_GOLD}30`
                      }
                    }}
                  >
                    <Typography sx={{ fontSize: '2rem', mb: 1 }}>{cat.icon}</Typography>
                    <Typography sx={{ fontWeight: 900, fontSize: '0.85rem', mb: 0.8 }}>
                      {cat.name}
                    </Typography>
                    <Chip
                      label={cat.products}
                      size="small"
                      sx={{
                        bgcolor: `${NEON_GOLD}20`,
                        color: NEON_GOLD,
                        fontWeight: 900,
                        fontSize: '0.6rem',
                        height: 20
                      }}
                    />
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Desktop Grid View */}
        {!isMobile && (
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: { xs: 1.5, md: 3 },
              justifyContent: 'center'
            }}
          >
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Card
                sx={{
                  width: { xs: '100%', md: 160 },
                  height: { xs: 160, md: 190 },
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
                  minWidth: { xs: '100px', md: 'auto' },
                  '&:hover': {
                    borderColor: NEON_GOLD,
                    transform: 'translateY(-8px)',
                    boxShadow: `0 20px 40px ${NEON_GOLD}30`
                  }
                }}
              >
                <Typography sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mb: 1 }}>{cat.icon}</Typography>
                <Typography sx={{ fontWeight: 900, fontSize: { xs: '0.85rem', md: '0.95rem' }, mb: 1 }}>
                  {cat.name}
                </Typography>
                <Chip
                  label={cat.products}
                  size="small"
                  sx={{
                    bgcolor: `${NEON_GOLD}20`,
                    color: NEON_GOLD,
                    fontWeight: 900,
                    fontSize: { xs: '0.65rem', md: '0.75rem' },
                    height: { xs: 20, md: 24 }
                  }}
                />
              </Card>
            </motion.div>
          ))}
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default CategoriesShowcase;
