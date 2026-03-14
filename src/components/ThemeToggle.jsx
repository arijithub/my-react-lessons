import React from 'react';
import { Fab, useTheme, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useThemeMode } from '../context/ThemeContext';

const MotionFab = motion(Fab);

const ThemeToggle = () => {
  const theme = useTheme();
  const { mode, toggleMode } = useThemeMode();

  return (
    <Tooltip title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}>
      <MotionFab
        color="primary"
        size="small"
        onClick={toggleMode}
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.95, rotate: -5 }}
        transition={{ type: 'spring', stiffness: 300, damping: 18 }}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1300,
          bgcolor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          boxShadow: theme.shadows[4],
        }}
      >
        {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
      </MotionFab>
    </Tooltip>
  );
};

export default ThemeToggle;
