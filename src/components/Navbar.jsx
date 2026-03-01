import React, { useState, useContext } from 'react';
import { 
  AppBar, Toolbar, Typography, Button, Container, Box, 
  IconButton, InputBase, Paper, Menu, MenuItem, Badge 
} from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';

// Account Menu Component (reusable for both Navbar and Home)
export function AccountMenuPopper({ accountAnchor, setAccountAnchor }) {
  const { user, logout } = useContext(AuthContext);

  return (
    <Menu anchorEl={accountAnchor} open={Boolean(accountAnchor)} onClose={() => setAccountAnchor(null)}>
      {user ? (
        <>
         
          <MenuItem onClick={() => { logout(); setAccountAnchor(null); }}>Logout</MenuItem>
        </>
      ) : (
        <>
          <MenuItem onClick={() => { window.location.href = '/login'; setAccountAnchor(null); }}>Login</MenuItem>
          <MenuItem onClick={() => { window.location.href = '/signup'; setAccountAnchor(null); }}>Sign Up</MenuItem>
        </>
      )}
    </Menu>
  );
}

function AccountMenu() {
  const [userAnchor, setUserAnchor] = useState(null);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <Button startIcon={<PersonIcon />} sx={{ color: '#333' }} onClick={(e) => setUserAnchor(e.currentTarget)}>
        {user ? user.name : 'Account'}
      </Button>
      <Menu anchorEl={userAnchor} open={Boolean(userAnchor)} onClose={() => setUserAnchor(null)}>
        
        {user ? (
          <>
         
          <MenuItem onClick={() => { logout(); setUserAnchor(null); } }>Logout</MenuItem>
          </>
        ) : (
          <>
            <MenuItem onClick={() => { navigate('/login'); setUserAnchor(null); }}>Login</MenuItem>
            <MenuItem onClick={() => { navigate('/signup'); setUserAnchor(null); }}>Sign Up</MenuItem>
          </>
        )}
      </Menu>
    </>
  );
}

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'white', color: '#333' }} elevation={1}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1 }}>
           

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
            {/* Account Menu */}
            <AccountMenu />

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;