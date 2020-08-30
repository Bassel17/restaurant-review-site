import React from 'react';
import './RestaurantDetails.scss'

const RestaurantDetails = (props) => {

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
                    
            </div>
        </div>
    );
}

export default RestaurantDetails;