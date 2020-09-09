import React, {Component} from 'react'
import RouteAdd from './add'

class RouteAdd extends Component {



    render(){
        return(
            <div class="layer add">
            <div class="main-header">
                <div class="headerback"><i class="fas fa-chevron-left"></i><i class="fas fa-chevron-left"></i></div>
                <img src="assets/logo-black.png" alt="logoimg" class="headerlogo">
            </div>
            <div class="main-add">
                <div class="subtitle">
                    <h1>Add New Listing</h1>
                </div>
                <div class="productimage">
                    <h3>Product Image</h3>
                    <label for="upload_file" class="custom-file-upload"><i class="fas fa-camera-retro"></i></label>
                    <input type="file" name="upload_file" id="upload_file" >
                    
                </div>
        
                <form>
                    <div class="form-group">
                        <label for="product">Name</label>
                        <input type="text" class="form-control" id="product" placeholder="Product name">
        
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPrice">Price</label>
                        <input type="text" class="form-control" id="exampleInputPrice" placeholder="$00.00">
                    </div>
        
                    <div class="form-group">
                        <label for="description">Description</label>
                        <!-- <input type="description" class="form-control" id="exampleInputdescription" placeholder="Enter Description"> -->
                        <textarea name="description" id="description" cols="30" rows="6"></textarea>
                    </div>
        
                    <div class="form-group">
                        <label for="shipping">Shipping Info</label>
                        <!-- <input type="shipping" class="form-control" id="exampleInputShipping" placeholder="Enter Shipping Info"> -->
                        <textarea name="shipping" id="shipping" cols="30" rows="5"></textarea>
                    </div>
                    <div class="global-btns">
                        <button type="submit" class="delete-btn">Cancel</button>
                        <button type="submit" class="save-btn">Add</button>
                    </div>
                </form>
            </div>
            <div class="main-footer">
                <div class="nav home">
                    <i class="fas fa-home"></i>
                </div>
                <div class="nav cart">
                    <i class="fas fa-shopping-cart"></i>
                </div>
                <div class="nav fav nav-on">
                    <i class="fas fa-heart"></i>
                </div>
                <div class="nav profile">
                    <i class="fas fa-user"></i>
                </div>
            </div>
        </div>
        )
    }
}

export default RouteAdd;