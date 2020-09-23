import React, {Component} from 'react'
import { Link } from '@reach/router'
import API from './API'
// import RouteCheckout from './checkout'
// import RouteBrowse from './browse'
// import RouteFav from './fav'
// import RouteProfile from './profile'

class RouteDetail extends Component {
    constructor(props){
        super(props)

        this.state = {
            clothingItem: {}
        }
    }

    loadDetail =() => {
        var {id} = this.props
        API.getSingleClothing(id).then(res => {
            this.setState({clothingItem:res.data})
        })
    }
    componentDidMount(){
        this.loadDetail();
    }



    render(){

        var {id,name,description,price,typeId,user,shippingInfo,photoUrl} = this.state.clothingItem

        return(
            <div className="layer detail">
                <div className="main-header">
                    <div className="headerback"><Link to="/profile"><i className="fas fa-chevron-left"></i><i className="fas fa-chevron-left"></i></Link></div>
                    <img src="/assets/logo-white.png" alt="logoimg" className="headerlogo"/>
                </div>
                <div className="item-detail-img-container">
                    <img src={API.serverUrl+photoUrl} alt="product"/>
                </div>
                <div className="item-detail-content-wrap">
                    <button className="addtocart-btn">
                        <Link to={"/edit/" + this.props.id}><i class="fas fa-edit"></i></Link>
                    </button>
                    <div className="item-detail-header-container">
                        <h3 className="item-detail-title">heart</h3>
                        <p className="item-detail-price">$75.00</p>
                    </div>
                    <div className="item-detail-subhead-container">
                        <div className="review-star-container">
                            <p className="avgRating">4.2</p>
                            <img src="/assets/starFilled.svg" alt="star"/>
                            <img src="/assets/starFilled.svg" alt="star"/>
                            <img src="/assets/starFilled.svg" alt="star"/>
                            <img src="/assets/starFilled.svg" alt="star"/>
                            <img src="/assets/star.svg" alt="star"/>
                        </div>
                        
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
                    <div className="item-desc-container">
                        <p className="item-desc-title">
                            Description
                        </p>
                        <p className="item-desc">
                            Denim jacket finished with distressed detailing.Point collar. Long sleeves. Buttoned barrel cuffs. Button front.About 23" from shoulder to hem. Cotton. Machine wash.
                        </p>
                    </div>
                    <div className="item-ship-container">
                        <p className="item-ship-title">
                            Shipping Info
                        </p>
                        <p className="item-ship">
                            Shipping to New Zealand only. $15 for country wide express shipping.
                        </p>
                    </div>
                    <div className="item-review-container">
                        <div className="item-review-title-container">
                            <p className="item-review-title">
                                Reviews
                            </p>
                        </div>
                        <div className="item-reviewlist-container">
                            <div className="review-container">
                                <div className="review-user-info-container">
                                    <div className="review-user-dp">
                                        <img src="/assets/user1.jpeg" alt="user"/>
                                    </div>
                                    <div className="review-header">
                                        <div className="review-user-name">
                                            Ruel Vincent
                                        </div>
                                    </div>
                                </div>
                                <div className="new-review-rating">
                                    <p className="new-review-rating-title">
                                        Rating
                                    </p>
                                    <img src="/assets/star.svg" alt="star"/>
                                    <img src="/assets/star.svg" alt="star"/>
                                    <img src="/assets/star.svg" alt="star"/>
                                    <img src="/assets/star.svg" alt="star"/>
                                    <img src="/assets/star.svg" alt="star"/>
                                </div>
                                <div className="review-comment new-review">
                                    <p className="new-review-rating-title">
                                        Comments
                                    </p>
                                    <textarea name="new_review" id="new_review"></textarea>
                                </div>
                                <div className="global-btns">
                                    <button className="delete-btn">
                                        Cancel
                                    </button>
                                    <button className="save-btn">
                                        Submit
                                    </button>
                                </div>
                            </div>
                            {/* <div className="review-container">
                                <div className="review-user-info-container">
                                    <div className="review-user-dp">
                                        <img src="/assets/user1.jpeg" alt="user"/>
                                    </div>
                                    <div className="review-header">
                                        <div className="review-user-name">
                                            Ruel Vincent
                                        </div>
                                        <div className="review-rating">
                                            <img src="/assets/starFilled.svg" alt="star"/>
                                            <img src="/assets/starFilled.svg" alt="star"/>
                                            <img src="/assets/starFilled.svg" alt="star"/>
                                            <img src="/assets/starFilled.svg" alt="star"/>
                                            <img src="/assets/star.svg" alt="star"/>
                                        </div>
                                    </div>
                                    <div className="comment-header-btn-container">
                                        <i className="far fa-trash-alt"></i>
                                        <i className="fas fa-pen"></i>
                                    </div>
                                </div>
                                <div className="review-comment">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus mauris, sollicitudin sed sodales eu, vehicula eu nibh. Sed ut lectus nulla. Sed fringilla iaculis ante vel viverra. Nulla semper mauris ut lorem molestie, sit amet faucibus augue congue.
                                </div>
                            </div> */}

                        </div>
                    </div>
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

export default RouteDetail;