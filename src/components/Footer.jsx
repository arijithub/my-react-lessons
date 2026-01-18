import React from 'react'
import logoFooter from '../assets/images/footer-logo.png'

export default function Footer() {
  return (
    <>
      {/* footer section start */}
      <div className="footer_section layout_padding">
        <div className="container">
          <div className="footer_logo">
            <a href="index.html"><img src={logoFooter} alt="Footer Logo" /></a>
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