import React, {Component} from 'react'
import { Link, navigate } from '@reach/router'
import API from './API'


class RouteLogin extends Component {

    constructor(props){
        super(props);
        this.state = {
            message:''
        }
    }

    formSubmit = (e) =>{
        e.preventDefault()
        var formData = new FormData(this.form);
        var data = {
            email:formData.get('email'),
            password:formData.get('password')
        }

        var {setCurrentUser} = this.props

        API.authenticate(data)
        .then(res=>{
            var user = res.data
            return user
        })
        .then(user => {
            console.log(user)
            if (user){
                // console.log(user.name + ' has logged in')
                setCurrentUser(user)
                localStorage.setItem('userId', user.id)
                navigate('/browse')
            } else {
                this.setState({message: 'Error - please try again'})
                console.log('error')
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
                <h1>Log In  <span className="icons"><i className="fas fa-chevron-right"></i><i className="fas fa-chevron-right"></i></span></h1>
                <form id="loginform" onSubmit={this.formSubmit} ref={(el)=> {this.form = el}}>
                    <div className="pure-control-group">
                        <input id="email" type="text" name="email" placeholder="Email"/>
                    </div>
                    <div className="pure-control-group">
                        <input id="password" type="password" name="password" placeholder="Password"/>
                    </div>
                    <p className="error-msg">{this.state.message}</p>
                    <button type="submit" className="login-button">Log In</button>
                </form>
            </div>
        </div>
        
        )
        
    }
}

export default RouteLogin;