import React from 'react';
import './RestaurantCard.scss';

const RestaurantCard = (props) =>{
    console.log(props.icon);
    return(
        <div className="RestaurantCard">
            <img 
                className="RestaurantCard__image"
                src={props.icon == undefined ?  "https://www.hopkinsmedicine.org/-/media/feature/noimageavailable.ashx":props.icon[0].getUrl(150)}
                alt="restaurant street view"
            />
            <div className="RestaurantCard__bar">
                <p className="RestaurantCard__bar__name">{props.restaurantTitle}</p>
                <div className="RestaurantCard__bar__rating">{props.restaurantRating}</div>
            </div>
        </div>
    );

}

export default RestaurantCard;