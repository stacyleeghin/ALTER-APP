import React, {Component} from 'react'
import RouteBrowse from './browse'
// import API from './API'


class RouteBrowse extends Component {

    render (){
        return (
            <div className="layer browse">
                <div className="browse-header">
                    <img src="assets/logo-black.png" alt="logoimg" className="logoimg"/>
                    <div className="search">
                        <button type="submit"><i className="fa fa-search"></i></button>
                        <input type="text" className="search-bar" style="font-family:FontAwesome"/>
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
                        <img src="assets/jacket.jpg" alt="product" className="product-img"/>
                        <div className="pro-title">
                            <h2>Customized Jacket</h2>
                            <p>John Doe<br><span className="price">$75.00</span></p>

                        </div>
                    </div>
                    <div className="product">
                        <img src="assets/jacket.jpg" alt="product" className="product-img"/>
                        <div className="pro-title">
                            <h2>Customized Jacket</h2>
                            <p>John Doe<br><span className="price">$75.00</span></p>

                        </div>
                    </div>
                    <div className="product">
                        <img src="assets/jacket.jpg" alt="product" className="product-img"/>
                        <div className="pro-title">
                            <h2>Customized Jacket</h2>
                            <p>John Doe<br><span className="price">$75.00</span></p>

                        </div>
                    </div>
                    <div className="product">
                        <img src="assets/jacket.jpg" alt="product" className="product-img"/>
                        <div className="pro-title">
                            <h2>Customized Jacket</h2>
                            <p>John Doe<br><span className="price">$75.00</span></p>

                        </div>
                    </div>
                    <div className="product">
                        <img src="assets/jacket.jpg" alt="product" className="product-img"/>
                        <div className="pro-title">
                            <h2>Customized Jacket</h2>
                            <p>John Doe<br><span className="price">$75.00</span></p>

                        </div>
                    </div>
                    <div className="product">
                        <img src="assets/jacket.jpg" alt="product" className="product-img"/>
                        <div className="pro-title">
                            <h2>Customized Jacket</h2>
                            <p>John Doe<br><span className="price">$75.00</span></p>

                        </div>
                    </div>
                </div>
                <div className="main-footer">
                    <div className="nav home nav-on">
                        <i className="fas fa-home"></i>
                    </div>
                    <div className="nav cart">
                        <i className="fas fa-shopping-cart"></i>
                    </div>
                    <div className="nav fav">
                        <i className="fas fa-heart"></i>
                    </div>
                    <div className="nav profile">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
        </div>
        )
    }
}

export default RouteBrowse;