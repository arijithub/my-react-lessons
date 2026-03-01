import React, { useState } from 'react';
import { Box, Typography, Container, Stack, Card, TextField, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';

const NEON_GOLD = '#FFD700';
const BORDER = '1px solid rgba(255, 215, 0, 0.2)';
const GLASS = 'rgba(15, 15, 15, 0.7)';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: '2rem', color: '#4ECDC4' }} />,
      title: 'Email',
      detail: 'support@eflyer.com',
      color: '#4ECDC4'
    },
    {
      icon: <PhoneIcon sx={{ fontSize: '2rem', color: '#95E1D3' }} />,
      title: 'Phone',
      detail: '+1 (800) 123-4567',
      color: '#95E1D3'
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: '2rem', color: NEON_GOLD }} />,
      title: 'Address',
      detail: '123 Commerce St, Silicon Valley, CA 94025',
      color: NEON_GOLD
    }
  ];

  return (
    <Box sx={{ bgcolor: '#000', color: '#fff', minHeight: '100vh' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 }, paddingTop: '80px', pb: { xs: 6, md: 10 } }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
            <Typography sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '3.5rem' }, fontWeight: 900, mb: 3, textTransform: 'uppercase', letterSpacing: 2 }}>
              GET IN <span style={{ color: NEON_GOLD, textShadow: `0 0 30px ${NEON_GOLD}66` }}>TOUCH</span>
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.9rem', md: '1.1rem' }, opacity: 0.7, maxWidth: 600, mx: 'auto' }}>
              Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={{ xs: 2, md: 4 }}>
          {/* Contact Info Cards */}
          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <Card
                    sx={{
                      bgcolor: GLASS,
                      border: BORDER,
                      borderRadius: '15px',
                      p: { xs: 1.5, md: 3 },
                      transition: 'all 0.4s ease',
                      '&:hover': {
                        borderColor: info.color,
                        boxShadow: `0 15px 40px ${info.color}40`,
                        transform: 'translateY(-5px)'
                      }
                    }}
                  >
                    <Stack direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                      <Box sx={{ pt: { xs: 0.5, md: 1 }, minWidth: '24px' }}>{info.icon}</Box>
                      <Box>
                        <Typography sx={{ fontWeight: 900, fontSize: { xs: '0.9rem', md: '1rem' }, mb: 1 }}>
                          {info.title}
                        </Typography>
                        <Typography sx={{ fontSize: { xs: '0.8rem', md: '0.9rem' }, opacity: 0.7 }}>
                          {info.detail}
                        </Typography>
                      </Box>
                    </Stack>
                  </Card>
                </motion.div>
              ))}
            </Stack>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Card sx={{ bgcolor: GLASS, border: BORDER, borderRadius: '15px', p: { xs: 2.5, md: 4 } }}>
                <form onSubmit={handleSubmit}>
                  <Stack spacing={{ xs: 2, md: 3 }}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#fff',
                          borderRadius: '12px',
                          backgroundColor: 'rgba(0,0,0,0.3)',
                          '& fieldset': { borderColor: `${NEON_GOLD}50` },
                          '&:hover fieldset': { borderColor: NEON_GOLD },
                          '&.Mui-focused fieldset': { borderColor: NEON_GOLD }
                        },
                        '& .MuiInputBase-input::placeholder': {
                          opacity: 0.5,
                          color: '#fff'
                        },
                        '& .MuiFormLabel-root': { color: `${NEON_GOLD}80` }
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Your Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#fff',
                          borderRadius: '12px',
                          backgroundColor: 'rgba(0,0,0,0.3)',
                          '& fieldset': { borderColor: `${NEON_GOLD}50` },
                          '&:hover fieldset': { borderColor: NEON_GOLD },
                          '&.Mui-focused fieldset': { borderColor: NEON_GOLD }
                        },
                        '& .MuiFormLabel-root': { color: `${NEON_GOLD}80` }
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#fff',
                          borderRadius: '12px',
                          backgroundColor: 'rgba(0,0,0,0.3)',
                          '& fieldset': { borderColor: `${NEON_GOLD}50` },
                          '&:hover fieldset': { borderColor: NEON_GOLD },
                          '&.Mui-focused fieldset': { borderColor: NEON_GOLD }
                        },
                        '& .MuiFormLabel-root': { color: `${NEON_GOLD}80` }
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      multiline
                      rows={5}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#fff',
                          borderRadius: '12px',
                          backgroundColor: 'rgba(0,0,0,0.3)',
                          '& fieldset': { borderColor: `${NEON_GOLD}50` },
                          '&:hover fieldset': { borderColor: NEON_GOLD },
                          '&.Mui-focused fieldset': { borderColor: NEON_GOLD }
                        },
                        '& .MuiFormLabel-root': { color: `${NEON_GOLD}80` }
                      }}
                    />
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        fullWidth
                        variant="contained"
                        type="submit"
                        endIcon={<SendIcon />}
                        sx={{
                          bgcolor: NEON_GOLD,
                          color: 'black',
                          fontWeight: 900,
                          borderRadius: '12px',
                          py: 1.5,
                          textTransform: 'uppercase',
                          letterSpacing: 1,
                          fontSize: '0.95rem',
                          '&:hover': { bgcolor: '#fff' }
                        }}
                      >
                        Send Message
                      </Button>
                    </motion.div>
                    {submitted && (
                      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                        <Box sx={{ bgcolor: `${NEON_GOLD}20`, border: `1px solid ${NEON_GOLD}`, borderRadius: '12px', p: 2, textAlign: 'center' }}>
                          <Typography sx={{ color: NEON_GOLD, fontWeight: 900 }}>
                            ✓ Message sent successfully! We'll get back to you soon.
                          </Typography>
                        </Box>
                      </motion.div>
                    )}
                  </Stack>
                </form>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        {/* FAQ */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Box sx={{ mt: 15, p: 4, bgcolor: GLASS, border: BORDER, borderRadius: '20px', textAlign: 'center' }}>
            <Typography sx={{ fontSize: '1.5rem', fontWeight: 900, mb: 3, color: NEON_GOLD }}>
              Frequently Asked Questions
            </Typography>
            <Stack spacing={2} sx={{ textAlign: 'left' }}>
              <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, opacity: 0.8 }}>
                <strong style={{ color: NEON_GOLD }}>Hours of Operation:</strong> Monday to Friday, 9 AM - 6 PM PST
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, opacity: 0.8 }}>
                <strong style={{ color: NEON_GOLD }}>Response Time:</strong> Usually within 24 hours
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, opacity: 0.8 }}>
                <strong style={{ color: NEON_GOLD }}>Live Chat:</strong> Available on our website for instant support
              </Typography>
            </Stack>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
