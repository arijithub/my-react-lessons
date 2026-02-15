import React, { useMemo } from 'react';
import { Box, Typography, Container, Stack, Card, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import VerifiedIcon from '@mui/icons-material/Verified';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ShieldIcon from '@mui/icons-material/Shield';

const NEON_GOLD = '#FFD700';
const BORDER = '1px solid rgba(255, 215, 0, 0.2)';
const GLASS = 'rgba(15, 15, 15, 0.7)';

const SocialProof = () => {
  const proofs = useMemo(() => [
    {
      id: 1,
      title: 'Certified Secure',
      description: 'PCI-DSS Level 1 Compliant',
      icon: <ShieldIcon sx={{ fontSize: '2rem', color: '#4ECDC4' }} />,
      color: '#4ECDC4'
    },
    {
      id: 2,
      title: 'Industry Award',
      description: 'Best E-commerce Platform 2025',
      icon: <EmojiEventsIcon sx={{ fontSize: '2rem', color: NEON_GOLD }} />,
      color: NEON_GOLD
    },
    {
      id: 3,
      title: 'Verified Seller',
      description: 'Trusted by 1M+ Customers',
      icon: <VerifiedIcon sx={{ fontSize: '2rem', color: '#95E1D3' }} />,
      color: '#95E1D3'
    },
    {
      id: 4,
      title: 'Premium Member',
      description: 'ISO 9001 Certified',
      icon: <WorkspacePremiumIcon sx={{ fontSize: '2rem', color: '#FFD700' }} />,
      color: '#FFD700'
    }
  ], []);

  return (
    <Box sx={{ py: 10, bgcolor: 'transparent', color: '#fff' }}>
      <Container maxWidth="xl">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography sx={{ fontSize: '2rem', fontWeight: 900, mb: 8, textAlign: 'center', textTransform: 'uppercase', letterSpacing: 3 }}>
            TRUSTED & <span style={{ color: NEON_GOLD, textShadow: `0 0 20px ${NEON_GOLD}66` }}>VERIFIED</span>
          </Typography>
        </motion.div>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          sx={{ justifyContent: 'center', flexWrap: 'wrap' }}
        >
          {proofs.map((proof, idx) => (
            <motion.div
              key={proof.id}
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
                    borderColor: proof.color,
                    transform: 'translateY(-8px)',
                    boxShadow: `0 20px 50px ${proof.color}40`
                  }
                }}
              >
                {proof.icon}
                <Typography sx={{ fontWeight: 900, fontSize: '1rem', my: 2 }}>
                  {proof.title}
                </Typography>
                <Chip
                  label={proof.description}
                  size="small"
                  sx={{
                    bgcolor: `${proof.color}20`,
                    color: proof.color,
                    fontWeight: 700,
                    fontSize: '0.7rem'
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default SocialProof;
