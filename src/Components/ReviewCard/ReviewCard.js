import React from 'react';
import './ReviewCard.scss'
import Rating from "@material-ui/lab/Rating"

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
                    <Rating
                        name="half-rating-read"
                        value={props.review.rating} 
                        precision={0.5} 
                        readOnly
                    />
                </div>

            </div>
        </div>
    )

}

export default ReviewCard;