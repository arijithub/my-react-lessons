import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Container, TextField, Button, Stack, Card, Alert, Divider, Link as MuiLink } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const NEON_GOLD = '#FFD700';
const BORDER = '1px solid rgba(255, 215, 0, 0.2)';
const GLASS = 'rgba(15, 15, 15, 0.7)';

export default function Login() {
  const { login, getUsers } = useContext(AuthContext);
  const { push } = useNavigate();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const demoUsers = getUsers();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const u = login(email, password);
      setEmail(u.email);
      setPassword(u.password);
      setMessage('Success! Redirecting...');
      setTimeout(() => navigate('/'), 400);
    } catch (err) {
      setMessage('Invalid email or password. Try one of the demo users below.');
    }
  }

  return (
    <Box sx={{ bgcolor: '#000', color: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', py: { xs: 4, md: 0 }, px: { xs: 2, md: 0 } }}>
      <Container maxWidth="sm">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Card sx={{ bgcolor: GLASS, border: BORDER, borderRadius: '20px', p: { xs: 3, md: 5 } }}>
            {/* Header */}
            <Box sx={{ textAlign: 'center', mb: { xs: 3, md: 4 } }}>
              <Typography sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' }, fontWeight: 900, mb: 1, textTransform: 'uppercase', letterSpacing: 2 }}>
                <span style={{ color: NEON_GOLD, textShadow: `0 0 30px ${NEON_GOLD}66` }}>LOGIN</span>
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.9rem', md: '1rem' }, opacity: 0.7 }}>
                Welcome back to your account
              </Typography>
            </Box>

            {message && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Alert 
                  severity={message.startsWith('Success') ? 'success' : 'error'} 
                  sx={{ mb: 3, borderRadius: '12px', backgroundColor: message.startsWith('Success') ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)' }}
                >
                  {message}
                </Alert>
              </motion.div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <Stack spacing={{ xs: 2.5, md: 3 }}>
                {/* Email Field */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                  <TextField
                    fullWidth
                    type="email"
                    label="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="demo@example.com"
                    InputProps={{
                      startAdornment: <EmailIcon sx={{ mr: 1.5, color: NEON_GOLD, fontSize: { xs: '1.2rem', md: '1.5rem' } }} />,
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#fff',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        py: { xs: 1, md: 1.2 },
                        '& fieldset': { borderColor: `${NEON_GOLD}50` },
                        '&:hover fieldset': { borderColor: NEON_GOLD },
                        '&.Mui-focused fieldset': { borderColor: NEON_GOLD }
                      },
                      '& .MuiFormLabel-root': { color: `${NEON_GOLD}80`, fontSize: { xs: '0.9rem', md: '1rem' } }
                    }}
                  />
                </motion.div>

                {/* Password Field */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                  <TextField
                    fullWidth
                    type="password"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                    InputProps={{
                      startAdornment: <LockIcon sx={{ mr: 1.5, color: NEON_GOLD, fontSize: { xs: '1.2rem', md: '1.5rem' } }} />,
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#fff',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        py: { xs: 1, md: 1.2 },
                        '& fieldset': { borderColor: `${NEON_GOLD}50` },
                        '&:hover fieldset': { borderColor: NEON_GOLD },
                        '&.Mui-focused fieldset': { borderColor: NEON_GOLD }
                      },
                      '& .MuiFormLabel-root': { color: `${NEON_GOLD}80`, fontSize: { xs: '0.9rem', md: '1rem' } }
                    }}
                  />
                </motion.div>

                {/* Login Button */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    sx={{
                      bgcolor: NEON_GOLD,
                      color: 'black',
                      fontWeight: 900,
                      borderRadius: '12px',
                      py: { xs: 1.2, md: 1.5 },
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      '&:hover': { bgcolor: '#fff' }
                    }}
                  >
                    Login
                  </Button>
                </motion.div>
              </Stack>
            </form>

            <Divider sx={{ my: { xs: 2.5, md: 3 }, borderColor: `${NEON_GOLD}30` }} />

            {/* Demo Users */}
            <Box>
              <Typography sx={{ fontSize: { xs: '0.85rem', md: '0.95rem' }, fontWeight: 900, mb: 2, color: NEON_GOLD }}>
                📝 DEMO CREDENTIALS:
              </Typography>
              <Stack spacing={1.5}>
                {demoUsers.map((user, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: idx * 0.1 }}>
                    <Box sx={{ 
                      p: 1.5, 
                      bgcolor: 'rgba(0,0,0,0.3)', 
                      borderRadius: '8px', 
                      border: `1px solid ${NEON_GOLD}30`,
                      fontSize: { xs: '0.8rem', md: '0.9rem' }
                    }}>
                      <Typography sx={{ fontSize: { xs: '0.8rem', md: '0.85rem' }, mb: 0.5 }}>
                        <strong>Email:</strong> {user.email}
                      </Typography>
                      <Typography sx={{ fontSize: { xs: '0.8rem', md: '0.85rem' } }}>
                        <strong>Pass:</strong> {user.password}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Stack>
            </Box>

            {/* Footer */}
            <Box sx={{ textAlign: 'center', mt: { xs: 3, md: 4 } }}>
              <Typography sx={{ fontSize: { xs: '0.85rem', md: '0.95rem' }, opacity: 0.7 }}>
                Don't have an account?{' '}
                <MuiLink 
                  href="/signup" 
                  sx={{ color: NEON_GOLD, fontWeight: 900, cursor: 'pointer', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  Sign Up
                </MuiLink>
              </Typography>
            </Box>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
}
