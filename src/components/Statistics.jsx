import React, { useState, useMemo, useEffect } from 'react';
import { Box, Typography, Container, Stack, Card } from '@mui/material';
import { motion } from 'framer-motion';

const NEON_GOLD = '#FFD700';
const BORDER = '1px solid rgba(255, 215, 0, 0.2)';
const GLASS = 'rgba(15, 15, 15, 0.7)';

const StatCounter = ({ value, suffix, duration = 2.5 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <Typography sx={{ fontSize: '1.8rem', fontWeight: 900, color: NEON_GOLD }}>
      {count.toLocaleString()}{suffix}
    </Typography>
  );
};

const Statistics = () => {
  const stats = useMemo(() => [
    { id: 1, label: 'Happy Customers', value: 1000000, suffix: '+', icon: '😊' },
    { id: 2, label: 'Products Sold', value: 5000000, suffix: '+', icon: '📦' },
    { id: 3, label: 'Categories', value: 50, suffix: '+', icon: '🏷️' },
    { id: 4, label: 'Success Rate', value: 99, suffix: '%', icon: '✓' }
  ], []);

  return (
    <Box sx={{ py: 10, bgcolor: 'transparent', color: '#fff' }}>
      <Container maxWidth="xl">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography sx={{ fontSize: '2rem', fontWeight: 900, mb: 8, textAlign: 'center', textTransform: 'uppercase', letterSpacing: 3 }}>
            OUR <span style={{ color: NEON_GOLD, textShadow: `0 0 20px ${NEON_GOLD}66` }}>ACHIEVEMENTS</span>
          </Typography>
        </motion.div>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          sx={{ justifyContent: 'center', flexWrap: 'wrap' }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Card
                sx={{
                  width: { xs: '100%', md: 200 },
                  height: 180,
                  bgcolor: GLASS,
                  border: BORDER,
                  borderRadius: '20px',
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    borderColor: NEON_GOLD,
                    transform: 'translateY(-8px)',
                    boxShadow: `0 20px 50px ${NEON_GOLD}30`
                  }
                }}
              >
                <Typography sx={{ fontSize: '2.5rem', mb: 2 }}>{stat.icon}</Typography>
                <StatCounter value={stat.value} suffix={stat.suffix} />
                <Typography sx={{ fontSize: '0.9rem', opacity: 0.7, fontWeight: 600, mt: 1 }}>
                  {stat.label}
                </Typography>
              </Card>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Statistics;
