import React, {Component} from 'react'
import RouteCheckout from './checkout'
import RouteBrowse from './browse'
import RouteFav from './fav'
import RouteProfile from './profile'


class RouteSetting extends Component {



    render(){
        return(
            <div className="layer setting ">
            <div className="main-header">
                <div className="headerback"><i className="fas fa-chevron-left"></i><i className="fas fa-chevron-left"></i></div>
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

export default RouteSetting;