import React from 'react';
import { IconButton, Tooltip, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NEON_GOLD = '#FFD700';

export default function BrandIcon({ size = 20, onClick, tooltip = 'Ecommerce' }) {
  const navigate = useNavigate();
  const handleClick = onClick || (() => navigate('/'));
  const container = size + 24; // make outer circle noticeably larger
  const radius = container / 2 - 3.5; // subtract half dot (3) and half border (0.5) for true edge contact

  return (
    <Tooltip title={tooltip} arrow>
      <IconButton
        onClick={handleClick}
        aria-label="brand"
        sx={{
          width: container,
          height: container,
          p: 0,
          position: 'relative',
          borderRadius: '50%',
          border: '1px solid rgba(255,215,0,0.35)',
          bgcolor: 'rgba(255,215,0,0.03)',
          boxShadow: `0 0 28px ${NEON_GOLD}55, 0 0 56px ${NEON_GOLD}25`,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'box-shadow 200ms ease',
          '&:hover': { boxShadow: `0 0 40px ${NEON_GOLD}88, 0 0 80px ${NEON_GOLD}40` }
        }}
      >
        {/* orbiting dot wrapper */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            transformOrigin: 'center center',
            animation: 'orbit 4s linear infinite',
            '@keyframes orbit': {
              '0%': { transform: 'rotate(0deg)' },
              '100%': { transform: 'rotate(360deg)' }
            }
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: 6,
              height: 6,
              bgcolor: NEON_GOLD,
              borderRadius: '50%',
              transform: `translate(${radius}px, -50%)`
            }}
          />
        </Box>
        <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="false">
          <g fill="none" fillRule="evenodd">
            <rect x="2" y="5" width="20" height="14" rx="3" fill={NEON_GOLD} />
            <path d="M7 6V5a5 5 0 0110 0v1" stroke={NEON_GOLD} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 9c1.4 0 2.8 1 3 2.4.2 1.6-2 3.6-3 3.6s-3.2-2-3-3.6C9.2 10 10.6 9 12 9z" fill={NEON_GOLD} />
          </g>
        </svg>
      </IconButton>
    </Tooltip>
  );
}
