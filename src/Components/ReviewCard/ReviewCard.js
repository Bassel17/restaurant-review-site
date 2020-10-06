import React from 'react';
import './ReviewCard.scss'
import ReactStars from "react-rating-stars-component";

const ReviewCard = (props) => {

    return (
        <div className = "ReviewCard-container">
            <div className = "ReviewCard-container__image">
                <img 
                    src={props.review.profile_photo_url} 
                    width="75px" 
                    height="75px" 
                    alt="reviewer"
                />
            </div>
            <div className = "ReviewCard-container__review">

                <div className="ReviewCard-container__review__name">
                    {props.review.author_name}
                </div>

                <div className="ReviewCard-container__review__text">
                    {props.review.text}
                </div>

                <div className="ReviewCard-container__review__rating">
                    <ReactStars
                        count={5}
                        size={24}
                        isHalf={true}
                        edit={false}
                        activeColor="#ffd700"
                        value={props.review.rating}
                    />
                </div>

            </div>
        </div>
    )

}

export default ReviewCard;