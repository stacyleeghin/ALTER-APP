import React, {Component} from 'react'
import { Link,navigate } from '@reach/router'
import API from './API'
// import RouteCheckout from './checkout'
// import RouteBrowse from './browse'
// import RouteFav from './fav'
// import RouteProfile from './profile'


class RouteAdd extends Component {

    handleFormSubmit = (e) => {
        e.preventDefault()
        var formData = new FormData(this.form);

        var data = {
            name:formData.get('product'),
            price:formData.get('exampleInputPrice'),
            description:formData.get('description'),
            shipping:formData.get('shipping'),
            userId:1
        }

        console.log(data)

        
        API.addClothing(data)
        .then(res => navigate('/detail'))

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
                    
            
                    <form onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}>
                        <div className="productimage">
                            <h3>Product Image</h3>
                            <label htmlFor="upload_file" className="custom-file-upload">
                                <i className="fas fa-camera-retro"></i>
                            </label>
                            <input type="file" name="upload_file" id="upload_file"/>
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="product">Name</label>
                            <input type="text" name="product" className="form-control" id="product" placeholder="Product name"/>
            
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPrice">Price</label>
                            <input type="text" name="exampleInputPrice" className="form-control" id="exampleInputPrice" placeholder="$00.00"/>
                        </div>
            
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea name="description" id="description" cols="30" rows="6" placeholder="Enter Description"></textarea>
                        </div>
            
                        <div className="form-group">
                            <label htmlFor="shipping">Shipping Info</label>
                            
                            <textarea name="shipping" id="shipping" cols="30" rows="5" placeholder="Enter shipping info"></textarea>
                        </div>
                        <div className="global-btns">
                            <button type="submit" className="delete-btn"><Link to="/profile">Cancel</Link></button>
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