import React, { useMemo } from 'react';
import { Box, Typography, Container, Stack, Card, Rating, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

const NEON_GOLD = '#FFD700';
const BORDER = '1px solid rgba(255, 215, 0, 0.2)';
const GLASS = 'rgba(15, 15, 15, 0.7)';

const Reviews = () => {
  const reviews = useMemo(() => [
    { id: 1, name: 'Sarah Chen', rating: 5, text: 'Outstanding quality and fast delivery! Highly recommended.', avatar: '👩' },
    { id: 2, name: 'Marcus Johnson', rating: 5, text: 'Best shopping experience ever. Will buy again!', avatar: '👨' },
    { id: 3, name: 'Emma Rodriguez', rating: 4, text: 'Great products, excellent customer service.', avatar: '👩‍🦰' },
    { id: 4, name: 'Alex Kim', rating: 5, text: 'Exceeded my expectations. Premium packaging!', avatar: '👨‍🦱' },
    { id: 5, name: 'Jessica Lee', rating: 5, text: 'Amazing deals and fantastic quality. Love it!', avatar: '👩‍🦱' },
    { id: 6, name: 'David Brown', rating: 4.5, text: 'Professional service and authentic products guaranteed.', avatar: '👨‍🦲' }
  ], []);

  return (
    <Box sx={{ py: 10, bgcolor: 'transparent', color: '#fff' }}>
      <Container maxWidth="xl">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography sx={{ fontSize: '2rem', fontWeight: 900, mb: 6, textAlign: 'center', textTransform: 'uppercase', letterSpacing: 3 }}>
            CUSTOMER <span style={{ color: NEON_GOLD, textShadow: `0 0 20px ${NEON_GOLD}66` }}>REVIEWS</span>
          </Typography>
        </motion.div>

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Card
                sx={{
                  width: { xs: '100%', md: 280 },
                  bgcolor: GLASS,
                  border: BORDER,
                  borderRadius: '20px',
                  p: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    borderColor: NEON_GOLD,
                    boxShadow: `0 15px 40px ${NEON_GOLD}30`
                  }
                }}
              >
                <Stack direction="row" spacing={2} sx={{ mb: 3, alignItems: 'flex-start' }}>
                  <Avatar sx={{ width: 50, height: 50, bgcolor: NEON_GOLD, color: 'black', fontSize: '1.5rem' }}>
                    {review.avatar}
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ fontWeight: 900, fontSize: '0.95rem', mb: 0.5 }}>
                      {review.name}
                    </Typography>
                    <Rating value={review.rating} readOnly size="small" sx={{ '& .MuiRating-iconFilled': { color: NEON_GOLD } }} />
                  </Box>
                </Stack>
                <Typography sx={{ fontSize: '0.9rem', opacity: 0.8, lineHeight: 1.6, fontStyle: 'italic' }}>
                  "{review.text}"
                </Typography>
              </Card>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Reviews;
