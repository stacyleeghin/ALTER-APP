import React, { Component } from 'react';
import {Link} from '@reach/router'
import API from './API'

class Product extends Component {

    render(){
        var {id,name,description,price,typeId,userId} = this.props

        return(
            <div className="product">
                <img src="assets/jacket.jpg" alt="product" className="product-img" />
                <div className="pro-title">
                    <h2>{name}</h2>
                    <p>John Doe<br /><span className="price">$75.00</span></p>
                </div>
            </div>

        )
    }
}
export default Product;