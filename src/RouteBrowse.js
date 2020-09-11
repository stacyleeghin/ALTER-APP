import React, {Component} from 'react'
import { Link } from '@reach/router'
// import RouteCheckout from './checkout'
// import RouteDetail from './detail'
// import RouteFav from './fav'
// import RouteProfile from './profile'

// import API from './API'


class RouteBrowse extends Component {


    render (){
        return (
            <div className="layer browse">
                <div className="browse-header">
                    <img src="assets/logo-black.png" alt="logoimg" className="logoimg"/>
                    <div className="search">
                        <button type="submit"><i className="fa fa-search"></i></button>
                        <input type="text" className="search-bar"/>
                    </div>
                </div>
                <div className="category">
                    <div className="category-box on">
                        <div className="category-icon">
                            <img src="assets/icon3.png" alt="top" className="iconimg"/>
                        </div>
                        <p>Top</p>
                    </div>
                    <div className="category-box">
                        <div className="category-icon">
                            <img src="assets/icon2.png" alt="bot" className="iconimg"/>
                        </div>
                        <p>Bottom</p>
                    </div>
                    <div className="category-box">
                        <div className="category-icon">
                            <img src="assets/icon1.png" alt="acc" className="iconimg"/>
                        </div>
                        <p>Acc</p>
                    </div>
                    <div className="category-box">
                        <div className="category-icon">
                            <img src="assets/icon4.png" alt="shoe" className="iconimg"/>
                        </div>
                        <p>Shoes</p>
                    </div>
                </div>
                <div className="browse-container">
                    <div className="product">
                        <Link to="/browse-detail">
                        <img src="assets/jacket11.jpg" alt="product" className="product-img"/>
                        <div className="pro-title">
                            <h2>Customized Jacket</h2>
                            <p>John Doe<br/><span className="price">$75.00</span></p>
                        </div>
                        </Link>
                    </div>
                    <div className="product">
                        <Link to="/browse-detail">
                        <img src="assets/jacket12.jpg" alt="product" className="product-img"/>
                        <div className="pro-title">
                            <h2>Customized Jacket</h2>
                            <p>John Doe<br/><span className="price">$75.00</span></p>
                        </div>
                        </Link>
                    </div>
                    <div className="product">
                        <Link to="/browse-detail">
                        <img src="assets/jacket13.jpg" alt="product" className="product-img"/>
                        <div className="pro-title">
                            <h2>Customized Jacket</h2>
                            <p>John Doe<br/><span className="price">$75.00</span></p>

                        </div>
                        </Link>
                    </div>
                    <div className="product">
                        <Link to="/browse-detail">
                        <img src="assets/jacket14.jpg" alt="product" className="product-img"/>
                        <div className="pro-title">
                            <h2>Customized Jacket</h2>
                            <p>John Doe<br/><span className="price">$75.00</span></p>

                        </div>
                        </Link>
                    </div>
                    <div className="product">
                        <Link to="/browse-detail">
                        <img src="assets/jacket2.jpg" alt="product" className="product-img"/>
                        <div className="pro-title">
                            <h2>Customized Jacket</h2>
                            <p>John Doe<br/><span className="price">$75.00</span></p>

                        </div>
                        </Link>
                    </div>
                    <div className="product">
                        <Link to="/browse-detail">
                        <img src="assets/jacket.jpg" alt="product" className="product-img"/>
                        <div className="pro-title">
                            <h2>Customized Jacket</h2>
                            <p>John Doe<br/><span className="price">$75.00</span></p>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="main-footer">
                    <div className="nav home nav-on">
                        <Link to="/browse"><i className="fas fa-home"></i></Link>
                    </div>
                    <div className="nav cart">
                        <Link to="/checkout"><i className="fas fa-shopping-cart"></i></Link>
                    </div>
                    <div className="nav fav">
                        <Link to="/fav"><i className="fas fa-heart"></i></Link>
                    </div>
                    <div className="nav profile">
                        <Link to="/profile"><i className="fas fa-user"></i></Link>
                    </div>
                </div>
            </div>
        )
    }

}

export default RouteBrowse;