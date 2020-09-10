import React, {Component} from 'react'

// import API from './API'

class RouteHome extends Component {



    render(){
        return(
            <div className="layer home ">
                <div className="header">
                    <img src="assets/logo-black.png" alt="logoimg" className="logoimg"/>
                </div>
                
                <img src="assets/homeimg.png" alt="mainimg" className="mainimg"/>
                
                <p>Buy and sell customised one-off apparel. The app for creative trend setters </p>
                <div className="buttons">
                    <a href="#" className="signup-btn">Create Account</a>
                    <a href="#" className="login-btn">Log In</a>
                </div>
            </div>
        )
    }
}

export default RouteHome;