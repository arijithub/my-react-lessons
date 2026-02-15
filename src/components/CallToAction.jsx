import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Container, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const NEON_GOLD = '#FFD700';
const BORDER = '1px solid rgba(255, 215, 0, 0.2)';
const GLASS = 'rgba(15, 15, 15, 0.7)';

const CallToAction = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ py: 10, bgcolor: 'transparent', color: '#fff' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              bgImage: 'linear-gradient(135deg, rgba(255,215,0,0.1) 0%, rgba(255,215,0,0.05) 100%)',
              bgcolor: GLASS,
              border: BORDER,
              borderRadius: '30px',
              p: { xs: 6, md: 10 },
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              '&:hover': {
                borderColor: NEON_GOLD,
                boxShadow: `0 30px 60px ${NEON_GOLD}30`
              },
              transition: 'all 0.4s ease'
            }}
          >
            {/* Background accent */}
            <Box
              sx={{
                position: 'absolute',
                top: -50,
                right: -50,
                width: 200,
                height: 200,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${NEON_GOLD}20 0%, transparent 70%)`,
                pointerEvents: 'none'
              }}
            />

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '1.8rem', md: '2.5rem' },
                  fontWeight: 900,
                  mb: 3,
                  textTransform: 'uppercase',
                  letterSpacing: 3,
                  position: 'relative',
                  zIndex: 1
                }}
              >
                DON'T MISS OUT <br />
                <span style={{ color: NEON_GOLD, textShadow: `0 0 30px ${NEON_GOLD}66` }}>
                  SPECIAL OFFER
                </span>
              </Typography>

              <Typography
                sx={{
                  fontSize: '1.1rem',
                  opacity: 0.8,
                  mb: 6,
                  maxWidth: 500,
                  mx: 'auto',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                Get 20% off on your next purchase. Limited time offer for new members!
              </Typography>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 1 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => navigate('/shop')}
                    sx={{
                      bgcolor: NEON_GOLD,
                      color: 'black',
                      fontWeight: 900,
                      borderRadius: '12px',
                      px: 4,
                      py: 1.5,
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      '&:hover': { bgcolor: '#fff', transform: 'scale(1.05)' }
                    }}
                  >
                    Shop Now
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outlined"
                    onClick={() => navigate('/about')}
                    sx={{
                      borderColor: NEON_GOLD,
                      color: NEON_GOLD,
                      fontWeight: 900,
                      borderRadius: '12px',
                      px: 4,
                      py: 1.5,
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      '&:hover': {
                        borderColor: '#fff',
                        color: '#fff',
                        bgcolor: 'rgba(255,215,0,0.1)'
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </motion.div>
              </Stack>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CallToAction;
