import React, { Component } from 'react';
import {Link} from "react-router-dom";



class Header extends Component {
    
            

    render(){
        return (
          
            <header className="relative full-width">
            <div className=" container-web relative">
              <div className=" container">
                <div className="row">
                  <div className=" header-top">
                    <p className="contact_us_header col-md-4 col-xs-12 col-sm-3 clear-margin">
                      <img src="img/icon_phone_top.png" alt="Icon Phone Top Header" /> Call us <span className="text-red bold">070-7782-7137</span>
                    </p>
                    <div className="menu-header-top text-right col-md-8 col-xs-12 col-sm-6 clear-padding">
                      <ul className="clear-margin">
                        <li className="relative"><Link to="#">My Account</Link></li>
                        <li className="relative"><Link to="#">Wishlist</Link></li>
                        <li className="relative">
                          <Link to="#">EN</Link>
                          <ul>
                            <li className="relative"><Link to="#">JP</Link></li>
                            <li className="relative"><Link to="#">EN</Link></li>
                            <li className="relative"><Link to="#">CN</Link></li>
                          </ul>
                        </li>
                        <li className="relative">
                          <Link to="#">USD</Link>
                          <ul>
                            <li className="relative"><Link to="#">AUD</Link></li>
                            <li className="relative"><Link to="#">USD</Link></li>
                            <li className="relative"><Link to="#">CAD</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="clearfix header-content full-width relative">
                    <div className="clearfix icon-menu-bar">
                      <i className="data-icon data-icon-arrows icon-arrows-hamburger-2 icon-pushmenu js-push-menu" />
                    </div>
                    <div className="clearfix logo">
                      <Link to="#"><img alt="Logo" src="img/logo.png" /></Link>
                    </div>
                    <div className="clearfix search-box relative float-left">
                      <form method="GET" action="/" className>
                        <div className="clearfix category-box relative">
                          <select name="cate_search">
                            <option>All Category</option>
                            <option>Food</option>
                            <option>Mobile &amp; Tablet</option>
                            <option>Electric Appliances</option>
                            <option>Electronics &amp; Technology</option>
                            <option>Fashion</option>
                            <option>Health &amp; Beauty</option>
                            <option>Mother &amp; Baby</option>
                            <option>Books &amp; Stationery</option>
                            <option>Home &amp; Life</option>
                            <option>Sports &amp; Outdoors</option>
                            <option>Auto &amp; Moto</option>
                            <option>Voucher Service</option>
                          </select>
                        </div>
                        <input type="text" name="s" placeholder="Enter keyword here . . ." />
                        <button type="submit" className="animate-default button-hover-red">Search</button>
                      </form>
                    </div>
                    <div className="clearfix icon-search-mobile absolute">
                      <i onclick="showBoxSearchMobile()" className="data-icon data-icon-basic icon-basic-magnifier" />
                    </div>
                    <div className="clearfix cart-website absolute" onclick="showCartBoxDetail()">
                      <img alt="Icon Cart" src="img/icon_cart.png" />
                      <p className="count-total-shopping absolute">2</p>
                    </div>
                    <div className="clearfix cart-website absolute" onclick="showCartBoxDetail()">
                      <img alt="Icon Cart" src="img/icon_cart.png" />
                      <p className="count-total-shopping absolute">2</p>
                    </div>
                    <div className="cart-detail-header border">
                      <div className="relative">
                        <div className="product-cart-son clearfix">
                          <div className="image-product-cart float-left center-vertical-image ">
                            <Link to="#"><img src="img/product_image_6-min.png" alt="" /></Link>
                          </div>
                          <div className="info-product-cart float-left">
                            <p className="title-product title-hover-black"><Link className="animate-default" to="#">MH02-Black09</Link></p>
                            <p className="clearfix price-product">$350 <span className="total-product-cart-son">(x1)</span></p>
                          </div>
                        </div>
                        <div className="product-cart-son">
                          <div className="image-product-cart float-left center-vertical-image">
                            <Link to="#"><img src="img/product_image_7-min.png" alt="" /></Link>
                          </div>
                          <div className="info-product-cart float-left">
                            <p className="title-product title-hover-black"><Link className="animate-default" to="#">Voyage Yoga Bag</Link></p>
                            <p className="clearfix price-product">$350 <span className="total-product-cart-son">(x1)</span></p>
                          </div>
                        </div>
                      </div>
                      <div className="relative border no-border-l no-border-r total-cart-header">
                        <p className="bold clear-margin">Subtotal:</p>
                        <p className=" clear-margin bold">$700</p>
                      </div>
                      <div className="relative btn-cart-header">
                        <Link to="#" className="uppercase bold animate-default">view cart</Link>
                        <Link to="#" className="uppercase bold button-hover-red animate-default">checkout</Link>
                      </div>
                    </div>
                    <div className="mask-search absolute clearfix" onclick="hiddenBoxSearchMobile()" />
                    <div className="clearfix box-search-mobile">
                    </div>
                  </div>
                </div>
                <div className="row">
                  <Link className="menu-vertical hidden-md hidden-lg" onclick="showMenuMobie()">
                    <span className="animate-default"><i className="fa fa-list" aria-hidden="true" /> all categories</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="menu-header-v3 hidden-ipx">
              <div className="container">
                <div className="row">
                  {/* Menu Page */}
                  <div className="menu-header full-width">
                    <ul className="clear-margin">
                      <li onclick="showMenuHomeV3()"><Link className="animate-default" to="#"><i className="fa fa-list" aria-hidden="true" /> all categories</Link></li>
                      <li className="title-hover-red">
                        <Link className="animate-default" to="#">home</Link>
                        <ul className="sub-menu mega-menu">
                          <li className="relative">
                            <Link className="animate-default center-vertical-image" to="home_v1.html"><img src="img/home_1_menu-min.png" alt="" /></Link>
                            <p><Link to="home_v1.html">Home 1</Link></p>
                          </li>
                          <li className="relative">
                            <Link className="animate-default center-vertical-image" to="home_v2.html"><img src="img/home_2_menu-min.png" alt="" /></Link>
                            <p><Link to="home_v2.html">Home 2</Link></p>
                          </li>
                          <li className="relative">
                            <Link className="animate-default center-vertical-image" to="home_v3.html"><img src="img/home_3_menu-min.png" alt="" /></Link>
                            <p><Link to="home_v3.html">Home 3</Link></p>
                          </li>
                        </ul>
                      </li>
                      <li className="title-hover-red">
                        <Link className="animate-default" to="#">shop</Link>
                        <div className="sub-menu mega-menu-v2">
                          <ul>
                            <li>Catgory Type</li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="category_v1.html">Category v1</Link></li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="category_v1_2.html">Category v1.2</Link></li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="category_v2.html">Category v2</Link></li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="category_v2_2.html">Category v2.2</Link></li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="category_v3.html">Category v3</Link></li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="category_v3_2.html">Category v3.2</Link></li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="category_v4.html">Category v4</Link></li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="category_v4_2.html">Category v4.2</Link></li>
                          </ul>
                          <ul>
                            <li>Single Product Type</li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="product_v1.html">Product Single 1</Link></li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="product_v2.html">Product Single 2</Link></li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="product_v3.html">Product Single 3</Link></li>
                          </ul>
                          <ul>
                            <li>Order Page</li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="cartpage.html">Cart Page</Link></li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="checkout.html">Checkout</Link></li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="compare.html">Compare</Link></li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="quickview.html">QuickView</Link></li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="trackyourorder.html">Track Order</Link></li>
                            <li className="title-hover-red"><Link className="animate-default clear-padding" to="wishlist.html">WishList</Link></li>
                          </ul>
                        </div>
                      </li>
                      <li className="title-hover-red">
                        <Link className="animate-default" to="#">pages</Link>
                        <ul>
                          <li className="title-hover-red"><Link className="animate-default" to="about.html">About Us</Link></li>
                          <li className="title-hover-red"><Link className="animate-default" to="contact.html">Contact</Link></li>
                          <li className="title-hover-red"><Link className="animate-default" to="404.html">404</Link></li>
                        </ul>
                      </li>
                      <li className="title-hover-red">
                        <Link className="animate-default" to="#">Blog</Link>
                        <ul>
                          <li className="title-hover-red"><Link className="animate-default" to="blog.html">Blog Category</Link></li>
                          <li className="title-hover-red"><Link className="animate-default" to="blogdetail.html">Blog Detail</Link></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  {/* End Menu Page */}
                </div>
              </div>
            </div>
            <div className="clearfix menu_more_header menu-web menu-bg-white">
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
            <div className="header-ontop">
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="clearfix logo">
                      <Link to="#"><img alt="Logo" src="img/logo.png" /></Link>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="menu-header">
                      <ul className="main__menu clear-margin">
                        <li className="title-hover-red">
                          <Link className="animate-default" to="#">home</Link>
                          <ul className="sub-menu mega-menu">
                            <li className="relative">
                              <Link className="animate-default center-vertical-image" to="home_v1.html"><img src="img/home_1_menu-min.png" alt="" /></Link>
                              <p><Link to="home_v1.html">Home 1</Link></p>
                            </li>
                            <li className="relative">
                              <Link className="animate-default center-vertical-image" to="home_v2.html"><img src="img/home_2_menu-min.png" alt="" /></Link>
                              <p><Link to="home_v2.html">Home 2</Link></p>
                            </li>
                            <li className="relative">
                              <Link className="animate-default center-vertical-image" to="home_v3.html"><img src="img/home_3_menu-min.png" alt="" /></Link>
                              <p><Link to="home_v3.html">Home 3</Link></p>
                            </li>
                          </ul>
                        </li>
                        <li className="title-hover-red">
                          <Link className="animate-default" to="#">shop</Link>
                          <div className="sub-menu mega-menu-v2">
                            <ul>
                              <li>Catgory Type</li>
                              <li className="title-hover-red"><Link className="animate-default clear-padding" to="category_v1.html">Category v1</Link></li>
                              <li className="title-hover-red"><Link className="animate-default clear-padding" to="category_v1_2.html">Category v1.2</Link></li>
                              <li className="title-hover-red"><Link className="animate-default clear-padding" to="category_v2.html">Category v2</Link></li>
                              <li className="title-hover-red"><Link className="animate-default clear-padding" to="category_v2_2.html">Category v2.2</Link></li>
                              <li className="title-hover-red"><Link className="animate-default clear-padding" to="category_v3.html">Category v3</Link></li>
                              <li className="title-hover-red"><Link className="animate-default clear-padding" to="category_v3_2.html">Category v3.2</Link></li>
                              <li className="title-hover-red"><Link className="animate-default clear-padding" to="category_v4.html">Category v4</Link></li>
                              <li className="title-hover-red"><Link className="animate-default clear-padding" to="category_v4_2.html">Category v4.2</Link></li>
                            </ul>
                            <ul>
                              <li>Single Product Type</li>
                              <li className="title-hover-red"><Link className="animate-default clear-padding" to="product_v1.html">Product Single 1</Link></li>
                              <li className="title-hover-red"><Link className="animate-default clear-padding" to="product_v2.html">Product Single 2</Link></li>
                              <li className="title-hover-red"><Link className="animate-default clear-padding" to="product_v3.html">Product Single 3</Link></li>
                            </ul>
                            <ul>
                              <li>Order Page</li>
                              <li className="title-hover-red"><Link className="animate-default clear-padding" to="cartpage.html">Cart Page</Link></li>
                              <li className="title-hover-red"><Link className="animate-default clear-padding" to="checkout.html">Checkout</Link></li>
                              <li className="title-hover-red"><Link className="animate-default clear-padding" to="compare.html">Compare</Link></li>
                              <li className="title-hover-red"><Link className="animate-default clear-padding" to="quickview.html">QuickView</Link></li>
                              <li className="title-hover-red"><Link className="animate-default clear-padding" to="trackyourorder.html">Track Order</Link></li>
                              <li className="title-hover-red"><Link className="animate-default clear-padding" to="wishlist.html">WishList</Link></li>
                            </ul>
                          </div>
                        </li>
                        <li className="title-hover-red">
                          <Link className="animate-default" to="#">pages</Link>
                          <ul>
                            <li className="title-hover-red"><Link className="animate-default" to="about.html">About Us</Link></li>
                            <li className="title-hover-red"><Link className="animate-default" to="contact.html">Contact</Link></li>
                            <li className="title-hover-red"><Link className="animate-default" to="404.html">404</Link></li>
                          </ul>
                        </li>
                        <li className="title-hover-red">
                          <Link className="animate-default" to="#">Blog</Link>
                          <ul>
                            <li className="title-hover-red"><Link className="animate-default" to="blog.html">Blog Category</Link></li>
                            <li className="title-hover-red"><Link className="animate-default" to="blogdetail.html">Blog Detail</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        );
    }

}

export default Header;