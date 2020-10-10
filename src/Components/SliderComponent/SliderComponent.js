import React from 'react';
import './SliderComponent.scss';
import {Icon} from '@iconify/react';
import roundMenu from '@iconify/icons-ic/round-menu';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import FilterComponent from '../FilterComponent/FilterComponent';

const SliderComponent = (props) =>{

    return(
        <div className={`slider ${props.visible}`}>
            <div className="sliderButtonContainer">
                <Icon className="sliderButtonContainer__button" icon={roundMenu} onClick={props.slideBack} />
            </div>
            <FilterComponent 
                max={props.max} 
                min={props.min}
                changeMax = {props.changeMax} 
                changeMin = {props.changeMin}
            />
            <div style = {{display:"flex",flexDirection:"column",alignItems:"center"}}>
                {props.restaurants.map((restaurant,index)=>
                <RestaurantCard
                    restaurantTitle={restaurant.name}
                    restaurantRating={restaurant.rating}
                    icon = {restaurant?.photos }
                    place_id = {restaurant.place_id}
                    location = {restaurant.geometry.location}
                    key= {index}
                    showReviews = {()=>props.showReviews(restaurant)}
                />) 
                } 
            </div>
        </div>
    );

}

export default SliderComponent;