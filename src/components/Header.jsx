import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  TextField
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { AuthContext } from '../context/AuthContext'

function AuthLinks() {
  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()
  if (user) {
    return (
      <a onClick={() => logout()} style={{ cursor: 'pointer' }}>
        <i className="fa fa-user" /> {user.name} — <span style={{ textDecoration: 'underline' }}>Sign out</span>
      </a>
    )
  }
  return (
    <div>
      <a onClick={() => navigate('/login')} style={{ cursor: 'pointer', marginRight: 8 }}><i className="fa fa-user" /> Login</a>
      <a onClick={() => navigate('/signup')} style={{ cursor: 'pointer' }}>Sign Up</a>
    </div>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [langAnchor, setLangAnchor] = useState(null)

  return (
    <div className="banner_bg_main">

      {/* Top Menu */}
      <div className="header_section_top">
        <div className="custom_menu">
          <ul>
            <li><a href="#">Best Sellers</a></li>
            <li><a href="#">Gift Ideas</a></li>
            <li><a href="#">New Releases</a></li>
            <li><a href="#">Today's Deals</a></li>
            <li><a href="#">Customer Service</a></li>
          </ul>
        </div>
      </div>

      {/* Logo */}
      <div className="logo_section">
        <div className="logo">
          <img src="/images/logo.png" />
        </div>
      </div>

      {/* Header */}
      <div className="header_section">
        <div className="containt_main">

          <IconButton onClick={() => setOpen(true)}>
            <MenuIcon sx={{ color: '#fff' }} />
          </IconButton>

          <Drawer open={open} onClose={() => setOpen(false)}>
            <div className="sidenav" style={{ width: 250 }}>
              <a onClick={() => setOpen(false)}>&times;</a>
              <a href="#">Home</a>
              <a href="#">Fashion</a>
              <a href="#">Electronic</a>
              <a href="#">Jewellery</a>
            </div>
          </Drawer>

          {/* Search */}
          <div className="main">
            <TextField
              fullWidth
              size="small"
              placeholder="Search this blog"
            />
          </div>

          {/* Language */}
          <div className="lang_box">
            <a onClick={(e) => setLangAnchor(e.currentTarget)}>
              <img src="/images/flag-uk.png" /> English
              <i className="fa fa-angle-down" />
            </a>
            <Menu
              anchorEl={langAnchor}
              open={Boolean(langAnchor)}
              onClose={() => setLangAnchor(null)}
            >
              <MenuItem>
                <img src="/images/flag-france.png" /> French
              </MenuItem>
            </Menu>
          </div>

          {/* Icons */}
          <div className="login_menu">
            <ul>
              <li>
                <a href="#"><i className="fa fa-shopping-cart" /> Cart</a>
              </li>
              <li>
                {/* Auth-aware links */}
                <AuthLinks />
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}
