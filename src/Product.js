import React, { Component } from 'react';
import {Link} from '@reach/router'
import API from './API'

class Product extends Component {

  

    render(){
        var {id,name,description,price,typeId,user,userId,photoUrl} = this.props

        return(
            <div className="product">
                <Link to ={"/detail/"+id}>
                <img src={photoUrl} alt="product" className="product-img" />
                <div className="pro-title">
                    <h2>{name}</h2>
                    <p>{user.name}<br/><span className="price">${price.$numberDecimal}</span></p>
                </div>
                </Link>
            </div>

        )
    }
}
export default Product;