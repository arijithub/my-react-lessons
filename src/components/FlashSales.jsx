import React, { useState, useEffect, useMemo } from 'react';
import { Box, Typography, Container, Stack, Card, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

const NEON_GOLD = '#FFD700';
const BORDER = '1px solid rgba(255, 215, 0, 0.2)';
const GLASS = 'rgba(15, 15, 15, 0.7)';

const CountdownTimer = ({ endTime }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;
      
      if (distance > 0) {
        setTimeLeft({
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <Stack direction="row" spacing={1} sx={{ justifyContent: 'center' }}>
      {Object.entries(timeLeft).map(([unit, value]) => (
        <Box
          key={unit}
          sx={{
            bgcolor: `${NEON_GOLD}20`,
            border: `1px solid ${NEON_GOLD}`,
            borderRadius: '8px',
            p: 1,
            minWidth: 45,
            textAlign: 'center'
          }}
        >
          <Typography sx={{ fontWeight: 900, fontSize: '0.85rem', color: NEON_GOLD }}>
            {String(value).padStart(2, '0')}
          </Typography>
          <Typography sx={{ fontSize: '0.65rem', opacity: 0.6, textTransform: 'uppercase' }}>
            {unit[0]}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};

const FlashSales = () => {
  const sales = useMemo(() => [
    { id: 1, product: 'Cyber Mobile', discount: '-50%', price: '$650', image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300', endTime: new Date().getTime() + 3600000 },
    { id: 2, product: 'Gaming Laptop', discount: '-35%', price: '$1625', image: 'https://images.unsplash.com/photo-1517694712202-14dd3fa2e923?w=300', endTime: new Date().getTime() + 7200000 },
    { id: 3, product: 'Smart Watch', discount: '-40%', price: '$120', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300', endTime: new Date().getTime() + 5400000 },
    { id: 4, product: 'Premium Earbuds', discount: '-45%', price: '$110', image: 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=300', endTime: new Date().getTime() + 4800000 },
    { id: 5, product: 'Wireless Speaker', discount: '-55%', price: '$89', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300', endTime: new Date().getTime() + 5000000 },
    { id: 6, product: 'USB-C Hub', discount: '-60%', price: '$39', image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=300', endTime: new Date().getTime() + 4200000 }
  ], []);

  return (
    <Box sx={{ py: 10, bgcolor: 'transparent', color: '#fff' }}>
      <Container maxWidth="xl">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 6, alignItems: 'center', justifyContent: 'center' }}>
            <LocalFireDepartmentIcon sx={{ fontSize: '2.5rem', color: '#FF6B6B' }} />
            <Typography sx={{ fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: 3 }}>
              FLASH <span style={{ color: '#FF6B6B' }}>SALES</span>
            </Typography>
          </Stack>
        </motion.div>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={3}
          sx={{ justifyContent: 'center', flexWrap: 'wrap' }}
        >
          {sales.map((sale, idx) => (
            <motion.div
              key={sale.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Card
                sx={{
                  width: { xs: '100%', md: 240 },
                  bgcolor: GLASS,
                  border: BORDER,
                  borderRadius: '20px',
                  p: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    borderColor: '#FF6B6B',
                    boxShadow: `0 20px 50px #FF6B6B40`
                  }
                }}
              >
                <Chip
                  label={sale.discount}
                  sx={{
                    bgcolor: '#FF6B6B',
                    color: '#fff',
                    fontWeight: 900,
                    fontSize: '0.85rem',
                    mb: 2,
                    position: 'absolute',
                    top: -12
                  }}
                />
                <Typography sx={{ fontWeight: 900, fontSize: '1.1rem', mb: 2, mt: 1 }}>
                  {sale.product}
                </Typography>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 900, color: '#FF6B6B', mb: 3 }}>
                  {sale.price}
                </Typography>
                <CountdownTimer endTime={sale.endTime} />
              </Card>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default FlashSales;
