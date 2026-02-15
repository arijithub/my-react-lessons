import React, { useMemo } from 'react';
import { Box, Typography, Container, Stack, Card, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const NEON_GOLD = '#FFD700';
const BORDER = '1px solid rgba(255, 215, 0, 0.2)';
const GLASS = 'rgba(15, 15, 15, 0.7)';

const VideoSection = () => {
  const videos = useMemo(() => [
    {
      id: 1,
      title: 'How to Shop',
      description: 'Complete guide to shopping on Eflyer',
      thumbnail: '🎬',
      color: '#4ECDC4'
    },
    {
      id: 2,
      title: 'Product Demo',
      description: 'See our latest product in action',
      thumbnail: '📺',
      color: '#95E1D3'
    },
    {
      id: 3,
      title: 'Unboxing Video',
      description: 'Experience premium packaging',
      thumbnail: '📦',
      color: NEON_GOLD
    },
    {
      id: 4,
      title: 'Customer Reviews',
      description: 'Real feedback from happy customers',
      thumbnail: '⭐',
      color: '#FF6B6B'
    }
  ], []);

  return (
    <Box sx={{ py: 10, bgcolor: 'transparent', color: '#fff' }}>
      <Container maxWidth="xl">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography sx={{ fontSize: '2rem', fontWeight: 900, mb: 8, textAlign: 'center', textTransform: 'uppercase', letterSpacing: 3 }}>
            WATCH & <span style={{ color: NEON_GOLD, textShadow: `0 0 20px ${NEON_GOLD}66` }}>LEARN</span>
          </Typography>
        </motion.div>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={3}
          sx={{ justifyContent: 'center', flexWrap: 'wrap' }}
        >
          {videos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Card
                sx={{
                  width: { xs: '100%', md: 280 },
                  height: 280,
                  bgcolor: GLASS,
                  border: BORDER,
                  borderRadius: '25px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    borderColor: video.color,
                    transform: 'translateY(-10px)',
                    boxShadow: `0 25px 50px ${video.color}40`
                  }
                }}
              >
                {/* Gradient overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(135deg, ${video.color}20 0%, transparent 100%)`,
                    pointerEvents: 'none'
                  }}
                />

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.3 }}
                  style={{ position: 'relative', zIndex: 2 }}
                >
                  <Typography sx={{ fontSize: '3rem', mb: 2 }}>{video.thumbnail}</Typography>
                </motion.div>

                <Typography sx={{ fontWeight: 900, fontSize: '1.1rem', mb: 2, textAlign: 'center', position: 'relative', zIndex: 2 }}>
                  {video.title}
                </Typography>

                <Typography sx={{ fontSize: '0.9rem', opacity: 0.7, textAlign: 'center', px: 2, mb: 3, position: 'relative', zIndex: 2 }}>
                  {video.description}
                </Typography>

                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconButton
                    sx={{
                      bgcolor: video.color,
                      color: 'black',
                      width: 60,
                      height: 60,
                      '&:hover': { bgcolor: video.color, transform: 'scale(1.1)' },
                      position: 'relative',
                      zIndex: 2
                    }}
                  >
                    <PlayCircleOutlineIcon sx={{ fontSize: '1.8rem' }} />
                  </IconButton>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default VideoSection;
