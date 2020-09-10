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


class App extends Component{

constructor(props){
  super(props)

  }

  render (){

    return(
      <div className="app">
        
        <Router>
          <RouteHome path="home" />
          <RouteLogin path="login" />
          <RouteSignup path="signup" />
          <RouteBrowse path="browse" />
          <RouteDetail path="detail" />
          <RouteProfile path="profile" />
          <RouteOthersProfile path="othersprofile" />
          <RouteAdd path="add"/>
          <RouteSetting path="setting" />
          <RouteCheckout path="checkout" />
          <RouteFav path="fav" />
          <RouteEdit path="edit" />
      
        </Router>
      </div>

    )

  }
}


export default App;
