import React, {Component} from 'react'
import { Link } from '@reach/router'
// import RouteAdd from './add'
// import RouteEdit from './edit'
// import RouteSetting from './setting'
// import RouteCheckout from './checkout'
// import RouteBrowse from './browse'
// import RouteFav from './fav'



class RouteProfile extends Component {



    render(){
        return(
            <div className="layer profile ">
                <div className="shape angle"></div>
                <div className="main-header">
                
                    <img src="assets/logo-white.png" alt="logoimg" className="headerlogo"/>
                    <Link to = "/setting"><i className="fas fa-cog"></i></Link>
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
                    <Link to="/add"><div className="addbtn">
                        <p>Add Product </p><i className="fas fa-plus-circle"></i>
                    </div></Link>
                    
                </div>
                <div className="browse-container">
                    
                    <div className="product">
                        <Link to ="/detail">
                        <img src="assets/jacket.jpg" alt="product" className="product-img"/>
                        <div className="pro-title">
                            <h2>Customized Jacket</h2>
                            <p>John Doe<br/><span className="price">$75.00</span></p>

                        </div>
                        </Link>
                    </div>
                    
                    <div className="product">
                        <Link to ="/detail">
                        <img src="assets/jacket.jpg" alt="product" className="product-img"/>
                        <div className="pro-title">
                            <h2>Customized Jacket</h2>
                            <p>John Doe<br/><span className="price">$75.00</span></p>

                        </div>
                        </Link>
                    </div>
                    <div className="product">
                         <Link to ="/detail">
                        <img src="assets/jacket.jpg" alt="product" className="product-img"/>
                        <div className="pro-title">
                            <h2>Customized Jacket</h2>
                            <p>John Doe<br/><span className="price">$75.00</span></p>

                        </div>
                        </Link>
                    </div>
                    <div className="product">
                        <Link to ="/detail">
                        <img src="assets/jacket.jpg" alt="product" className="product-img"/>
                        <div className="pro-title">
                            <h2>Customized Jacket</h2>
                            <p>John Doe<br/><span className="price">$75.00</span></p>

                        </div>
                        </Link>
                    </div>
                    
                </div>
                <div className="main-footer">
                    <div className="nav home">
                        <Link to="/browse"><i className="fas fa-home"></i></Link>
                    </div>
                    <div className="nav cart">
                        <Link to="/checkout"><i className="fas fa-shopping-cart"></i></Link>
                    </div>
                    <div className="nav fav">
                        <Link to="/fav"><i className="fas fa-heart"></i></Link>
                    </div>
                    <div className="nav profile nav-on">
                        <Link to="/profile"><i className="fas fa-user"></i></Link>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default RouteProfile;