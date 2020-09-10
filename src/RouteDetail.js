import React, {Component} from 'react'

class RouteDetail extends Component {



    render(){
        return(
            <div className="layer detail">
                <div className="main-header">
                    <div className="headerback"><i className="fas fa-chevron-left"></i><i className="fas fa-chevron-left"></i></div>
                    <img src="assets/logo-white.png" alt="logoimg" className="headerlogo"/>
                </div>
                <div className="item-detail-img-container">
                    <img src="assets/jacket.jpg" alt="product"/>
                </div>
                <div className="item-detail-content-wrap">
                    <button className="addtocart-btn">
                        <i className="fas fa-cart-plus"></i>
                    </button>
                    <div className="item-detail-header-container">
                        <h3 className="item-detail-title">Customised Jacket Title</h3>
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
                        <div className="fav-container">
                            <img src="/assets/heart.svg" alt="heart"/>
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
                            <div className="review-container">
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
                            </div>

                        </div>
                    </div>
                </div>
                <div className="main-footer">
                    <div className="nav home nav-on">
                        <i className="fas fa-home"></i>
                    </div>
                    <div className="nav cart">
                        <i className="fas fa-shopping-cart"></i>
                    </div>
                    <div className="nav fav">
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

export default RouteDetail;