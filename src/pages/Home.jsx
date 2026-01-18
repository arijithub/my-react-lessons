import React from 'react'

// Import Images for content
import tshirtImg from '../assets/images/tshirt-img.png'
import dressShirtImg from '../assets/images/dress-shirt-img.png'
import womenClothesImg from '../assets/images/women-clothes-img.png'
import laptopImg from '../assets/images/laptop-img.png'
import mobileImg from '../assets/images/mobile-img.png'
import computerImg from '../assets/images/computer-img.png'
import jhumkaImg from '../assets/images/jhumka-img.png'
import nekleshImg from '../assets/images/neklesh-img.png'
import kanganImg from '../assets/images/kangan-img.png'

export default function Home() {
  return (
    <div className="home-page-wrapper">
      
      {/* banner section start */}
      {/* Note: The banner_bg_main class in your HTML wrapped the header too. 
          You might need to apply specific CSS to make the banner background appear correctly 
          if it was dependent on the parent wrapper. */}
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
                        <div className="tshirt_img"><img src={tshirtImg} alt="T-shirt" /></div>
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
                        <div className="tshirt_img"><img src={dressShirtImg} alt="Dress Shirt" /></div>
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
                        <div className="tshirt_img"><img src={womenClothesImg} alt="Woman Scart" /></div>
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
            {/* You can add more carousel-items here for the slider if needed */}
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
                        <div className="electronic_img"><img src={laptopImg} alt="Laptop" /></div>
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
                        <div className="electronic_img"><img src={mobileImg} alt="Mobile" /></div>
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
                        <div className="electronic_img"><img src={computerImg} alt="Computer" /></div>
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
                        <div className="jewellery_img"><img src={jhumkaImg} alt="Jumkas" /></div>
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
                        <div className="jewellery_img"><img src={nekleshImg} alt="Necklaces" /></div>
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
                        <div className="jewellery_img"><img src={kanganImg} alt="Kangans" /></div>
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
        </div>
      </div>
      {/* jewellery section end */}
      
    </div>
  )
}