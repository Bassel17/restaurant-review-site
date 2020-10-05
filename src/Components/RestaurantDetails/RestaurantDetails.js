import React, {useState,useEffect} from 'react';
import './RestaurantDetails.scss'

const RestaurantDetails = (props) => {

    const [restaurantDetails, setRestaurantDetails ] = useState();

    useEffect(()=>{
        if( typeof props.info.location !== 'undefined'){
            props.placesRepo.getPlaceDetails(props.info.location,props.info.place_id,setRestaurantDetails)
        }
    },[props.info.location, props.info.place_id, props.placesRepo])

    return (
        <div className = {`restaurant-details ${props.class}`}>
            <div className = "restaurant-details__close">
                <span 
                    className = "restaurant-details__close__button"
                    onClick = {props.hide}
                >
                    X
                </span>
            </div>
            <div className ="restaurant-details__reviews">
                    {console.log(restaurantDetails)}
            </div>
        </div>
    );
}

export default RestaurantDetails;