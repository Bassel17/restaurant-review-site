import React, {useEffect} from 'react';
import './RestaurantCard.scss';
import GooglePlacesRepo from '../../Repositories/GooglePlacesRepo/GooglePlacesRepo';
import ReactStars from "react-rating-stars-component";
const placesRepo = new GooglePlacesRepo();

const RestaurantCard = (props) =>{

    useEffect(()=>{
        placesRepo.getPlaceDetails(props.location,props.place_id);
    })

    return(
        <div className="RestaurantCard">
            <img 
                className="RestaurantCard__image"
                src={props.icon == undefined ?  "https://www.hopkinsmedicine.org/-/media/feature/noimageavailable.ashx":props.icon[0].getUrl(150)}
                alt="restaurant street view"
            />
            <div className="RestaurantCard__bar">
                <p className="RestaurantCard__bar__name">{props.restaurantTitle}</p>
                <div className="RestaurantCard__bar__rating">
                <ReactStars
                    count={5}
                    size={24}
                    isHalf={true}
                    edit={false}
                    activeColor="#ffd700"
                    value={props.restaurantRating}
                />
                </div>
            </div>
        </div>
    );

}

export default RestaurantCard;