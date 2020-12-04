import React, { Component } from 'react';
import {Link} from "react-router-dom";



class Isi extends Component {


    render(){
        return (
          
            <div className="relative clearfix full-width">
            {/* Menu & Slide */}
            <div className="clearfix container-web relative">
              <div className=" container relative">
                <div className="row">
                  <div className=" relative menu-slide col-lg-12 clear-padding bottom-margin-15-default">
                    {/* Menu */}
                    <div className=" menu-web relative menu-bg-white border no-border-t">
                      <ul>
                        <li><Link to="#"><img src="img/icon_hot_gray.png" alt="Icon Hot Deals" /> <p>Hot Deals</p></Link></li>
                        <li><Link to="#"><img src="img/icon_food_gray.png" alt="Icon Food" /> <p>Food</p></Link></li>
                        <li><Link to="#"><img src="img/icon_mobile_gray.png" alt="Icon Mobile & Tablet" /> <p>Mobile &amp; Tablet</p></Link></li>
                        <li><Link to="#"><img src="img/icon_electric_gray.png" alt="Icon Electric Appliances" /> <p>Electric Appliances</p></Link></li>
                        <li><Link to="#"><img src="img/icon_computer_gray.png" alt="Icon Electronics & Technology" /> <p>Electronics &amp; Technology</p></Link></li>
                        <li><Link to="#"><img src="img/icon_fashion_gray.png" alt="Icon Fashion" /> <p>Fashion</p></Link></li>
                        <li><Link to="#"><img src="img/icon_health_gray.png" alt="Icon Health & Beauty" /> <p>Health &amp; Beauty</p></Link></li>
                        <li><Link to="#"><img src="img/icon_mother_gray.png" alt="Icon Mother & Baby" /> <p>Mother &amp; Baby</p></Link></li>
                        <li><Link to="#"><img src="img/icon_book_gray.png" alt="Icon Books & Stationery" /> <p>Books &amp; Stationery</p></Link></li>
                        <li><Link to="#"><img src="img/icon_home_gray.png" alt="Icon Home & Life" /> <p>Home &amp; Life</p></Link></li>
                        <li><Link to="#"><img src="img/icon_sport_gray.png" alt="Icon Sports & Outdoors" /> <p>Sports &amp; Outdoors</p></Link></li>
                        <li><Link to="#"><img src="img/icon_auto_gray.png" alt="Icon Auto & Moto" /> <p>Auto &amp; Moto</p></Link></li>
                        <li><Link to="#"><img src="img/icon_voucher_gray.png" alt="Icon Voucher Service" /> <p>Voucher Service</p></Link></li>
                      </ul>
                    </div>
                    {/* Slide */}
                    <div className="clearfix slide-box-home slide-v3 relative top-margin-15-default left-margin-15-default">
                      <div className="clearfix slide-home owl-carousel owl-theme owl-loaded owl-drag">
                        <div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(-1935px, 0px, 0px)', transition: 'all 0.25s ease 0s', width: '3870px'}}><div className="owl-item cloned" style={{width: '645px'}}><div className="item"><Link to="#"><img src="img/slide_v3.png" alt="Banner Home V3" /></Link></div></div><div className="owl-item cloned" style={{width: '645px'}}><div className="item"><Link to="#"><img src="img/banner_v3_1-min.png" alt="Banner Home V3" /></Link></div></div><div className="owl-item" style={{width: '645px'}}><div className="item"><Link to="#"><img src="img/slide_v3.png" alt="Banner Home V3" /></Link></div></div><div className="owl-item active" style={{width: '645px'}}><div className="item"><Link to="#"><img src="img/banner_v3_1-min.png" alt="Banner Home V3" /></Link></div></div><div className="owl-item cloned" style={{width: '645px'}}><div className="item"><Link to="#"><img src="img/slide_v3.png" alt="Banner Home V3" /></Link></div></div><div className="owl-item cloned" style={{width: '645px'}}><div className="item"><Link to="#"><img src="img/banner_v3_1-min.png" alt="Banner Home V3" /></Link></div></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button></div><div className="dots-slide"><button role="button" className="dot-slide-home"><span /></button><button role="button" className="dot-slide-home active"><span /></button></div></div>
                    </div>
                    <div className="category-image top-margin-15-default left-margin-15-default float-left border">
                      <div className="owl-carousel owl-theme owl-loaded owl-drag">
                        <div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(-1285px, 0px, 0px)', transition: 'all 0.25s ease 0s', width: '2358px'}}><div className="owl-item cloned" style={{width: '214.333px'}}><div className=" category-image-slide relative full-width">
                                <div className="clearfix effect-hover-zoom overfollow-hidden img-categorys-slide center-vertical-image relative">
                                  <img className="animate-default" src="img/image_slide_top_3-min.png" alt="Image Shore" />
                                  <Link to="#" />
                                </div>
                                <Link to="#">
                                  <p className="uppercase bold">Camera</p>
                                </Link>
                              </div></div><div className="owl-item cloned" style={{width: '214.333px'}}><div className=" category-image-slide relative full-width">
                                <div className="clearfix effect-hover-zoom overfollow-hidden img-categorys-slide center-vertical-image relative">
                                  <img className="animate-default" src="img/image_shore.png" alt="Image Shore" />
                                  <Link to="#" />
                                </div>
                                <Link to="#">
                                  <p className="uppercase bold">Shoes</p>
                                </Link>
                              </div></div><div className="owl-item cloned" style={{width: '214.333px'}}><div className=" category-image-slide relative full-width">
                                <div className="clearfix effect-hover-zoom overfollow-hidden img-categorys-slide center-vertical-image relative">
                                  <img className="animate-default" src="img/image_slide_top_4-min.png" alt="Image Shore" />
                                  <Link to="#" />
                                </div>
                                <Link to="#">
                                  <p className="uppercase bold">Bags</p>
                                </Link>
                              </div></div><div className="owl-item" style={{width: '214.333px'}}><div className=" category-image-slide relative full-width">
                                <div className="clearfix effect-hover-zoom overfollow-hidden img-categorys-slide center-vertical-image relative">
                                  <img className="animate-default" src="img/image_slide_top_1-min.png" alt="Image Shore" />
                                  <Link to="#" />
                                </div>
                                <Link to="#">
                                  <p className="uppercase bold">Mobile</p>
                                </Link>
                              </div></div><div className="owl-item" style={{width: '214.333px'}}><div className=" category-image-slide relative full-width">
                                <div className="clearfix effect-hover-zoom overfollow-hidden img-categorys-slide center-vertical-image relative">
                                  <img className="animate-default" src="img/image_slide_top_2-min.png" alt="Image Shore" />
                                  <Link to="#" />
                                </div>
                                <Link to="#">
                                  <p className="uppercase bold">Accessory</p>
                                </Link>
                              </div></div><div className="owl-item" style={{width: '214.333px'}}><div className=" category-image-slide relative full-width">
                                <div className="clearfix effect-hover-zoom overfollow-hidden img-categorys-slide center-vertical-image relative">
                                  <img className="animate-default" src="img/image_slide_top_3-min.png" alt="Image Shore" />
                                  <Link to="#" />
                                </div>
                                <Link to="#">
                                  <p className="uppercase bold">Camera</p>
                                </Link>
                              </div></div><div className="owl-item active" style={{width: '214.333px'}}><div className=" category-image-slide relative full-width">
                                <div className="clearfix effect-hover-zoom overfollow-hidden img-categorys-slide center-vertical-image relative">
                                  <img className="animate-default" src="img/image_shore.png" alt="Image Shore" />
                                  <Link to="#" />
                                </div>
                                <Link to="#">
                                  <p className="uppercase bold">Shoes</p>
                                </Link>
                              </div></div><div className="owl-item active" style={{width: '214.333px'}}><div className=" category-image-slide relative full-width">
                                <div className="clearfix effect-hover-zoom overfollow-hidden img-categorys-slide center-vertical-image relative">
                                  <img className="animate-default" src="img/image_slide_top_4-min.png" alt="Image Shore" />
                                  <Link to="#" />
                                </div>
                                <Link to="#">
                                  <p className="uppercase bold">Bags</p>
                                </Link>
                              </div></div><div className="owl-item cloned active" style={{width: '214.333px'}}><div className=" category-image-slide relative full-width">
                                <div className="clearfix effect-hover-zoom overfollow-hidden img-categorys-slide center-vertical-image relative">
                                  <img className="animate-default" src="img/image_slide_top_1-min.png" alt="Image Shore" />
                                  <Link to="#" />
                                </div>
                                <Link to="#">
                                  <p className="uppercase bold">Mobile</p>
                                </Link>
                              </div></div><div className="owl-item cloned" style={{width: '214.333px'}}><div className=" category-image-slide relative full-width">
                                <div className="clearfix effect-hover-zoom overfollow-hidden img-categorys-slide center-vertical-image relative">
                                  <img className="animate-default" src="img/image_slide_top_2-min.png" alt="Image Shore" />
                                  <Link to="#" />
                                </div>
                                <Link to="#">
                                  <p className="uppercase bold">Accessory</p>
                                </Link>
                              </div></div><div className="owl-item cloned" style={{width: '214.333px'}}><div className=" category-image-slide relative full-width">
                                <div className="clearfix effect-hover-zoom overfollow-hidden img-categorys-slide center-vertical-image relative">
                                  <img className="animate-default" src="img/image_slide_top_3-min.png" alt="Image Shore" />
                                  <Link to="#" />
                                </div>
                                <Link to="#">
                                  <p className="uppercase bold">Camera</p>
                                </Link>
                              </div></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button></div><div className="owl-dots disabled" /></div>
                    </div>
                    <div className="clearfix box-banner-small-v3 top-margin-15-default left-margin-15-default box-banner-small">
                      <div className="effect-layla banner-v3-home center-vertical-image zoom-image-hover relative bottom-margin-15-default">
                        <img src="img/banner_slide_v3.png" alt="" />
                        <Link to="#" />
                      </div>
                      <div className="effect-layla banner-v3-home center-vertical-image zoom-image-hover relative">
                        <img src="img/banner_slide_v3_1-min.png" alt="" />
                        <Link to="#" />
                      </div>
                    </div>
                  </div>
                  {/* End Menu & Slide */}
                </div>
              </div>
            </div>
            {/* Box Banner Percent 3 */}
            <div className=" banner-percent-3 container-web">
              <div className=" container">
                <div className="row">
                  <div className="banner-pecent-3-top bottom-margin-15-default display-table">
                    <div className="effect-bubba zoom-image-hover overfollow-hidden float-left relative right-margin-15-default ">
                      <img src="img/banner_percent_3.png" className alt="Banner Percent" />
                      <Link to="#" />
                    </div>
                    <div className="effect-bubba zoom-image-hover overfollow-hidden float-left relative">
                      <img src="img/banner_pecent_3_1-min.png" className alt="Banner Percent" />
                      <Link to="#" />
                    </div>
                    <div className="effect-bubba zoom-image-hover overfollow-hidden float-left relative left-margin-15-default">
                      <img src="img/banner_pecent_3_2-min.png" className alt="Banner Percent" />
                      <Link to="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Banner Percent 3 */}
            {/* List Logo Top */}
            <div className="container-web">
              <div className="container">
                <div className="row list-logo-top-v3">
                  <ul className="clear-margin border-collapsed-box">
                    <li className="border-collapsed-element"><Link to="#"><img src="img/logo_3.png" alt="Logo" /></Link></li>
                    <li className="border-collapsed-element"><Link to="#"><img src="img/logo_7.png" alt="Logo" /></Link></li>
                    <li className="border-collapsed-element"><Link to="#"><img src="img/logo_4.png" alt="Logo" /></Link></li>
                    <li className="border-collapsed-element"><Link to="#"><img src="img/logo_8.png" alt="Logo" /></Link></li>
                    <li className="border-collapsed-element"><Link to="#"><img src="img/logo_5.png" alt="Logo" /></Link></li>
                    <li className="border-collapsed-element"><Link to="#"><img src="img/logo_9.png" alt="Logo" /></Link></li>
                    <li className="border-collapsed-element"><Link to="#"><img src="img/logo_6.png" alt="Logo" /></Link></li>
                    <li className="border-collapsed-element"><Link to="#"><img src="img/logo_10.png" alt="Logo" /></Link></li>
                    <li className="border-collapsed-element"><Link to="#"><img src="img/logo_1.png" alt="Logo" /></Link></li>
                    <li className="border-collapsed-element"><Link to="#"><img src="img/logo_11.png" alt="Logo" /></Link></li>
                    <li className="border-collapsed-element"><Link to="#"><img src="img/logo_2.png" alt="Logo" /></Link></li>
                    <li className="border-collapsed-element"><Link to="#"><img src="img/logo_12.png" alt="Logo" /></Link></li>
                    <li className="border-collapsed-element"><Link to="#"><img src="img/logo_13-min.png" alt="Logo" /></Link></li>
                    <li className="border-collapsed-element"><Link to="#"><img src="img/logo_14-min.png" alt="Logo" /></Link></li>
                    <li className="border-collapsed-element"><Link to="#"><img src="img/logo_4.png" alt="Logo" /></Link></li>
                    <li className="border-collapsed-element"><Link to="#"><img src="img/logo_15-min.png" alt="Logo" /></Link></li>
                    <li className="border-collapsed-element"><Link to="#"><img src="img/logo_16-min.png" alt="Logo" /></Link></li>
                    <li className="border-collapsed-element"><Link to="#"><img src="img/logo_17-min.png" alt="Logo" /></Link></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End List Logo Top */}
            {/* Product Box */}
            <div className="top-margin-default container-web">
              <div className=" container">
                <div className="row">
                  <div className="clearfix title-box title-box-v3 full-width">
                    <div className="clearfix name-title-box title-category title-green-bd relative">
                      <img src="img/icon_food_color.png" alt="Icon Food" className="absolute" />
                      <p className="text-default-color">fresh food</p>
                    </div>
                    <div className="clearfix menu-title-box capitalize">
                      <ul>
                        <li><Link to="javascript:;" onclick="showBoxCateHomeByID('#confectionery','.box-food-content')">Confectionery</Link></li>
                        <li><Link to="javascript:;" onclick="showBoxCateHomeByID('#milk-cream','.box-food-content')">Milk &amp; Cream</Link></li>
                        <li><Link to="javascript:;" onclick="showBoxCateHomeByID('#dry-food','.box-food-content')">Dry Food</Link></li>
                        <li><Link to="javascript:;" onclick="showBoxCateHomeByID('#vegetables','.box-food-content')">Vegetables</Link></li>
                        <li><Link to="javascript:;" onclick="showBoxCateHomeByID('#drinks','.box-food-content')">Drinks</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className=" bottom-margin-default full-width">
                    {/* Banner Home V3 */}
                    <div className="effect-bubba zoom-image-hover overfollow-hidden banner-category banner-category-v3 float-left relative border no-border-t no-border-l no-border-r">
                      <img src="img/banner_home_v3-min.png" alt="Banner Home V3" />
                      <Link to="#" />
                    </div>
                    {/* List Product V3 */}
                    <div className="clearfix box-content-product-home-v3 float-left relative">
                      <div className="box-food-content relative animate-default active-box-category hidden-content-box border-collapsed-box" id="confectionery">
                        <div className="clearfix border-collapsed-element relative product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_9-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Endeavor Daytrip Backpack</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_15-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Impulse Duffle</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_10-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">MH01-Black</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_8-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Wayfarer Messenger Bag</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_16-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">MH02-Black09</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_17-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Voyage Yoga Bag</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                      </div>
                      <div className="box-food-content relative animate-default hidden-content-box border-collapsed-box" id="milk-cream">
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_8-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Wayfarer Messenger Bag</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_16-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">MH02-Black09</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix border-collapsed-element relative product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_9-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Endeavor Daytrip Backpack</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_15-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Impulse Duffle</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_10-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">MH01-Black</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_17-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Voyage Yoga Bag</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                      </div>
                      <div className="box-food-content relative animate-default hidden-content-box border-collapsed-box" id="dry-food">
                        <div className="clearfix border-collapsed-element relative product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_9-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Endeavor Daytrip Backpack</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_8-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Wayfarer Messenger Bag</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_16-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">MH02-Black09</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_15-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Impulse Duffle</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_10-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">MH01-Black</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_17-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Voyage Yoga Bag</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                      </div>
                      <div className="box-food-content relative animate-default hidden-content-box border-collapsed-box" id="vegetables">
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_15-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Impulse Duffle</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_10-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">MH01-Black</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix border-collapsed-element relative product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_9-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Endeavor Daytrip Backpack</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_8-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Wayfarer Messenger Bag</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_16-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">MH02-Black09</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_17-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Voyage Yoga Bag</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                      </div>
                      <div className="box-food-content relative animate-default hidden-content-box border-collapsed-box" id="drinks">
                        <div className="clearfix border-collapsed-element relative product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_9-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Endeavor Daytrip Backpack</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_10-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">MH01-Black</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_8-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Wayfarer Messenger Bag</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_16-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">MH02-Black09</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_17-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Voyage Yoga Bag</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_15-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Impulse Duffle</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* List Logo V3 */}
                    <div className=" clear-padding list-logo-category-v2 list-logo-category full-width border no-border-t">
                      <ul>
                        <li><Link to="#"><img src="img/logo_3.png" alt="Logo" /></Link></li>
                        <li><Link to="#"><img src="img/logo_4.png" alt="Logo" /></Link></li>
                        <li><Link to="#"><img src="img/logo_5.png" alt="Logo" /></Link></li>
                        <li><Link to="#"><img src="img/logo_6.png" alt="Logo" /></Link></li>
                        <li><Link to="#"><img src="img/logo_1.png" alt="Logo" /></Link></li>
                        <li><Link to="#"><img src="img/logo_2.png" alt="Logo" /></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Product Box */}
            {/* Banner Full With */}
            <div className="clearfix relative full-width bottom-margin-default">
              <div className="clearfix container-web">
                <div className=" container banner_full_width">
                  <div className="row overfollow-hidden banners-effect5 relative">
                    <img src="img/banner_full_w.png" alt="Banner Full Width . . ." />
                    <Link to="#" />
                  </div>
                </div>
              </div>
            </div>
            {/* End Banner Full With */}
            {/* Product Box */}
            <div className=" container-web">
              <div className=" container">
                <div className="row">
                  <div className="clearfix title-box title-box-v3 full-width">
                    <div className="clearfix name-title-box title-category title-jungle-green-bd relative">
                      <img src="img/icon_phone_color.png" alt="Icon Food" className="absolute" />
                      <p className="text-default-color">mobile &amp; tablet</p>
                    </div>
                    <div className="clearfix menu-title-box capitalize">
                      <ul>
                        <li><Link onclick="showBoxCateHomeByID('#smart-phone','.box-mobile-content')" to="javascript:;">Smart phone</Link></li>
                        <li><Link onclick="showBoxCateHomeByID('#tablet','.box-mobile-content')" to="javascript:;">Tablet</Link></li>
                        <li><Link onclick="showBoxCateHomeByID('#smart-watch','.box-mobile-content')" to="javascript:;">Smart Watch</Link></li>
                        <li><Link onclick="showBoxCateHomeByID('#case','.box-mobile-content')" to="javascript:;">Case</Link></li>
                        <li><Link onclick="showBoxCateHomeByID('#gadget','.box-mobile-content')" to="javascript:;">Gadget</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className=" bottom-margin-default full-width">
                    {/* Banner Home V3 */}
                    <div className="effect-bubba zoom-image-hover overfollow-hidden banner-category banner-category-v3 float-left relative border no-border-t no-border-l no-border-r">
                      <img src="img/banner_home_v3_1-min.png" alt="Banner Home V3" />
                      <Link to="#" />
                    </div>
                    {/* List Product V3 */}
                    <div className="clearfix box-content-product-home-v3 float-left relative">
                      <div className="box-mobile-content border-collapsed-box animate-default hidden-content-box active-box-category" id="smart-phone">
                        <div className="clearfix border-collapsed-element relative product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_4-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Cras tempus molestie</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_5-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Mauris varius</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_6-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Printed Summer Dress</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_7-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Sprite Yoga Straps1</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_18-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Voyage Yoga Bag</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_19-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Printed Summer Dress</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                      </div>
                      <div className="box-mobile-content border-collapsed-box animate-default hidden-content-box" id="tablet">
                        <div className="clearfix border-collapsed-element relative product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_4-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Cras tempus molestie</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_7-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Sprite Yoga Straps1</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_18-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Voyage Yoga Bag</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_5-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Mauris varius</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_6-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Printed Summer Dress</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_19-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Printed Summer Dress</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                      </div>
                      <div className="box-mobile-content border-collapsed-box animate-default hidden-content-box" id="smart-watch">
                        <div className="clearfix border-collapsed-element relative product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_4-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Cras tempus molestie</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_18-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Voyage Yoga Bag</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_19-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Printed Summer Dress</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_5-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Mauris varius</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_6-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Printed Summer Dress</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_7-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Sprite Yoga Straps1</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                      </div>
                      <div className="box-mobile-content border-collapsed-box animate-default hidden-content-box" id="case">
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_7-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Sprite Yoga Straps1</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_18-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Voyage Yoga Bag</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix border-collapsed-element relative product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_4-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Cras tempus molestie</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_5-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Mauris varius</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_6-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Printed Summer Dress</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_19-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Printed Summer Dress</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                      </div>
                      <div className="box-mobile-content border-collapsed-box animate-default hidden-content-box" id="gadget">
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_6-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Printed Summer Dress</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_7-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Sprite Yoga Straps1</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix border-collapsed-element relative product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_4-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Cras tempus molestie</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_5-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Mauris varius</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_18-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Voyage Yoga Bag</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_19-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Printed Summer Dress</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* List Logo V3 */}
                    <div className=" clear-padding list-logo-category-v2 list-logo-category full-width border no-border-t">
                      <ul>
                        <li><Link to="#"><img src="img/logo_3.png" alt="Logo" /></Link></li>
                        <li><Link to="#"><img src="img/logo_4.png" alt="Logo" /></Link></li>
                        <li><Link to="#"><img src="img/logo_5.png" alt="Logo" /></Link></li>
                        <li><Link to="#"><img src="img/logo_6.png" alt="Logo" /></Link></li>
                        <li><Link to="#"><img src="img/logo_1.png" alt="Logo" /></Link></li>
                        <li><Link to="#"><img src="img/logo_2.png" alt="Logo" /></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Product Box */}
            {/* Banner Full With */}
            <div className="clearfix relative full-width bottom-margin-default">
              <div className="clearfix container-web">
                <div className=" container banner_full_width">
                  <div className="row relative banners-effect5 overfollow-hidden">
                    <img src="img/banner_full_w_1.png" alt="Banner Full Width . . ." />
                    <Link to="#" />
                  </div>
                </div>
              </div>
            </div>
            {/* End Banner Full With */}
            {/* Product Box */}
            <div className=" container-web">
              <div className=" container">
                <div className="row">
                  <div className="clearfix title-box title-box-v3 full-width">
                    <div className="clearfix name-title-box title-category title-turquoise-bd relative">
                      <img src="img/icon_electric_color.png" alt="Icon Food" className="absolute" />
                      <p className="text-default-color">electric</p>
                    </div>
                    <div className="clearfix menu-title-box capitalize">
                      <ul>
                        <li><Link onclick="showBoxCateHomeByID('#television','.box-electric-content')" to="javascript:;">television</Link></li>
                        <li><Link onclick="showBoxCateHomeByID('#laptop','.box-electric-content')" to="javascript:;">laptop</Link></li>
                        <li><Link onclick="showBoxCateHomeByID('#camera','.box-electric-content')" to="javascript:;">camera</Link></li>
                        <li><Link onclick="showBoxCateHomeByID('#audio','.box-electric-content')" to="javascript:;">audio</Link></li>
                        <li><Link onclick="showBoxCateHomeByID('#accessories','.box-electric-content')" to="javascript:;">Accessories</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className=" bottom-margin-default full-width">
                    {/* Banner Home V3 */}
                    <div className="effect-bubba zoom-image-hover overfollow-hidden banner-category banner-category-v3 float-left relative border no-border-t no-border-l no-border-r">
                      <img src="img/banner_home_v3_2-min.png" alt="Banner Home V3" />
                      <Link to="#" />
                    </div>
                    {/* List Product V3 */}
                    <div className="clearfix box-content-product-home-v3 float-left relative">
                      <div className="border-collapsed-box active-box-category hidden-content-box box-electric-content animate-default" id="television">
                        <div className="clearfix border-collapsed-element relative product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_11-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Orange Shopper</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_12-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Red Travel Handbag</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_13-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Sample Bag</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_14-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Dark Flower Shoe</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_20-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Prestige Lite Heels</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_21-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Metropolis Classy</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                      </div>
                      <div className="border-collapsed-box hidden-content-box box-electric-content animate-default" id="laptop">
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_13-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Sample Bag</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_14-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Dark Flower Shoe</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix border-collapsed-element relative product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_11-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Orange Shopper</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_12-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Red Travel Handbag</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_20-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Prestige Lite Heels</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_21-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Metropolis Classy</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                      </div>
                      <div className="border-collapsed-box hidden-content-box box-electric-content animate-default" id="camera">
                        <div className="clearfix border-collapsed-element relative product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_11-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Orange Shopper</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_20-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Prestige Lite Heels</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_21-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Metropolis Classy</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_12-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Red Travel Handbag</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_13-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Sample Bag</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_14-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Dark Flower Shoe</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                      </div>
                      <div className="border-collapsed-box hidden-content-box box-electric-content animate-default" id="audio">
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_13-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Sample Bag</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_14-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Dark Flower Shoe</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix border-collapsed-element relative product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_11-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Orange Shopper</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_12-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Red Travel Handbag</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_20-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Prestige Lite Heels</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_21-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Metropolis Classy</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                      </div>
                      <div className="border-collapsed-box hidden-content-box box-electric-content animate-default" id="accessories">
                        <div className="clearfix border-collapsed-element relative product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_11-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Orange Shopper</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_13-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Sample Bag</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_14-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Dark Flower Shoe</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_20-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Prestige Lite Heels</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_12-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Red Travel Handbag</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative border-collapsed-element product-no-ranking percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/product_home_21-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width"><Link to="#">Metropolis Classy</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" clear-padding list-logo-category-v2 list-logo-category full-width border no-border-t">
                      <ul>
                        <li><Link to="#"><img src="img/logo_3.png" alt="Logo" /></Link></li>
                        <li><Link to="#"><img src="img/logo_4.png" alt="Logo" /></Link></li>
                        <li><Link to="#"><img src="img/logo_5.png" alt="Logo" /></Link></li>
                        <li><Link to="#"><img src="img/logo_6.png" alt="Logo" /></Link></li>
                        <li><Link to="#"><img src="img/logo_1.png" alt="Logo" /></Link></li>
                        <li><Link to="#"><img src="img/logo_2.png" alt="Logo" /></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Product Box */}
            {/* Banner Half Website */}
            <div className=" relative banner-half-web full-width bottom-margin-default">
              <div className="clearfix container-web">
                <div className=" container">
                  <div className="row">
                    <div className="clearfix content-left col-md-6 col-sm-6 col-xs-12 zoom-image-hover overfollow-hidden">
                      <div className="overfollow-hidden effect-oscar relative">
                        <img className="max-width" src="img/banner_halt.png" alt="Banner . . ." />
                        <Link to="#" />
                      </div>
                    </div>
                    <div className="clearfix content-right col-md-6 col-sm-6 col-xs-12 zoom-image-hover overfollow-hidden">
                      <div className="overfollow-hidden effect-oscar relative">
                        <img className="max-width" src="img/banner_percent_2.png" alt="Banner . . ." />
                        <Link to="#" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Product Category Percent 2 */}
            <div className=" full-width category-percent-two bottom-margin-default">
              <div className="clearfix container-web">
                <div className=" container">
                  <div className="row">
                    <div className=" clearfix content-left col-md-6 col-sm-6">
                      {/* Title Product */}
                      <div className="clearfix title-box full-width border">
                        <div className="clearfix name-title-box title-category title-gold-bg relative">
                          <img src="img/icon_fashion.png" alt="Icon Fashion" className="absolute" />
                          <p>fashion</p>
                        </div>
                        <div className="clearfix menu-title-box">
                          <p className="view-all-product-category title-hover-red"><Link to="#" className="animate-default">view all</Link></p>
                        </div>
                      </div>
                      <div className=" banner-percent-product zoom-image-hover overfollow-hidden effect-oscar relative">
                        <img src="img/banner_product_percent.png" className="max-width" alt="Image . . ." />
                        <Link to="#" />
                      </div>
                      {/* Content Product Box */}
                      <div className="clearfix product-percent-content border-collapsed-box full-width">
                        <div className="clearfix relative product-no-ranking border-collapsed-element percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/img_product_small_1-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width title-hover-black"><Link to="#">Voyage Yoga Bag</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative product-no-ranking border-collapsed-element percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/img_product_small_2-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width title-hover-black"><Link to="#">MH02-Black09</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative product-no-ranking border-collapsed-element percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/img_product_small_3-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width title-hover-black"><Link to="#">Impulse Duffle2</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative product-no-ranking border-collapsed-element percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/img_product_small_4-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width title-hover-black"><Link to="#">Rival Field Messenger</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative product-no-ranking border-collapsed-element percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/img_product_small_5-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width title-hover-black"><Link to="#">Impulse Duffle</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative product-no-ranking border-collapsed-element percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/img_product_small_6-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width title-hover-black"><Link to="#">Rival Field Messenger</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" clearfix content-right col-md-6 col-sm-6">
                      {/* Title Product */}
                      <div className="clearfix title-box full-width border">
                        <div className="clearfix name-title-box title-category title-violet-bg relative">
                          <img src="img/icon_health.png" alt="Icon Health & Beauty" className="absolute" />
                          <p>health &amp; beauty</p>
                        </div>
                        <div className="clearfix menu-title-box">
                          <p className="view-all-product-category title-hover-red"><Link to="#" className="animate-default">view all</Link></p>
                        </div>
                      </div>
                      <div className=" banner-percent-product zoom-image-hover overfollow-hidden effect-oscar relative">
                        <img src="img/banner_p_2_1.png" className="max-width" alt="Image . . ." />
                        <Link to="#" />
                      </div>
                      {/* Content Product Box */}
                      <div className="clearfix product-percent-content border-collapsed-box full-width">
                        <div className="clearfix relative product-no-ranking border-collapsed-element percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/img_product_small_7-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width title-hover-black"><Link to="#">Cras sed quam</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative product-no-ranking border-collapsed-element percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/img_product_small_8-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width title-hover-black"><Link to="#">Cras tempus molestie</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative product-no-ranking border-collapsed-element percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/img_product_small_9-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width title-hover-black"><Link to="#">Nullam lectus</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative product-no-ranking border-collapsed-element percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/img_product_small_10-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width title-hover-black"><Link to="#">expedita lirope</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative product-no-ranking border-collapsed-element percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/img_product_small_11-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width title-hover-black"><Link to="#">corrupti</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative product-no-ranking border-collapsed-element percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/img_product_small_12-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width title-hover-black"><Link to="#">accusamus odiote</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Product Category Percent 2 */}
            {/* Product Category Percent 2 */}
            <div className=" full-width category-percent-two bottom-margin-default">
              <div className="clearfix container-web">
                <div className=" container">
                  <div className="row">
                    <div className=" clearfix content-left col-md-6 col-sm-6">
                      {/* Title Product */}
                      <div className="clearfix title-box full-width border">
                        <div className="clearfix name-title-box title-category title-magenta-bg relative">
                          <img src="img/icon_mother.png" alt="Icon Mother" className="absolute" />
                          <p>mother &amp; baby</p>
                        </div>
                        <div className="clearfix menu-title-box">
                          <p className="view-all-product-category title-hover-red"><Link to="#" className="animate-default">view all</Link></p>
                        </div>
                      </div>
                      <div className=" banner-percent-product overfollow-hidden zoom-image-hover effect-oscar relative">
                        <img src="img/banner_p_2_2.png" className="max-width" alt="Image . . ." />
                        <Link to="#" />
                      </div>
                      {/* Content Product Box */}
                      <div className="clearfix product-percent-content border-collapsed-box full-width">
                        <div className="clearfix relative product-no-ranking border-collapsed-element percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/img_product_small_13-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width title-hover-black"><Link to="#">Aliquam Consequat</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative product-no-ranking border-collapsed-element percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/img_product_small_14-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width title-hover-black"><Link to="#">Aliquam Consequat</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative product-no-ranking border-collapsed-element percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/img_product_small_15-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width title-hover-black"><Link to="#">Cas Meque Metus</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative product-no-ranking border-collapsed-element percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/img_product_small_16-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width title-hover-black"><Link to="#">Donec Ac Tempus</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative product-no-ranking border-collapsed-element percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/img_product_small_17-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width title-hover-black"><Link to="#">Donec Non Est</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative product-no-ranking border-collapsed-element percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/img_product_small_18-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width title-hover-black"><Link to="#">Letraset Sheets</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" clearfix content-right col-md-6 col-sm-6">
                      {/* Title Product */}
                      <div className="clearfix title-box full-width border">
                        <div className="clearfix name-title-box title-category title-orchild-bg relative">
                          <img src="img/icon_auto.png" alt="Icon Auto" className="absolute" />
                          <p>auto &amp; moto</p>
                        </div>
                        <div className="clearfix menu-title-box">
                          <p className="view-all-product-category title-hover-red"><Link to="#" className="animate-default">view all</Link></p>
                        </div>
                      </div>
                      <div className=" banner-percent-product overfollow-hidden zoom-image-hover effect-oscar relative">
                        <img src="img/banner_p_2_3.png" className="max-width" alt="Image . . ." />
                        <Link to="#" />
                      </div>
                      {/* Content Product Box */}
                      <div className="clearfix product-percent-content border-collapsed-box full-width">
                        <div className="clearfix relative product-no-ranking border-collapsed-element percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/img_product_small_19-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width title-hover-black"><Link to="#">Fusce Aliquam</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative product-no-ranking border-collapsed-element percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/img_product_small_20-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width title-hover-black"><Link to="#">Canmentum bar risus</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative product-no-ranking border-collapsed-element percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/img_product_small_21-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width title-hover-black"><Link to="#">Ecurna sceleriq</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative product-no-ranking border-collapsed-element percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/img_product_small_22-min.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width title-hover-black"><Link to="#">Odales enimn</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative product-no-ranking border-collapsed-element percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/img_product_small_23.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width title-hover-black"><Link to="#">Placerat ultriciesus</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                        <div className="clearfix relative product-no-ranking border-collapsed-element percent-content-3">
                          <div className="effect-hover-zoom center-vertical-image">
                            <img src="img/img_product_small_24.png" alt="Product Image . . ." />
                            <Link to="#" />
                          </div>
                          <div className="clearfix absolute name-product-no-ranking">
                            <p className="title-product clearfix full-width title-hover-black"><Link to="#">Placerat ligula</Link></p>
                            <p className="clearfix price-product"><span className="price-old">$700</span> $350</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Product Category Percent 2 */}
            {/* Banner Full With */}
            <div className=" relative full-width bottom-margin-default">
              <div className="clearfix container-web">
                <div className=" container banner_full_width">
                  <div className="row overfollow-hidden banners-effect5 relative">
                    <img src="img/banner_full_width_v3-min.png" alt="Banner Full Width . . ." />
                    <Link to="#" />
                  </div>
                </div>
              </div>
            </div>
            {/* End Banner Full With */}
          </div>
        );
    }

}

export default Isi;