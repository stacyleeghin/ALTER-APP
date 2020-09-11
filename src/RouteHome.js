import React, {Component} from 'react'
import { Link } from '@reach/router'
// import RouteSignup from './signup'
// import RouteLogin from './login'

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
                    <Link to="/login"><a href="#" className="login-btn">Log In</a></Link>
                </div>
            </div>
        )
    }
}

export default RouteHome;