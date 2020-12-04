import React, { Component } from 'react';
import {Link} from "react-router-dom";


class Footer extends Component {

            
    render(){
        return (
          
            <footer className=" bg-gray full-width border no-border-r no-border-l footer-v3 no-border-b">
            <div className="clearfix container-web relative">
              <div className=" container clear-padding">
                <div className="row">
                  {/* Support */}
                  <div className="clearfix support-box support-box-v3 full-width">
                    <div className="container-web clearfix">
                      <div className=" container ">
                        <div className="row">
                          <div className=" support-box-info relative col-md-3 col-sm-3 col-xs-6">
                            <img src="img/icon_free_ship.png" alt="Icon Free Ship" className="float-left" />
                            <p className="float-left">free shipping</p>
                            <p className="float-left">on order over $500</p>
                          </div>
                          <div className=" support-box-info relative col-md-3 col-sm-3 col-xs-6">
                            <img src="img/icon_support.png" alt="Icon Supports" className="float-left" />
                            <p className="float-left">support</p>
                            <p className="float-left">life time support 24/7</p>
                          </div>
                          <div className=" support-box-info relative col-md-3 col-sm-3 col-xs-6">
                            <img src="img/icon_patner.png" alt="Icon partner" className="float-left" />
                            <p className="float-left">help partner</p>
                            <p className="float-left">help all aspects</p>
                          </div>
                          <div className=" support-box-info relative col-md-3 col-sm-3 col-xs-6">
                            <img src="img/icon_phone_big.png" alt="Icon Phone Tablet" className="float-left" />
                            <p className="float-left">contact with us</p>
                            <p className="float-left">+07 (0) 7782 9137</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Support Box */}
                </div>
                <div className="row">
                  <div className="clearfix col-md-3 col-sm-6 col-xs-12 text-footer">
                    <p>my account</p>
                    <ul className="list-footer">
                      <li><Link to="#">My Account</Link></li>
                      <li><Link to="#">Login</Link></li>
                      <li><Link to="#">My Cart</Link></li>
                      <li><Link to="#">My Wishlist</Link></li>
                      <li><Link to="#">My Compare</Link></li>
                    </ul>
                  </div>
                  <div className="clearfix col-md-3 col-sm-6 col-xs-12 text-footer">
                    <p>information</p>
                    <ul className="list-footer">
                      <li><Link to="#">Information</Link></li>
                      <li><Link to="#">Orders History</Link></li>
                      <li><Link to="#">My Wishlist</Link></li>
                      <li><Link to="#">Privacy Policy</Link></li>
                      <li><Link to="#">Site Map</Link></li>
                    </ul>
                  </div>
                  <div className="clearfix col-md-3 col-sm-6 col-xs-12 text-footer">
                    <p>our services</p>
                    <ul className="list-footer">
                      <li><Link to="#">Product Recall</Link></li>
                      <li><Link to="#">Gift Vouchers</Link></li>
                      <li><Link to="#">Returns And Exchanges</Link></li>
                      <li><Link to="#">Shipping Options</Link></li>
                      <li><Link to="#">Terms Of Use</Link></li>
                    </ul>
                  </div>
                  <div className="clearfix col-md-3 col-sm-6 col-xs-12 text-footer">
                    <p>contact us</p>
                    <ul className="icon-footer">
                      <li><i className="fa fa-home" aria-hidden="true" /> 262 Milacina Mrest, Behansed, Paris</li>
                      <li><i className="fa fa-envelope" aria-hidden="true" /> contact@yourcompany.com</li>
                      <li><i className="fa fa-phone" aria-hidden="true" /> 070-7782-9137</li>
                      <li><i className="fa fa-fax" aria-hidden="true" /> 070-7782-9138</li>
                      <li><i className="fa fa-clock-o" aria-hidden="true" /> 09:00 AM - 18:00 PM</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Box Social */}
            <div className=" top-footer full-width">
              <div className="clearfix container-web relative">
                <div className=" container">
                  <div className="row">
                    <div className="clearfix col-md-9 col-sm-12 clear-padding col-xs-12">
                      <div className="clearfix text-subscribe">
                        <i className="fa fa-envelope-o" aria-hidden="true" />
                        <p>sign up for newsletter</p>
                        <p>Get updates on discount &amp; counpons.</p>
                      </div>
                      <div className="clearfix form-subscribe">
                        <input type="text" name="email-subscribe" placeholder="Enter your email . . ." />
                        <button className="animate-default button-hover-red">subscribe</button>
                      </div>
                    </div>
                    <div className="clearfix col-md-3 col-sm-12 col-xs-12 clear-padding social-box text-right">
                      <Link to="#"><img src="img/social_tw-min.png" alt="Icon Social Twiter" /></Link>
                      <Link to="#"><img src="img/social_fa-min.png" alt="Icon Social Facebook" /></Link>
                      <Link to="#"><img src="img/social_int-min.png" alt="Icon Social Instagram" /></Link>
                      <Link to="#"><img src="img/social_yt-min.png" alt="Icon Social Youtube" /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Box Social */}
            <div className=" bottom-footer full-width">
              <div className="clearfix container-web">
                <div className=" container">
                  <div className="row">
                    <div className="clearfix col-md-7 clear-padding copyright">
                      <p>Copyright © 2018 by EngoCreative. All Rights Reserved.</p>
                    </div>
                    
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clearfix footer-icon-bottom col-md-5 float-right clear-padding">
                      <div className="icon_logo_footer float-right">
                        <img src="img/image_payment_footer-min.png" alt="" />

              </div>
              
            </div>
          </footer>
        );
    }

}

export default Footer;