import React, {Component} from 'react'
import { Link } from '@reach/router'
// import RouteCheckout from './checkout'
// import RouteBrowse from './browse'
// import RouteFav from './fav'
// import RouteProfile from './profile'



class RouteSetting extends Component {



    render(){
        return(
            <div className="layer setting ">
            <div className="main-header">
            <div className="headerback"><Link to="/profile"><i className="fas fa-chevron-left"></i><i className="fas fa-chevron-left"></i></Link></div>
                <img src="assets/logo-black.png" alt="logoimg" className="headerlogo"/>
            </div>
            <div className="setting-list">
                <h1>Settings<i className="fas fa-cog"></i></h1>
                <ul>
                    <li>Accounts<i className="fas fa-chevron-right"></i></li>
                    <li>Payment<i className="fas fa-chevron-right"></i></li>
                    <li>Activity status<i className="fas fa-chevron-right"></i></li>
                    <li>Notifications<i className="fas fa-chevron-right"></i></li>
                    <li>Privacy<i className="fas fa-chevron-right"></i></li>
                    <li>Log Out<i className="fas fa-sign-out-alt"></i></li>
                </ul>
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

export default RouteSetting;