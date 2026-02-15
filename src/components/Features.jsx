import React, { useMemo } from 'react';
import { Box, Typography, Container, Stack, Card } from '@mui/material';
import { motion } from 'framer-motion';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportIcon from '@mui/icons-material/Support';
import VerifiedIcon from '@mui/icons-material/Verified';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const NEON_GOLD = '#FFD700';
const BORDER = '1px solid rgba(255, 215, 0, 0.2)';
const GLASS = 'rgba(15, 15, 15, 0.7)';

const Features = () => {
  const features = useMemo(() => [
    {
      id: 1,
      title: 'Free Shipping',
      description: 'On orders over $50. Fast and reliable delivery.',
      icon: <LocalShippingIcon sx={{ fontSize: '2.5rem', color: '#4ECDC4' }} />,
      color: '#4ECDC4'
    },
    {
      id: 2,
      title: '24/7 Support',
      description: 'Our team is always here to help you anytime.',
      icon: <SupportIcon sx={{ fontSize: '2.5rem', color: '#95E1D3' }} />,
      color: '#95E1D3'
    },
    {
      id: 3,
      title: 'Secure Payment',
      description: '100% secure transactions with SSL encryption.',
      icon: <VerifiedIcon sx={{ fontSize: '2.5rem', color: '#FFD700' }} />,
      color: '#FFD700'
    },
    {
      id: 4,
      title: 'Easy Returns',
      description: '30-day money-back guarantee on all items.',
      icon: <AccessTimeIcon sx={{ fontSize: '2.5rem', color: '#FF6B6B' }} />,
      color: '#FF6B6B'
    }
  ], []);

  return (
    <Box sx={{ py: 10, bgcolor: 'transparent', color: '#fff' }}>
      <Container maxWidth="xl">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography sx={{ fontSize: '2rem', fontWeight: 900, mb: 8, textAlign: 'center', textTransform: 'uppercase', letterSpacing: 3 }}>
            WHY <span style={{ color: NEON_GOLD, textShadow: `0 0 20px ${NEON_GOLD}66` }}>CHOOSE US</span>
          </Typography>
        </motion.div>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          sx={{ justifyContent: 'center', flexWrap: 'wrap' }}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Card
                sx={{
                  width: { xs: '100%', md: 230 },
                  height: 220,
                  bgcolor: GLASS,
                  border: BORDER,
                  borderRadius: '20px',
                  p: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    borderColor: feature.color,
                    transform: 'translateY(-10px)',
                    boxShadow: `0 20px 50px ${feature.color}40`
                  }
                }}
              >
                {feature.icon}
                <Typography sx={{ fontWeight: 900, fontSize: '1.1rem', my: 2 }}>
                  {feature.title}
                </Typography>
                <Typography sx={{ fontSize: '0.9rem', opacity: 0.7, lineHeight: 1.5 }}>
                  {feature.description}
                </Typography>
              </Card>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Features;
