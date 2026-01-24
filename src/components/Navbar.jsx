import React, { useState } from 'react';
import { 
  AppBar, Toolbar, Typography, Button, Container, Box, 
  IconButton, InputBase, Paper, Menu, MenuItem, Badge 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'white', color: '#333' }} elevation={1}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1 }}>
           {/* Logo Placeholder (Text if image missing) */}
           <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#252525', mr: 4, cursor: 'pointer' }} onClick={() => navigate('/')}>
             Eflyer
           </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, alignItems: 'center', gap: 2 }}>
            <Button endIcon={<KeyboardArrowDownIcon />} onClick={(e) => setAnchorEl(e.currentTarget)} sx={{ bgcolor: '#f0f0f0', color: '#333' }}>
              All Category
            </Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
              <MenuItem onClick={() => setAnchorEl(null)}>Fashion</MenuItem>
              <MenuItem onClick={() => setAnchorEl(null)}>Electronics</MenuItem>
            </Menu>

            <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', flexGrow: 1, border: '1px solid #ddd' }}>
              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search this blog" />
              <Box sx={{ bgcolor: '#f26522', p: 1, display: 'flex', color: 'white' }}><SearchIcon /></Box>
            </Paper>

            <Button startIcon={<ShoppingCartIcon />} sx={{ color: '#333' }}>Cart</Button>
            <Button startIcon={<PersonIcon />} sx={{ color: '#333' }}>User</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;