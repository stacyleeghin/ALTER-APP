import React, {Component} from 'react'
import { Link, navigate } from '@reach/router'
import API from './API';
// import RouteCheckout from './checkout'
// import RouteBrowse from './browse'
// import RouteFav from './fav'
// import RouteProfile from './profile'


class RouteEdit extends Component {

    constructor(props){
        super(props)
        this.state = {

            product:{
            
            }

        }
    }

    componentDidMount(){
        var{id} = this.props;
        console.log(id)
        API.getSingleClothing(id).then(res =>{
            this.setState({product:res.data})
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        var formData = new FormData(this.form);

        var data = {
            name:formData.get('name'),
            price:formData.get('price'),
            description:formData.get('description'),
            shipping:formData.get('shipping')
        }

        API.updateClothing(data).then(res => navigate('/detail/'))
    }



    render(){
        var {name,price,description,shipping} = this.state.product
        return(

            <div className="layer edit ">
                <div className="main-header">
                <div className="headerback"><Link to={"/detail/"+this.props.id}><i className="fas fa-chevron-left"></i><i className="fas fa-chevron-left"></i></Link></div>
                    <img src="assets/logo-white.png" alt="logoimg" className="headerlogo"/>
                </div>
                <div className="item-detail-img-container">
                    <img src="assets/jacket.jpg" alt="product"/>
                </div>
                <div className="item-detail-content-wrap">
                    <form onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}>
                    	
                    	<div className="item-detail-header-container">
                    	    <h3 className="item-detail-title">New Item</h3>
                    	    <p className="item-detail-price">\$00.00</p>

                    	</div>
                    	<div className="item-detail-subhead-container">
                    	</div>
                    	<div className="item-user-container">
                    	    <div className="item-user-dp">
                    	        <img src="/assets/user1.jpeg" alt="user"/>
                    	    </div>
                    	    <div className="item-user-info-container">
                    	        <p className="item-user item-user-name">Ruel Vincent</p>
                    	        <p className="item-user item-user-address">Auckland, New Zealand</p>
                    	    </div>
                    	</div>
                    	
                    	<div className="item-input-container">
                                   
                    	    <p className="item-input-title">
                    	        Name
                    	    </p>
                    	 
                    	    <p className="item-desc hide">
                    	        Denim jacket finished with distressed detailing.Point collar. Long sleeves. Buttoned barrel cuffs. Button front.About 23" from shoulder to hem. Cotton. Machine wash.
                    	    </p>
                    	    <input type="text" name="name" id="name-input" className="edit-input" placeholder="Denim jacket finished" defaultValue={name}/>
                    	    
                    	</div>
                    	<div className="item-input-container">
                    	    <p className="item-input-title">
                    	        Price
                    	    </p>
                    	    <p className="item-desc hide">
                    	        Denim jacket finished with distressed detailing.Point collar. Long sleeves. Buttoned barrel cuffs. Button front.About 23" from shoulder to hem. Cotton. Machine wash.
                    	    </p>
                    	    <input type="text" name="price" id="price-input" className="edit-input" placeholder="70.00" defaultValue={price}/>
                    	</div>
                    	<div className="item-input-container">
                    	    <p className="item-input-title">
                    	        Description
                    	    </p>
                    	    <p className="item-desc hide">
                    	        Denim jacket finished with distressed detailing.Point collar. Long sleeves. Buttoned barrel cuffs. Button front.About 23" from shoulder to hem. Cotton. Machine wash.
                    	    </p>
                    	    <textarea name="description" id="description" className="edit-input" defaultValue={description}>
                    	    </textarea>
                    	</div>
                    	<div className="item-input-container">
                    	    <p className="item-input-title">
                    	        Shipping Info
                    	    </p>
                    	    <p className="item-ship hide">
                    	        Shipping to New Zealand only. \$15 for country wide express shipping.
                    	    </p>
                    	    <textarea name="shipping" id="shipping" className="edit-input" defaultValue={shipping}>
                    	    </textarea>
                    	</div>
                                 
                    	<div className="edit-btn-container">
                    	    <Link to="/profile"><button className="delete-btn">
                    	        Delete Product
                    	    </button></Link>
                    	    <Link to="/profile"> <button className="save-btn">
                    	        Save
                    	    </button></Link>
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