import React, {Component} from 'react'
import { Link } from '@reach/router'
// import RouteCheckout from './checkout'
// import RouteBrowse from './browse'
// import RouteProfile from './profile'


class RouteFav extends Component {



    render(){
        return(
            <div className="layer fav">
            <div className="main-header">
            <div className="headerback"><Link to="/browse"><i className="fas fa-chevron-left"></i><i className="fas fa-chevron-left"></i></Link></div>
                <img src="assets/logo-black.png" alt="logoimg" className="headerlogo"/>
            </div>
            <div className="fav-container">
                <h2 className="fav-title">Favourites</h2>
                <div className="browse-container">
                    <div className="product">
                        <i className="fas fa-heart"></i>
                        <img src="assets/jacket11.jpg" alt="product" className="product-img"/>
                        <div className="pro-title">
                            <h2>Customized Jacket</h2>
                            <p>John Doe<br/><span className="price">$75.00</span></p>

                        </div>
                    </div>
                    <div className="product">
                        <i className="fas fa-heart"></i>
                        <img src="assets/jacket12.jpg" alt="product" className="product-img"/>
                        <div className="pro-title">
                            <h2>Customized Jacket</h2>
                            <p>John Doe<br/><span className="price">$75.00</span></p>

                        </div>
                    </div>
                    <div className="product">
                        <i className="fas fa-heart"></i>
                        <img src="assets/jacket2.jpg" alt="product" className="product-img"/>
                        <div className="pro-title">
                            <h2>Customized Jacket</h2>
                            <p>John Doe<br/><span className="price">$75.00</span></p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="main-footer">
                    <div className="nav home">
                        <Link to="/browse"><i className="fas fa-home"></i></Link>
                    </div>
                    <div className="nav cart">
                        <Link to="/checkout"><i className="fas fa-shopping-cart"></i></Link>
                    </div>
                    <div className="nav fav nav-on">
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

export default RouteFav;