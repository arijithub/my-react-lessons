import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// --- Import All Images ---
// Header/Nav Images
import logo from '../assets/images/logo.png'
import toggleIcon from '../assets/images/toggle-icon.png'
import flagUk from '../assets/images/flag-uk.png'
import flagFr from '../assets/images/flag-france.png'

// Product Images
import tshirtImg from '../assets/images/tshirt-img.png'
import dressShirtImg from '../assets/images/dress-shirt-img.png'
import womenClothesImg from '../assets/images/women-clothes-img.png'
import laptopImg from '../assets/images/laptop-img.png'
import mobileImg from '../assets/images/mobile-img.png'
import computerImg from '../assets/images/computer-img.png'
import jhumkaImg from '../assets/images/jhumka-img.png'
import nekleshImg from '../assets/images/neklesh-img.png'
import kanganImg from '../assets/images/kangan-img.png'

// Footer Image
import footerLogo from '../assets/images/footer-logo.png'

export default function Home() {
  // State for Side Navigation
  const [isNavOpen, setIsNavOpen] = useState(false)

  const openNav = () => setIsNavOpen(true)
  const closeNav = () => setIsNavOpen(false)

  return (
    <>
      {/* banner_bg_main starts here and wraps Header + Banner */}
      <div className="banner_bg_main">
        
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
              
              {/* Side Nav */}
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

        {/* banner section start */}
        <div className="banner_section layout_padding">
          <div className="container">
            <div id="my_slider" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-sm-12">
                      <h1 className="banner_taital">Get Start <br />Your favriot shoping</h1>
                      <div className="buynow_bt"><a href="#">Buy Now</a></div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-sm-12">
                      <h1 className="banner_taital">Get Start <br />Your favriot shoping</h1>
                      <div className="buynow_bt"><a href="#">Buy Now</a></div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-sm-12">
                      <h1 className="banner_taital">Get Start <br />Your favriot shoping</h1>
                      <div className="buynow_bt"><a href="#">Buy Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
                <i className="fa fa-angle-left"></i>
              </a>
              <a className="carousel-control-next" href="#my_slider" role="button" data-slide="next">
                <i className="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
        {/* banner section end */}

      </div>
      {/* banner_bg_main ends */}

      {/* fashion section start */}
      <div className="fashion_section">
        <div id="main_slider" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <h1 className="fashion_taital">Man & Woman Fashion</h1>
                <div className="fashion_section_2">
                  <div className="row">
                    <div className="col-lg-4 col-sm-4">
                      <div className="box_main">
                        <h4 className="shirt_text">Man T -shirt</h4>
                        <p className="price_text">Price <span style={{ color: '#262626' }}>$ 30</span></p>
                        <div className="tshirt_img"><img src={tshirtImg} alt="tshirt" /></div>
                        <div className="btn_main">
                          <div className="buy_bt"><a href="#">Buy Now</a></div>
                          <div className="seemore_bt"><a href="#">See More</a></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <div className="box_main">
                        <h4 className="shirt_text">Man -shirt</h4>
                        <p className="price_text">Price <span style={{ color: '#262626' }}>$ 30</span></p>
                        <div className="tshirt_img"><img src={dressShirtImg} alt="shirt" /></div>
                        <div className="btn_main">
                          <div className="buy_bt"><a href="#">Buy Now</a></div>
                          <div className="seemore_bt"><a href="#">See More</a></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <div className="box_main">
                        <h4 className="shirt_text">Woman Scart</h4>
                        <p className="price_text">Price <span style={{ color: '#262626' }}>$ 30</span></p>
                        <div className="tshirt_img"><img src={womenClothesImg} alt="clothes" /></div>
                        <div className="btn_main">
                          <div className="buy_bt"><a href="#">Buy Now</a></div>
                          <div className="seemore_bt"><a href="#">See More</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
            <i className="fa fa-angle-left"></i>
          </a>
          <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
            <i className="fa fa-angle-right"></i>
          </a>
        </div>
      </div>
      {/* fashion section end */}

      {/* electronic section start */}
      <div className="fashion_section">
        <div id="electronic_main_slider" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <h1 className="fashion_taital">Electronic</h1>
                <div className="fashion_section_2">
                  <div className="row">
                    <div className="col-lg-4 col-sm-4">
                      <div className="box_main">
                        <h4 className="shirt_text">Laptop</h4>
                        <p className="price_text">Start Price <span style={{ color: '#262626' }}>$ 100</span></p>
                        <div className="electronic_img"><img src={laptopImg} alt="laptop" /></div>
                        <div className="btn_main">
                          <div className="buy_bt"><a href="#">Buy Now</a></div>
                          <div className="seemore_bt"><a href="#">See More</a></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <div className="box_main">
                        <h4 className="shirt_text">Mobile</h4>
                        <p className="price_text">Start Price <span style={{ color: '#262626' }}>$ 100</span></p>
                        <div className="electronic_img"><img src={mobileImg} alt="mobile" /></div>
                        <div className="btn_main">
                          <div className="buy_bt"><a href="#">Buy Now</a></div>
                          <div className="seemore_bt"><a href="#">See More</a></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <div className="box_main">
                        <h4 className="shirt_text">Computers</h4>
                        <p className="price_text">Start Price <span style={{ color: '#262626' }}>$ 100</span></p>
                        <div className="electronic_img"><img src={computerImg} alt="computer" /></div>
                        <div className="btn_main">
                          <div className="buy_bt"><a href="#">Buy Now</a></div>
                          <div className="seemore_bt"><a href="#">See More</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#electronic_main_slider" role="button" data-slide="prev">
            <i className="fa fa-angle-left"></i>
          </a>
          <a className="carousel-control-next" href="#electronic_main_slider" role="button" data-slide="next">
            <i className="fa fa-angle-right"></i>
          </a>
        </div>
      </div>
      {/* electronic section end */}

      {/* jewellery section start */}
      <div className="jewellery_section">
        <div id="jewellery_main_slider" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <h1 className="fashion_taital">Jewellery Accessories</h1>
                <div className="fashion_section_2">
                  <div className="row">
                    <div className="col-lg-4 col-sm-4">
                      <div className="box_main">
                        <h4 className="shirt_text">Jumkas</h4>
                        <p className="price_text">Start Price <span style={{ color: '#262626' }}>$ 100</span></p>
                        <div className="jewellery_img"><img src={jhumkaImg} alt="jumkas" /></div>
                        <div className="btn_main">
                          <div className="buy_bt"><a href="#">Buy Now</a></div>
                          <div className="seemore_bt"><a href="#">See More</a></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <div className="box_main">
                        <h4 className="shirt_text">Necklaces</h4>
                        <p className="price_text">Start Price <span style={{ color: '#262626' }}>$ 100</span></p>
                        <div className="jewellery_img"><img src={nekleshImg} alt="necklaces" /></div>
                        <div className="btn_main">
                          <div className="buy_bt"><a href="#">Buy Now</a></div>
                          <div className="seemore_bt"><a href="#">See More</a></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <div className="box_main">
                        <h4 className="shirt_text">Kangans</h4>
                        <p className="price_text">Start Price <span style={{ color: '#262626' }}>$ 100</span></p>
                        <div className="jewellery_img"><img src={kanganImg} alt="kangans" /></div>
                        <div className="btn_main">
                          <div className="buy_bt"><a href="#">Buy Now</a></div>
                          <div className="seemore_bt"><a href="#">See More</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#jewellery_main_slider" role="button" data-slide="prev">
            <i className="fa fa-angle-left"></i>
          </a>
          <a className="carousel-control-next" href="#jewellery_main_slider" role="button" data-slide="next">
            <i className="fa fa-angle-right"></i>
          </a>
          <div className="loader_main">
            <div className="loader"></div>
          </div>
        </div>
      </div>
      {/* jewellery section end */}

      {/* footer section start */}
      <div className="footer_section layout_padding">
        <div className="container">
          <div className="footer_logo">
            <a href="index.html"><img src={footerLogo} alt="footer logo" /></a>
          </div>
          <div className="input_bt">
            <input type="text" className="mail_bt" placeholder="Your Email" name="Your Email" />
            <span className="subscribe_bt" id="basic-addon2"><a href="#">Subscribe</a></span>
          </div>
          <div className="footer_menu">
            <ul>
              <li><a href="#">Best Sellers</a></li>
              <li><a href="#">Gift Ideas</a></li>
              <li><a href="#">New Releases</a></li>
              <li><a href="#">Today's Deals</a></li>
              <li><a href="#">Customer Service</a></li>
            </ul>
          </div>
          <div className="location_main">Help Line Number : <a href="#">+1 1800 1200 1200</a></div>
        </div>
      </div>
      {/* footer section end */}

      {/* copyright section start */}
      <div className="copyright_section">
        <div className="container">
          <p className="copyright_text">© 2020 All Rights Reserved. Design by <a href="https://html.design">Free html Templates</a></p>
        </div>
      </div>
      {/* copyright section end */}
    </>
  )
}