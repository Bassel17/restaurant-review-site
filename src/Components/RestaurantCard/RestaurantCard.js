import React from 'react';
import './RestaurantCard.scss';
import Rating from "@material-ui/lab/Rating"

const RestaurantCard = (props) =>{

    return(
        <div className="RestaurantCard" onClick = {props.showReviews}>
            <img 
                className="RestaurantCard__image"
                src={props.icon === undefined ?  "https://www.hopkinsmedicine.org/-/media/feature/noimageavailable.ashx":props.icon[0].getUrl(150)}
                alt="restaurant street view"
            />
            <div className="RestaurantCard__bar">
                <p className="RestaurantCard__bar__name">{props.restaurantTitle}</p>
                <div className="RestaurantCard__bar__rating">
                    <Rating
                        name="half-rating-read"
                        value={props.restaurantRating} 
                        precision={0.5} 
                        readOnly
                    />
                </div>
            </div>
        </div>
    );

}

export default RestaurantCard;