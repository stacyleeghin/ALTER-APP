import React, {Component} from 'react'
import API from './API'
import {Link} from '@reach/router'
import Product from './Product'


class RouteProfile extends Component {

    constructor(props){
        super(props)
        this.state = {

            ClothingItems:[
               
            ]
        }
    }
    loadProfile = () => {
        API.getClothing().then(res => {
            this.setState({ClothingItems:res.data})
        })
    }
    componentDidMount(){
        this.loadProfile();
    }

    render(){
  

        return(
            <div className="layer profile ">
                    <div className="shape angle"></div>
                    <div className="main-header">
                        <Link to= "/"><div className="headerback"><i className="fas fa-chevron-left"></i><i className="fas fa-chevron-left"></i></div></Link>
                        <img src="assets/logo-white.png" alt="logoimg" className="headerlogo"/>
                        <i className="fas fa-cog"></i>
                    </div>
                    <div className="profilehead">
                        <img src="assets/profile.jpeg" alt="profileimg" className="profileimg"/>
                        <div className="profiledp">
                            <h3>John Doe<span className="profile-edit"><i className="fas fa-pen"></i></span></h3>
                            <p><i className="fas fa-map-marker-alt"></i> Toronto,Canada</p> 
                            <p><i className="fas fa-envelope"></i>JohnDoe@gmail.com</p>
                        </div>
                    </div>
                    <div className="bio">
                        <h1>Bio</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste vero explicabo libero obcaecati asperiores soluta enim blanditiis similique, quidem maiores.</p>
                        
                    </div>
                    <div className="addproduct">
                        <h1>My Products</h1>
                        <div className="addbtn">
                            <Link to="/add"><p>Add Product </p><i className="fas fa-plus-circle"></i></Link>
                        </div>
                        
                    </div>
                    <div className="browse-container">
                        {
                           this.state.ClothingItems.map((product) => {
                                
                                var productProps = {
                                    ...product,
                                    key: product.id,
                                    loadProfile:this.loadProfile
                                };
                                return (<Product {...productProps} />)
                               
                           })
                        }
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

export default RouteProfile;