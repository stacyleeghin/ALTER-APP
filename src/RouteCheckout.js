import React, {Component} from 'react'
// import RouteBrowse from './browse'
// import RouteFav from './fav'
// import RouteProfile from './profile'


class RouteCheckout extends Component {



    render(){

        return(
            <div className="layer checkout ">
                <div className="main-header">
                    <div className="headerback"><i className="fas fa-chevron-left"></i><i className="fas fa-chevron-left"></i></div>
                    <img src="assets/logo-black.png" alt="logoimg" className="headerlogo"/>
                </div>
            
                <div className="main-checkout">
                    <div className="subtitle">
                        <h1>My Cart</h1>
                    </div>
                    <div className="cart-item item-one">
                        <div className="cartsec1">
                            <div className="cartpic">
                                <img src="assets/jacket.jpg" alt="jacket"/>
                            </div>
                            <div className="cartdes">
                                <h3>Customized Jacket Title</h3>
                                <h6>Ruel Vincent</h6>
                                <h3 className="price">$75.00</h3>
                            
                                <div className="trashicon">
                                    <i className="far fa-trash-alt"></i>
                                </div>
                            </div>
                            
                        </div>
        
                    </div>
                    <div className="cart-item item-one ">
                        <div className="cartsec1">
                            <div className="cartpic">
                                <img src="assets/jacket.jpg" alt="jacket"/>
                            </div>
                            <div className="cartdes">
                                <h3>Customized Jacket Title</h3>
                                <h6>Ruel Vincent</h6>
                                <h3 className="price">$75.00</h3>
                            
                                <div className="trashicon"><i className="far fa-trash-alt"></i></div>
                            
                            </div>
                            
                        </div>
        
                    </div>
                    <div className="cart-item item-one ">
                        <div className="cartsec1">
                            <div className="cartpic">
                                <img src="assets/jacket.jpg" alt="jacket"/>
                            </div>
                            <div className="cartdes">
                                <h3>Customized Jacket Title</h3>
                                <h6>Ruel Vincent</h6>
                                <h3 className="price">$75.00</h3>
                            
                                <div className="trashicon"><i className="far fa-trash-alt"></i></div>
                            
                            </div>
                            
                        </div>
        
                    </div>
                    <div className="cart-item-total">
                        <div className="cartsec1 total-container">
                            <div className="shipping">
                                <h6>Shipping:</h6>
                                <h6>$15.00</h6>
                            </div>
                            <div className="total">
                                <div className="blacktotal">
                                    <h3>Total:</h3>
                                </div>
                                <h3>$290.00</h3>
                            </div>
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

export default RouteCheckout;