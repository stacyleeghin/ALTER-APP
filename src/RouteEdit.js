import React, {Component} from 'react'
import { Link, navigate } from '@reach/router'
import API from './API'
// import RouteCheckout from './checkout'
// import RouteBrowse from './browse'
// import RouteFav from './fav'
// import RouteProfile from './profile'


class RouteEdit extends Component {

    constructor(props){
        super(props)
        this.state = {
            ClothingItem:{
                description:'',
                name:'',
                price:'',
                shippingInfo:'',
                photoUrl:'',
                userId:'',
                typeId:''
            }
        }
    }
    componentDidMount(){
        var {id} = this.props;
        API.getSingleClothing(id).then(res =>{
            this.setState({ClothingItem:res.data})
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        var formData = new FormData(this.form)
        var data = {
            // photoUrl:'',
            name:formData.get('name-input'),
            description:formData.get('description-input'),
            price:formData.get('price-input'),
            shippingInfo:formData.get('shipping-input'),
            userId:1,
            typeId:1
        }
        var {id} = this.props;
        API.updateClothing(id,data).then(res => navigate('/profile'))
    }

 

    render(){

        var {name,description,price,shippingInfo,photoUrl,userId}= this.state.ClothingItem
        return(

            <div className="layer edit ">
                <div className="main-header">
                <div className="headerback"><Link to={"/detail/" + this.props.id}><i className="fas fa-chevron-left"></i><i className="fas fa-chevron-left"></i></Link></div>
                    <img src="/assets/logo-white.png" alt="logoimg" className="headerlogo"/>
                </div>
                <div className="item-detail-img-container">
                    <img src={API.serverUrl+photoUrl} alt="product"/>
                </div>
                <div className="item-detail-content-wrap">
                    
                    
                    <div className="item-detail-subhead-container">
                    </div>
                    <div className="item-user-container">
                        <div className="item-user-dp">
                            <img src="/assets/user1.jpeg" alt="user" />
                        </div>
                        <div className="item-user-info-container">
                            <p className="item-user item-user-name">Ruel Vincent</p>
                            <p className="item-user item-user-address">Auckland, New Zealand</p>
                        </div>
                    </div>
                    <form onSubmit={this.handleFormSubmit} ref={(el)=>{this.form = el}}>
                        
                    <div className="item-input-container">
                        <p className="item-input-title">
                            Name
                        </p>
                    
                        <input type="text" name="name-input" id="name-input" className="edit-input" defaultValue={name}/>
                        
                    </div>
                    <div className="item-input-container">
                        <p className="item-input-title">
                            Price
                        </p>
                        
                        <input type="text" name="price-input" id="price-input" className="edit-input" defaultValue={price.$numberDecimal}/>
                    </div>
                    <div className="item-input-container">
                        <p className="item-input-title">
                            Description
                        </p>
                        
                        <textarea name="description-input" id="description-input" className="description-input" defaultValue={description}>
                        </textarea>
                    </div>
                    <div className="item-input-container">
                        <p className="item-input-title">
                            Shipping Info
                        </p>
                        
                        <textarea name="shipping-input" id="shipping-input" className="shipping-input" defaultValue={shippingInfo}>
                        </textarea>
                    </div>
                    <div className="edit-btn-container">
                        <button className="delete-btn">
                            cancel
                        </button>
                        <button className="save-btn">
                            Save
                        </button>
                    </div>
                    </form>
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
                    <div className="nav profile">
                        <Link to="/profile"><i className="fas fa-user"></i></Link>
                    </div>
                </div>
            </div>

        )
    }
}

export default RouteEdit;