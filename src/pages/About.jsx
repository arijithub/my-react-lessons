import React from 'react';
import { Box, Typography, Container, Stack, Card } from '@mui/material';
import { motion } from 'framer-motion';

const NEON_GOLD = '#FFD700';
const BORDER = '1px solid rgba(255, 215, 0, 0.2)';
const GLASS = 'rgba(15, 15, 15, 0.7)';

const About = () => {
  const values = [
    { title: 'Quality', description: 'Premium products sourced from trusted suppliers' },
    { title: 'Innovation', description: 'Cutting-edge technology and latest trends' },
    { title: 'Customer Care', description: '24/7 support and satisfaction guaranteed' },
    { title: 'Integrity', description: 'Transparent pricing and ethical practices' }
  ];

  return (
    <Box sx={{ bgcolor: '#000', color: '#fff', minHeight: '100vh', pt: { xs: 12, md: 15 }, pb: { xs: 6, md: 10 }, px: { xs: 1.5, md: 0 } }}>
    
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
        {/* Hero Section */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
            <Typography sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '3.5rem' }, fontWeight: 900, mb: 3, textTransform: 'uppercase', letterSpacing: 2 }}>
              ABOUT <span style={{ color: NEON_GOLD, textShadow: `0 0 30px ${NEON_GOLD}66` }}>EFLYER</span>
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.9rem', md: '1.1rem' }, opacity: 0.7, maxWidth: 600, mx: 'auto', lineHeight: 1.8 }}>
              We are revolutionizing the way people shop online with premium products, exceptional service, and cutting-edge technology.
            </Typography>
          </Box>
        </motion.div>

        {/* Story Section */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Box sx={{ mb: 10, p: 4, bgcolor: GLASS, border: BORDER, borderRadius: '20px' }}>
            <Typography sx={{ fontSize: '1.5rem', fontWeight: 900, mb: 3, color: NEON_GOLD }}>Our Story</Typography>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.8, opacity: 0.8 }}>
              Founded in 2024, Eflyer started with a simple mission: to make premium shopping accessible to everyone. 
              What began as a small venture has grown into a trusted platform serving millions of customers worldwide. 
              We believe in combining innovation, quality, and customer satisfaction to create exceptional shopping experiences.
            </Typography>
          </Box>
        </motion.div>

        {/* Values Section */}
        <Box sx={{ mb: { xs: 6, md: 10 } }}>
          <Typography sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 900, mb: { xs: 4, md: 6 }, textAlign: 'center', textTransform: 'uppercase', letterSpacing: 2 }}>
            OUR <span style={{ color: NEON_GOLD }}>VALUES</span>
          </Typography>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 3 }} sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card
                  sx={{
                    width: { xs: '100%', sm: 'calc(50% - 8px)', md: 250 },
                    bgcolor: GLASS,
                    border: BORDER,
                    borderRadius: '15px',
                    p: { xs: 2.5, md: 4 },
                    textAlign: 'center',
                    minHeight: { xs: 150, md: 'auto' },
                    transition: 'all 0.4s ease',
                    '&:hover': { borderColor: NEON_GOLD, transform: 'translateY(-8px)', boxShadow: `0 15px 40px ${NEON_GOLD}30` }
                  }}
                >
                  <Typography sx={{ fontWeight: 900, fontSize: { xs: '1rem', md: '1.2rem' }, mb: 2, color: NEON_GOLD }}>
                    {value.title}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '0.85rem', md: '0.95rem' }, opacity: 0.7, lineHeight: 1.6 }}>
                    {value.description}
                  </Typography>
                </Card>
              </motion.div>
            ))}
          </Stack>
        </Box>

        {/* Team Section */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Box sx={{ p: 4, bgcolor: GLASS, border: BORDER, borderRadius: '20px', textAlign: 'center' }}>
            <Typography sx={{ fontSize: '1.5rem', fontWeight: 900, mb: 3, color: NEON_GOLD }}>Dedicated Team</Typography>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.8, opacity: 0.8 }}>
              Our team comprises industry experts, innovators, and passionate individuals committed to delivering excellence. 
              We work tirelessly to ensure every customer receives the best experience possible.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
