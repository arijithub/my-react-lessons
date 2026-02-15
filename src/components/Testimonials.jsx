import React, { useMemo } from 'react';
import { Box, Typography, Container, Stack, Card, Avatar, Rating } from '@mui/material';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const NEON_GOLD = '#FFD700';
const BORDER = '1px solid rgba(255, 215, 0, 0.2)';
const GLASS = 'rgba(15, 15, 15, 0.7)';

const Testimonials = () => {
  const testimonials = useMemo(() => [
    {
      id: 1,
      name: 'Lisa Anderson',
      role: 'Small Business Owner',
      rating: 5,
      story:
        'I started my business reselling products from Eflyer. The quality and customer service are exceptional. I\'ve scaled my business 10x in just 6 months!',
      avatar: '👩‍💼',
      result: '+500% Revenue Growth'
    },
    {
      id: 2,
      name: 'James Wilson',
      role: 'Tech Enthusiast',
      rating: 5,
      story:
        'As a gadget lover, I\'m always looking for the latest tech. Eflyer never disappoints with their selection. The prices are unbeatable!',
      avatar: '👨‍💻',
      result: '100+ Products Purchased'
    },
    {
      id: 3,
      name: 'Maria Garcia',
      role: 'Fashion Designer',
      rating: 5,
      story:
        'I found premium fabrics and materials on Eflyer that helped elevate my designs. Their B2B program is a game-changer for my business.',
      avatar: '👩‍🎨',
      result: 'Wholesale Partner'
    }
  ], []);

  return (
    <Box sx={{ py: 10, bgcolor: 'transparent', color: '#fff' }}>
      <Container maxWidth="xl">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography sx={{ fontSize: '2rem', fontWeight: 900, mb: 2, textAlign: 'center', textTransform: 'uppercase', letterSpacing: 3 }}>
            SUCCESS <span style={{ color: NEON_GOLD, textShadow: `0 0 20px ${NEON_GOLD}66` }}>STORIES</span>
          </Typography>
          <Typography sx={{ fontSize: '1rem', opacity: 0.6, textAlign: 'center', mb: 8, letterSpacing: 1 }}>
            Real stories from our amazing customers
          </Typography>
        </motion.div>

        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          spacing={3}
          sx={{ justifyContent: 'center', alignItems: 'stretch' }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              style={{ flex: 1, minWidth: 0 }}
            >
              <Card
                sx={{
                  bgcolor: GLASS,
                  border: BORDER,
                  borderRadius: '25px',
                  p: 5,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  '&:hover': {
                    borderColor: NEON_GOLD,
                    transform: 'translateY(-10px)',
                    boxShadow: `0 25px 60px ${NEON_GOLD}30`
                  }
                }}
              >
                {/* Quote icon */}
                <FormatQuoteIcon
                  sx={{
                    fontSize: '2.5rem',
                    color: `${NEON_GOLD}40`,
                    mb: 2,
                    transform: 'scaleX(-1)'
                  }}
                />

                {/* Story text */}
                <Typography
                  sx={{
                    fontSize: '0.95rem',
                    opacity: 0.85,
                    lineHeight: 1.8,
                    mb: 4,
                    fontStyle: 'italic',
                    flex: 1
                  }}
                >
                  "{testimonial.story}"
                </Typography>

                {/* Result highlight */}
                <Box
                  sx={{
                    bgcolor: `${NEON_GOLD}15`,
                    border: `1px solid ${NEON_GOLD}40`,
                    borderRadius: '12px',
                    p: 2,
                    mb: 4,
                    textAlign: 'center'
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 900,
                      color: NEON_GOLD,
                      fontSize: '0.9rem',
                      letterSpacing: 1
                    }}
                  >
                    {testimonial.result}
                  </Typography>
                </Box>

                {/* Author info */}
                <Stack direction="row" spacing={2} sx={{ alignItems: 'flex-end' }}>
                  <Avatar sx={{ width: 50, height: 50, bgcolor: NEON_GOLD, color: 'black', fontSize: '1.5rem' }}>
                    {testimonial.avatar}
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ fontWeight: 900, fontSize: '0.95rem' }}>
                      {testimonial.name}
                    </Typography>
                    <Typography sx={{ fontSize: '0.8rem', opacity: 0.6, mb: 0.5 }}>
                      {testimonial.role}
                    </Typography>
                    <Rating
                      value={testimonial.rating}
                      readOnly
                      size="small"
                      sx={{ '& .MuiRating-iconFilled': { color: NEON_GOLD } }}
                    />
                  </Box>
                </Stack>
              </Card>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Testimonials;
