import React, {Component} from 'react'
import RouteFav from './fav'

class RouteFav extends Component {



    render(){
        return(
            <div className="layer fav">
            <div className="main-header">
                <div className="headerback"><i className="fas fa-chevron-left"></i><i className="fas fa-chevron-left"></i></div>
                <img src="assets/logo-black.png" alt="logoimg" className="headerlogo"/>
            </div>
            <div className="fav-container">
                <h2 className="fav-title">Favourites</h2>
                <div className="browse-container">
                    <div className="product">
                        <i className="fas fa-heart"></i>
                        <img src="assets/jacket.jpg" alt="product" className="product-img"/>
                        <div className="pro-title">
                            <h2>Customized Jacket</h2>
                            <p>John Doe<br/><span className="price">$75.00</span></p>

                        </div>
                    </div>
                    <div className="product">
                        <i className="fas fa-heart"></i>
                        <img src="assets/jacket.jpg" alt="product" className="product-img"/>
                        <div className="pro-title">
                            <h2>Customized Jacket</h2>
                            <p>John Doe<br/><span className="price">$75.00</span></p>

                        </div>
                    </div>
                    <div className="product">
                        <i className="fas fa-heart"></i>
                        <img src="assets/jacket.jpg" alt="product" className="product-img"/>
                        <div className="pro-title">
                            <h2>Customized Jacket</h2>
                            <p>John Doe<br/><span className="price">$75.00</span></p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="main-footer">
                <div className="nav home">
                    <i className="fas fa-home"></i>
                </div>
                <div className="nav cart">
                    <i className="fas fa-shopping-cart"></i>
                </div>
                <div className="nav fav nav-on">
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

export default RouteFav;