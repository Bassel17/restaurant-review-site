import React from 'react';
import './SliderComponent.scss';
import {Icon} from '@iconify/react';
import roundMenu from '@iconify/icons-ic/round-menu';
import RestaurantCard from '../RestaurantCard/RestaurantCard';

const SliderComponent = (props) =>{
    
    return(
        <div className={`slider ${props.visible}`}>
            <div className="sliderButtonContainer">
                <Icon className="sliderButtonContainer__button" icon={roundMenu} onClick={props.slideBack} />
            </div>
            <div style = {{display:"flex",flexDirection:"column",alignItems:"center"}}>
                {props.restaurants.map((restaurant,index)=>
                <RestaurantCard
                    restaurantTitle={restaurant.title}
                    restaurantRating={restaurant.rating}
                    key= {index}
                />) 
                } 
            </div>
        </div>
    );

}

export default SliderComponent;