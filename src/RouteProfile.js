import React, {Component} from 'react'
import RouteAdd from './add'
import RouteEdit from './edit'
import RouteSetting from './setting'
import RouteCheckout from './checkout'
import RouteBrowse from './browse'
import RouteFav from './fav'
import RouteProfile from './profile'



class RouteProfile extends Component {



    render(){
        return(
            <div className="layer profile ">
                <div className="shape angle"></div>
                <div className="main-header">
                    <div className="headerback"><i className="fas fa-chevron-left"></i><i className="fas fa-chevron-left"></i></div>
                    <img src="assets/logo-white.png" alt="logoimg" className="headerlogo"/>
                    <i className="fas fa-cog"></i>
                </div>
                <div className="profilehead">
                    <img src="assets/profile.jpeg" alt="profileimg" className="profileimg"/>
                    <div className="profiledp">
                        <h3>John Doe<span className="profile-edit"><i className="fas fa-pen"></i></span></h3>
                        <p><i className="fas fa-map-marker-alt"></i> Toronto,Canada</p> 
                        <p><i className="fas fa-envelope"></i>JohnDoe@gmail.com</p>
                    </div>
                </div>
                <div className="bio">
                    <h1>Bio</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste vero explicabo libero obcaecati asperiores soluta enim blanditiis similique, quidem maiores.</p>
                    
                </div>
                <div className="addproduct">
                    <h1>My Products</h1>
                    <div className="addbtn">
                        <p>Add Product </p><i className="fas fa-plus-circle"></i>
                    </div>
                    
                </div>
                <div className="browse-container">
                    <div className="product">
                        <img src="assets/jacket.jpg" alt="product" className="product-img"/>
                        <div className="pro-title">
                            <h2>Customized Jacket</h2>
                            <p>John Doe<br/><span className="price">$75.00</span></p>

                        </div>
                    </div>
                    <div className="product">
                        <img src="assets/jacket.jpg" alt="product" className="product-img"/>
                        <div className="pro-title">
                            <h2>Customized Jacket</h2>
                            <p>John Doe<br/><span className="price">$75.00</span></p>

                        </div>
                    </div>
                    <div className="product">
                        <img src="assets/jacket.jpg" alt="product" className="product-img"/>
                        <div className="pro-title">
                            <h2>Customized Jacket</h2>
                            <p>John Doe<br/><span className="price">$75.00</span></p>

                        </div>
                    </div>
                    <div className="product">
                        <img src="assets/jacket.jpg" alt="product" className="product-img"/>
                        <div className="pro-title">
                            <h2>Customized Jacket</h2>
                            <p>John Doe<br/><span className="price">$75.00</span></p>

                        </div>
                    </div>
                    <div className="product">
                        <img src="assets/jacket.jpg" alt="product" className="product-img"/>
                        <div className="pro-title">
                            <h2>Customized Jacket</h2>
                            <p>John Doe<br/><span className="price">$75.00</span></p>

                        </div>
                    </div>
                    <div className="product">
                        <img src="assets/jacket.jpg" alt="product" className="product-img"/>
                        <div className="pro-title">
                            <h2>Customized Jacket</h2>
                            <p>John Doe<br/><span className="price">$75.00</span></p>

                        </div>
                    </div>
                </div>
                <div className="main-footer">
                    <div className="nav home ">
                        <i className="fas fa-home"></i>
                    </div>
                    <div className="nav cart">
                        <i className="fas fa-shopping-cart"></i>
                    </div>
                    <div className="nav fav">
                        <i className="fas fa-heart"></i>
                    </div>
                    <div className="nav profile nav-on">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default RouteProfile;