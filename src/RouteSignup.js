import React, {Component} from 'react'
import { Link, navigate} from '@reach/router'

import API from './API'


class RouteSignup extends Component {

    handleFormSubmit = (e) => {
        e.preventDefault()
        var formData = new FormData(this.form);

        var data = {
        
            email:formData.get('email'),
            username:formData.get('username'),
            password:formData.get('password'),
            // confirm:formData.get('password')
            
        }
        API.addUser(data).then(res => navigate ('/login'))

    }
      
    render(){
        return (

        

            <div className="layer signup ">
            <div className="header">
                <div className="backicon"><Link to="/"><i className="fas fa-chevron-left"></i><i className="fas fa-chevron-left"></i></Link></div>
                <img src="assets/logo-white.png" alt="logoimg" className="logoimg"/>
            </div>
            
            <div className="signin-container">
                <h1>Sign Up  <span className="icons"><i className="fas fa-chevron-right"></i><i className="fas fa-chevron-right"></i></span></h1>
                <form id="signupform" onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}>
                    
                    <div className="pure-control-group">
                        <input id="login-email" type="email" name="email" placeholder="Email Address"/> 
                    </div>
                    <div className="pure-control-group">
                        <input id="login-name" type="text" name="username" placeholder="Username"/>
                    </div>
                    <div className="pure-control-group">
                        <input id="login-password" type="password" name="password" placeholder="Password"/>
                    </div>
                    <div className="pure-control-group">
                        <input id="confirm-password" type="password" name="password" placeholder="Confirm Password"/>
                    </div>
                   <button type="submit" className="login-button">Create Account</button>
                </form>
            </div>
        </div>
       

        )
    }
}

export default RouteSignup;