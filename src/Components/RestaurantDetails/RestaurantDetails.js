import React, {useState,useEffect} from 'react';
import './RestaurantDetails.scss';
import ReviewCard from '../ReviewCard/ReviewCard';
import ReactStars from "react-rating-stars-component";

const RestaurantDetails = (props) => {

    const [restaurantDetails, setRestaurantDetails ] = useState();
    const [username, setUsername] = useState("");
    const [review, setReview] = useState("");
    const [rating, setRating] = useState();

    useEffect(()=>{
        if( typeof props.info.location !== 'undefined'){
            props.placesRepo.getPlaceDetails(props.info.location,props.info.place_id,setRestaurantDetails)
        }
    },[props.info.location, props.info.place_id, props.placesRepo])

    const changeUserName = (event) => {
        setUsername(event.target.value);
    }

    const changeReview = (event) => {
        setReview(event.target.value);
    }

    const changeRating = (value) => {
        setRating(value);
    }

    const addReview = (event) => {
        event.preventDefault();
        props.addReview({
            id:props.info.place_id,
            author_name:username,
            rating:rating,
            text:review,
            profile_photo_url:"https://static.thenounproject.com/png/630740-200.png"
        });
        setUsername("");
        setReview("");
        setRating();
    }

    if(typeof restaurantDetails !== 'undefined'){
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
                    {typeof restaurantDetails.reviews !== 'undefined' ? 
                        restaurantDetails.reviews.map((review,index)=>{
                            return <ReviewCard review = {review} key={index}/>;
                        })
                        :
                        <></>
                    }
                    {props.addedReviews.map((review,index)=>{
                        if(review.id === props.info.place_id){
                            return <ReviewCard review = {review} key={index}/>;
                        }
                        return <></>
                    })}
                </div>
                <form className ="restaurant-details__form">
                    <label >your name: </label>
                    <input
                        type="text"
                        name="restaurant name"
                        value={username}
                        onChange={changeUserName}
                    />
                    <label >your review: </label>
                    <textarea
                        type="text"
                        name="restaurant name"
                        value={review}
                        onChange={changeReview}
                    />
                    <ReactStars
                        count={5}
                        size={24}
                        isHalf={true}
                        edit={true}
                        activeColor="#ffd700"
                        value={rating}
                        onChange = {changeRating}
                    />

                    <input 
                        type="submit" 
                        value="Add"
                        onClick={addReview}
                    />

                </form>
            </div>
        );
    }else{
        return <div></div>;
    }
}

export default RestaurantDetails;