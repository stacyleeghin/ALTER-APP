import React, {Component} from 'react'

// import RouteCheckout from './checkout'
// import RouteBrowse from './browse'
// import RouteFav from './fav'
// import RouteProfile from './profile'


class RouteAdd extends Component {



    render(){
        return(
            <div className="layer add">
                <div className="main-header">
                    <div className="headerback"><i className="fas fa-chevron-left"></i><i className="fas fa-chevron-left"></i></div>
                    <img src="assets/logo-black.png" alt="logoimg" className="headerlogo"/>
                </div>
                <div className="main-add">
                    <div className="subtitle">
                        <h1>Add New Listing</h1>
                    </div>
                    
            
                    <form>
                        <div className="productimage">
                            <h3>Product Image</h3>
                            <label htmlFor="upload_file" className="custom-file-upload">
                                <i className="fas fa-camera-retro"></i>
                            </label>
                            <input type="file" name="upload_file" id="upload_file"/>
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="product">Name</label>
                            <input type="text" className="form-control" id="product" placeholder="Product name"/>
            
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPrice">Price</label>
                            <input type="text" className="form-control" id="exampleInputPrice" placeholder="$00.00"/>
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
                            <button type="submit" className="delete-btn">Cancel</button>
                            <button type="submit" className="save-btn">Add</button>
                        </div>
                    </form>
                </div>
                <div className="main-footer">
                    <div className="nav home">
                        <i className="fas fa-home"></i>
                    </div>
                    <div className="nav cart">
                        <i className="fas fa-shopping-cart"></i>
                    </div>
                    <div className="nav fav nav-on">
                        <i className="fas fa-heart"></i>
                    </div>
                    <div className="nav profile">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default RouteAdd;