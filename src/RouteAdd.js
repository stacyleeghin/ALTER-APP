import React, {Component} from 'react'
import { Link, navigate } from '@reach/router'
import API from './API';
// import RouteCheckout from './checkout'
// import RouteBrowse from './browse'
// import RouteFav from './fav'
// import RouteProfile from './profile'


class RouteAdd extends Component {

    submitForm = (e) => {
        e.preventDefault()
        var formData = new FormData(this.form);

        API.uploadFile(formData)
        .then(res => res.data)

        .then(photoUrl => {
            var currentUser = localStorage.getItem('userId')
            var data = {
                name:formData.get('product'),
                photoUrl:photoUrl,
                description:formData.get('description'),
                shippingInfo:formData.get('shipping'),
                price:formData.get('inputPrice'),
                userId:currentUser,
                typeId:2
            }
            API.addClothing(data).then(res => navigate('/profile'))
        })
    }

    render(){
        return(
            <div className="layer add">
                <div className="main-header">
                <div className="headerback"><Link to="/profile"><i className="fas fa-chevron-left"></i><i className="fas fa-chevron-left"></i></Link></div>
                    <img src="assets/logo-black.png" alt="logoimg" className="headerlogo"/>
                </div>
                <div className="main-add">
                    <div className="subtitle">
                        <h1>Add New Listing</h1>
                    </div>
                    <form onSubmit={this.submitForm} ref={(el) => {this.form = el}}>
                        <div className="productimage">
                            <h3>Product Image</h3>
                            <label htmlFor="upload_file" className="custom-file-upload">
                                <i className="fas fa-camera-retro"></i>
                            </label>
                            <input type="file" name="upload_file" id="upload_file" required/>
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="product">Name</label>
                            <input type="text" className="form-control" id="product" name="product" placeholder="Product name" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPrice">Price</label>
                            <input type="text" className="form-control" name="inputPrice" id="inputPrice" placeholder="$00.00" required/>
                        </div>
            
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea name="description" id="description" cols="30" rows="6" placeholder="Enter Description" required></textarea>
                        </div>
            
                        <div className="form-group">
                            <label htmlFor="shipping">Shipping Info</label>
                            
                            <textarea name="shipping" id="shipping" cols="30" rows="5" placeholder="Enter shipping info" required></textarea>
                        </div>
                        <div className="global-btns">
                            <button className="delete-btn"><Link to="/profile">Cancel</Link></button>
                            <button type="submit" className="save-btn">Add</button>
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

export default RouteAdd;