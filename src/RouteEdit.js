import React, {Component} from 'react'
import { Link, navigate } from '@reach/router'
import API from './API'


class RouteEdit extends Component {

    constructor(props){
        super(props)
        this.state = {
            productEdit:null
        }
    }

    componentDidMount(){
        var {id} = this.props
        API.getSingleClothing(id).then(res=>{
            this.setState({productEdit:res.data})
        })
    }

    deleteClothing = () => {
		var {id} = this.props
		API.deleteClothing(id)
		.then(res => navigate('/profile/'))
	}

    submitForm = (e) => {
        e.preventDefault()
        var formData = new FormData(this.form);

        var data = {
            name:formData.get('name'),
            // placeholder photourl before image uploader completed
            photoUrl:'https://lh3.googleusercontent.com/DEkMFpkyPAiO8JKmx0D-fttmQXWMRAi72qnZHOb2WvcmyIxwajfdkKy6qJt3y7Y9I5GyeW7gUR4Yr67qIgTZ1bXyNiKaoJlUKen0OV9g91mii59R5Y12BngghHPravSxNCeYgZeu=w2400',
            description:formData.get('description'),
            shippingInfo:formData.get('shipping'),
            price:formData.get('price'),
            userId:1,
            typeId:2
        }

        var {id} = this.props

        API.updateClothing(id,data).then(res => navigate('/detail/' + this.props.id))
    }

    render(){
        var {productEdit} = this.state
        return productEdit ?(

            <div className="layer edit ">
                <div className="main-header">
                <div className="headerback"><Link to={"/detail/" + this.props.id}><i className="fas fa-chevron-left"></i><i className="fas fa-chevron-left"></i></Link></div>
                    <img src="/assets/logo-white.png" alt="logoimg" className="headerlogo"/>
                </div>
                <div className="item-detail-img-container">
                    <img src={productEdit.photoUrl} alt="product"/>
                </div>
                <div className="item-detail-content-wrap">
                    
                    <div className="item-detail-header-container">
                        <h3 className="item-detail-title">{productEdit.name}</h3>
                        <p className="item-detail-price">${productEdit.price.$numberDecimal}</p>
                    </div>
                    <div className="item-detail-subhead-container">
                    </div>
                    <div className="item-user-container">
                        <div className="item-user-dp">
                            <img src="/assets/user1.jpeg" alt="user"/>
                        </div>
                        <div className="item-user-info-container">
                            <p className="item-user item-user-name">{productEdit.user.name}</p>
                            <p className="item-user item-user-address">{productEdit.user.location}</p>
                        </div>
                    </div>
                    <form onSubmit={this.submitForm} ref={(el) => {this.form = el}}>
                        <div className="item-input-container">
                            <p className="item-input-title">
                                Name
                            </p>
                            <input type="text" name="name" id="name-input" className="edit-input" defaultValue={productEdit.name}/>
                        </div>
                        <div className="item-input-container">
                            <p className="item-input-title">
                                Price
                            </p>
                            <input type="text" name="price" id="price-input" className="edit-input" defaultValue={productEdit.price.$numberDecimal}/>
                        </div>
                        <div className="item-input-container">
                            <p className="item-input-title">
                                Description
                            </p>
                            <textarea name="description" id="description" className="edit-input" defaultValue={productEdit.description}>
                            </textarea>
                        </div>
                        <div className="item-input-container">
                            <p className="item-input-title">
                                Shipping Info
                            </p>
                            <textarea name="shipping" id="shipping" className="edit-input" defaultValue={productEdit.shippingInfo}>
                            </textarea>
                        </div>
                        <div className="edit-btn-container">
                            <button className="delete-btn" onClick={this.deleteClothing}>
                                Delete Product
                            </button>
                            <button type="submit" className="save-btn">
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

        ):null
    }
}

export default RouteEdit;