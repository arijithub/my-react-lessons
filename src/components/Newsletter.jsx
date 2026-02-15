import React, { useState } from 'react';
import { Box, Typography, Container, TextField, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';

const NEON_GOLD = '#FFD700';
const BORDER = '1px solid rgba(255, 215, 0, 0.2)';
const GLASS = 'rgba(15, 15, 15, 0.7)';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <Box
      sx={{
        py: 10,
        bgcolor: 'transparent',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              bgcolor: GLASS,
              border: BORDER,
              borderRadius: '30px',
              p: { xs: 4, md: 8 },
              textAlign: 'center',
              backdropFilter: 'blur(20px)',
              '&:hover': { borderColor: NEON_GOLD, boxShadow: `0 20px 60px ${NEON_GOLD}20` }
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '1.5rem', md: '2.5rem' },
                fontWeight: 900,
                mb: 2,
                textTransform: 'uppercase',
                letterSpacing: 3
              }}
            >
              EXCLUSIVE <span style={{ color: NEON_GOLD, textShadow: `0 0 20px ${NEON_GOLD}66` }}>OFFERS</span>
            </Typography>

            <Typography sx={{ fontSize: '1rem', opacity: 0.7, mb: 6, letterSpacing: 1 }}>
              Subscribe to get early access to new products and special deals
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: 500,
                mx: 'auto'
              }}
            >
              <TextField
                fullWidth
                size="small"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: '#fff',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${NEON_GOLD}50`,
                    '& fieldset': { borderColor: 'transparent' },
                    '&:hover fieldset': { borderColor: NEON_GOLD },
                    '&.Mui-focused fieldset': { borderColor: NEON_GOLD }
                  },
                  '& .MuiOutlinedInput-input::placeholder': {
                    opacity: 0.5,
                    color: '#fff'
                  }
                }}
              />

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  onClick={handleSubscribe}
                  endIcon={<SendIcon />}
                  sx={{
                    bgcolor: NEON_GOLD,
                    color: 'black',
                    fontWeight: 900,
                    borderRadius: '12px',
                    px: 3,
                    height: '40px',
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    '&:hover': { bgcolor: '#fff', transform: 'scale(1.05)' }
                  }}
                >
                  Subscribe
                </Button>
              </motion.div>
            </Stack>

            {subscribed && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                <Typography sx={{ mt: 3, color: NEON_GOLD, fontWeight: 900, fontSize: '0.95rem' }}>
                  ✓ Successfully subscribed! Check your email for exclusive offers.
                </Typography>
              </motion.div>
            )}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Newsletter;
