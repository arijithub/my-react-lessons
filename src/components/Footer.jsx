import { Box, Container, Typography, Link, Stack } from '@mui/material';

const Footer = () => (
  <Box component="footer" sx={{ bgcolor: '#252525', color: 'white', py: 4 }}>
    <Container maxWidth="lg">
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="body2" sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          © {new Date().getFullYear()} Eflyer. Built with React & MUI.
        </Typography>
        <Stack direction="row" spacing={2} sx={{ justifyContent: { xs: 'center', sm: 'flex-end' } }}>
          <Link href="/privacy" color="inherit" underline="hover" variant="body2">
            Privacy
          </Link>
          <Link href="/terms" color="inherit" underline="hover" variant="body2">
            Terms
          </Link>
          <Link href="/contact" color="inherit" underline="hover" variant="body2">
            Contact
          </Link>
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default Footer;