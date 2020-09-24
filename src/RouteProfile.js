import React, {Component} from 'react'
import API from './API'
import {Link} from '@reach/router'
import Product from './Product'

class RouteProfile extends Component {

    constructor(props){
        super(props)
        this.state = {
            ClothingItems:[
                // {

                //     id:1,
                //     name:{this.name},
                //     description:'Hand painted demin jacket',
                //     // photo url:
                //     price: 79.00,
                //     typeId:1,
                //     userId:1,

                // },{

                //     id:2,
                //     name:'Custom Pants',
                //     description:'Hand painted demin jeans',
                //     // photo url:
                //     price: 59.00,
                //     typeId:2,
                //     userId:2,
                // },{

                //     id:3,
                //     name:'Custom Pants',
                //     description:'Hand painted demin jeans',
                //     // photo url:
                //     price: 59.00,
                //     typeId:2,
                //     userId:2,
                // }
            ],
            currentUser:[

            ]
        }
    }

    loadProfile = () => {
        var localId = localStorage.getItem('userId')
        console.log(localId)
        API.getSingleUser(localId).then(res=>{
            this.setState({currentUser:res.data})
        })
    }

    loadProfileClothing = () => {
        API.getClothing().then(res => {
        this.setState({ClothingItems:res.data})
        })
    }
    
    componentDidMount(){
        this.loadProfile();
        this.loadProfileClothing();
    }

    render(){
        return(
            <div className="layer profile ">
                    <div className="shape angle"></div>
                    <div className="main-header">
                        <div className="headerback"><i className="fas fa-chevron-left"></i><i className="fas fa-chevron-left"></i></div>
                        <img src="/assets/logo-white.png" alt="logoimg" className="headerlogo"/>
                        <i className="fas fa-cog"></i>
                    </div>
                    <div className="profilehead">
                        <img src="/assets/profile.jpeg" alt="profileimg" className="profileimg"/>
                        <div className="profiledp">
                            <h3>{this.state.currentUser.name}<span className="profile-edit"><i className="fas fa-pen"></i></span></h3>
                            <p><i className="fas fa-map-marker-alt"></i>Auckland, New Zealand</p> 
                            <p><i className="fas fa-envelope"></i>{this.state.currentUser.email}</p>
                        </div>
                    </div>
                    <div className="bio">
                        <h1>Bio</h1>
                        <p>I make hand painted clothing for all occasions. Shirts, jackets, pants and tops all custom one off designs.</p>
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
                                    loadProfileClothing:this.loadProfileClothing
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