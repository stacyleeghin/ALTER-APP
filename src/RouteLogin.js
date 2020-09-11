import React, {Component} from 'react'
import { Link } from '@reach/router'
// import RouteBrowse from './browse'
// import RouteHome from './home'




class RouteLogin extends Component {



    render(){
        return(
            <div className="layer login">
            <div className="header">
                <div className="backicon"><Link to="/"><i className="fas fa-chevron-left"></i><i className="fas fa-chevron-left"></i></Link></div>
                <img src="assets/logo-white.png" alt="logoimg" className="logoimg"/>
            </div>
            <img src="assets/jacket.png" alt="loginimg" className="loginimg"/>
            <div className="signin-container">
                <h1>Log In  <span className="icons"><i className="fas fa-chevron-right"></i><i className="fas fa-chevron-right"></i></span></h1>
                <form id="loginform">
                
                    <div className="pure-control-group">
                        <input id="email" type="text" name="username" placeholder="User Id"/>
                    </div>
                    <div className="pure-control-group">
                        <input id="password" type="password" name="password" placeholder="Password"/>
                    </div>
                    <Link to="/browse"><button type="submit" className="login-button">Log In</button></Link>
                </form>
            </div>
        </div>
        
        )
        
    }
}

export default RouteLogin;