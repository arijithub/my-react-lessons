import { useState } from 'react'
import { Link } from 'react-router-dom'

// Import Images
import logo from '../assets/images/logo.png'
import toggleIcon from '../assets/images/toggle-icon.png'
import flagUk from '../assets/images/flag-uk.png'
import flagFr from '../assets/images/flag-france.png'

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const openNav = () => setIsNavOpen(true)
  const closeNav = () => setIsNavOpen(false)

  return (
    <>
      {/* header top section start */}
      <div className="container">
        <div className="header_section_top">
          <div className="row">
            <div className="col-sm-12">
              <div className="custom_menu">
                <ul>
                  <li><Link to="#">Best Sellers</Link></li>
                  <li><Link to="#">Gift Ideas</Link></li>
                  <li><Link to="#">New Releases</Link></li>
                  <li><Link to="#">Today's Deals</Link></li>
                  <li><Link to="#">Customer Service</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header top section end */}

      {/* logo section start */}
      <div className="logo_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="logo">
                <Link to="/"><img src={logo} alt="logo" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* logo section end */}

      {/* header section start */}
      <div className="header_section">
        <div className="container">
          <div className="containt_main">
            
            <div id="mySidenav" className="sidenav" style={{ width: isNavOpen ? '250px' : '0' }}>
              <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
              <Link to="/">Home</Link>
              <Link to="/fashion">Fashion</Link>
              <Link to="/electronic">Electronic</Link>
              <Link to="/jewellery">Jewellery</Link>
            </div>
            
            <span className="toggle_icon" onClick={openNav}>
              <img src={toggleIcon} alt="toggle" />
            </span>

            <div className="dropdown">
              <button 
                className="btn btn-secondary dropdown-toggle" 
                type="button" 
                id="dropdownMenuButton" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false"
              >
                All Category 
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </div>

            <div className="main">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search this blog" />
                <div className="input-group-append">
                  <button className="btn btn-secondary" type="button" style={{ backgroundColor: '#f26522', borderColor: '#f26522' }}>
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="header_box">
              <div className="lang_box">
                <a href="#" title="Language" className="nav-link" data-toggle="dropdown" aria-expanded="true">
                  <img src={flagUk} alt="flag" className="mr-2" title="United Kingdom" /> English <i className="fa fa-angle-down ml-2" aria-hidden="true"></i>
                </a>
                <div className="dropdown-menu">
                  <a href="#" className="dropdown-item">
                    <img src={flagFr} className="mr-2" alt="flag" />
                    French
                  </a>
                </div>
              </div>
              <div className="login_menu">
                <ul>
                  <li><a href="#">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    <span className="padding_10">Cart</span></a>
                  </li>
                  <li><a href="#">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <span className="padding_10">Cart</span></a>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      {/* header section end */}
    </>
  )
}