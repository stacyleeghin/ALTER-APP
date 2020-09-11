import React, {Component} from 'react'
import { Link } from '@reach/router'
// import RouteCheckout from './checkout'
// import RouteBrowse from './browse'
// import RouteFav from './fav'
// import RouteProfile from './profile'


class RouteEdit extends Component {



    render(){
        return(

            <div className="layer edit ">
                <div className="main-header">
                <div className="headerback"><Link to="/detail"><i className="fas fa-chevron-left"></i><i className="fas fa-chevron-left"></i></Link></div>
                    <img src="assets/logo-white.png" alt="logoimg" className="headerlogo"/>
                </div>
                <div className="item-detail-img-container">
                    <img src="assets/jacket.jpg" alt="product"/>
                </div>
                <div className="item-detail-content-wrap">
                    
                    <div className="item-detail-header-container">
                        <h3 className="item-detail-title">New Item</h3>
                        <p className="item-detail-price">$00.00</p>
                    </div>
                    <div className="item-detail-subhead-container">
                    </div>
                    <div className="item-user-container">
                        <div className="item-user-dp">
                            <img src="/assets/user1.jpeg" alt="user"/>
                        </div>
                        <div className="item-user-info-container">
                            <p className="item-user item-user-name">Ruel Vincent</p>
                            <p className="item-user item-user-address">Auckland, New Zealand</p>
                        </div>
                    </div>
                    <div className="item-input-container">
                        <p className="item-input-title">
                            Name
                        </p>
                        <p className="item-desc hide">
                            Denim jacket finished with distressed detailing.Point collar. Long sleeves. Buttoned barrel cuffs. Button front.About 23" from shoulder to hem. Cotton. Machine wash.
                        </p>
                        <input type="text" name="name" id="name-input" className="edit-input" placeholder="Denim jacket finished"/>
                        
                    </div>
                    <div className="item-input-container">
                        <p className="item-input-title">
                            Price
                        </p>
                        <p className="item-desc hide">
                            Denim jacket finished with distressed detailing.Point collar. Long sleeves. Buttoned barrel cuffs. Button front.About 23" from shoulder to hem. Cotton. Machine wash.
                        </p>
                        <input type="text" name="price" id="price-input" className="edit-input" placeholder="70.00"/>
                    </div>
                    <div className="item-input-container">
                        <p className="item-input-title">
                            Description
                        </p>
                        <p className="item-desc hide">
                            Denim jacket finished with distressed detailing.Point collar. Long sleeves. Buttoned barrel cuffs. Button front.About 23" from shoulder to hem. Cotton. Machine wash.
                        </p>
                        <textarea name="name" id="name" className="edit-input">
                        </textarea>
                    </div>
                    <div className="item-input-container">
                        <p className="item-input-title">
                            Shipping Info
                        </p>
                        <p className="item-ship hide">
                            Shipping to New Zealand only. $15 for country wide express shipping.
                        </p>
                        <textarea name="name" id="name" className="edit-input">
                        </textarea>
                    </div>
                    <div className="edit-btn-container">
                        <Link to="/profile"><button className="delete-btn">
                            Delete Product
                        </button></Link>
                        <Link to="/profile"> <button className="save-btn">
                            Save
                        </button></Link>
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
                    <div className="nav profile">
                        <Link to="/profile"><i className="fas fa-user"></i></Link>
                    </div>
                </div>
            </div>

        )
    }
}

export default RouteEdit;