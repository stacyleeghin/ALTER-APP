import React, {Component} from 'react'
import { Link, navigate } from '@reach/router'
import API from './API';
// import RouteBrowse from './browse'
// import RouteHome from './home'




class RouteLogin extends Component {

    constructor(props){
        super(props);
        this.state = {
            message: ''
        }
    }
    handleFormSubmit = (e) => {
        e.preventDefault()
        var formData = new FormData (this.form);
        var data = {
            username:formData.get('username'),
            password:formData.get('password'),

        }

        var {setCurrentUser} = this.props

        API.authenticate(data)
        .then(res => {
            var user = res.data
            return user
        })
        .then(user => {
            if(user){
              setCurrentUser(user)
              localStorage.setItem('userId',user.id)
              navigate('/profile')
            }else{
                this.setState({message:'Try again'})
            }
        })

    }


    render(){
        return(
            <div className="layer login">
            <div className="header">
                <div className="backicon"><Link to="/"><i className="fas fa-chevron-left"></i><i className="fas fa-chevron-left"></i></Link></div>
                <img src="assets/logo-white.png" alt="logoimg" className="logoimg"/>
            </div>
            <img src="assets/jacket.png" alt="loginimg" className="loginimg"/>
            <div className="signin-container">
                {/* <h1>Log In  <span className="icons"><i className="fas fa-chevron-right"></i><i className="fas fa-chevron-right"></i></span></h1> */}

                <form id="loginform" onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}>

                    <div className="pure-control-group">
                        <input id="email" type="text" name="username" placeholder="User Id"/>
                    </div>
                    <div className="pure-control-group">
                        <input id="password" type="password" name="password" placeholder="Password"/>
                    </div>
                    <button type="submit" className="login-button">Log In</button>
                </form>
            </div>
        </div>
        
        )
        
    }
}

export default RouteLogin;