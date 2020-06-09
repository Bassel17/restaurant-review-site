import React from 'react';
import './RestaurantCard.scss';

const RestaurantCard = (props) =>{
    
    return(
        <div className="RestaurantCard">
            <img 
                className="RestaurantCard__image"
                src="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg" 
                alt="restaurant street view image"
            />
            <div className="RestaurantCard__bar">
                <p className="RestaurantCard__bar__name">{props.restaurantTitle}</p>
                <div className="RestaurantCard__bar__rating">{props.restaurantRating}</div>
            </div>
        </div>
    );

}

export default RestaurantCard;