import React from 'react';
import './ReviewCard.scss'

const ReviewCard = (props) => {

    return (
        <div className = "ReviewCard-container">
            <div className = "ReviewCard-container__image">
                <img 
                    src={props.review.profile_photo_url} 
                    width="50px" 
                    height="50px" 
                    alt="reviewer"
                />
            </div>
            <div className = "ReviewCard-container__review">
                <div className="ReviewCard-container__review__name">
                    {props.review.author_name}
                </div>
                <div className="ReviewCard-container__review__rating">
                    {props.review.rating}
                </div>

                <div className="ReviewCard-container__review__text">
                    {props.review.text}
                </div>

            </div>
        </div>
    )

}

export default ReviewCard;