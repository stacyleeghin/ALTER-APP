import React, { Component } from 'react';
import { Router, Link, navigate} from '@reach/router'
import API from './API'

import RouteHome from './RouteHome.js';
import RouteDetail from './RouteDetail.js';
import RouteProfile from './RouteProfile.js';
import RouteAdd from './RouteAdd.js';
import RouteCheckout from './RouteCheckout.js';
import RouteFav from './RouteFav.js';
import RouteEdit from './RouteEdit.js';
import RouteBrowse from './RouteBrowse.js';


import './style.scss';
import RouteSignup from './RouteSignup.js';
import RouteSetting from './RouteSetting.js';
import RouteOthersProfile from './RouteOthersProfile.js';
import RouteLogin from './RouteLogin.js';
import RouteBrowseDetail from './RouteBrowseDetail';


class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      currentUser: null
    }

  }

  setCurrentUser = (user) => {
    this.setState({currentUser:user})
  }

  componentDidMount(){


    //local storage
    var userId = localStorage.getItem('userId')
    if(userId){
      API.getSingleUser(userId).then(res => this.setState({currentUser:res.data}))
    }
  }

  render (){

    return(
      <div className="app">
        
        <Router>
          <RouteHome path="/" />
          <RouteLogin setCurrentUser={this.setCurrentUser} path="/login" />
          <RouteSignup path="/signup" />
          <RouteBrowse path="/browse" />
          <RouteBrowseDetail path="/browse-detail" />
          <RouteDetail path="/detail/:id" />
          <RouteProfile path="/profile" />
          <RouteOthersProfile path="/othersprofile" />
          <RouteAdd path="/add"/>
          <RouteSetting path="/setting" />
          <RouteCheckout path="/checkout" />
          <RouteFav path="/fav" />
          <RouteEdit path="/edit/:id" />
      
        </Router>
      </div>

    )

  }
}


export default App;
