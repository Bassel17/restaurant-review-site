import React, {useState} from 'react';
import './AddRestaurantModal.scss';

const AddRestaurantModal = (props) => {

    const [restaurantName, setRestaurantName] = useState("");
    
    const changeRestaurantName = (event) => {
        setRestaurantName(event.target.value);
    }

    const addRestaurant = (event) => {
        event.preventDefault();
    }

    const hideModal = (event) =>{
        event.preventDefault();
        props.toggleModal(false);
    }

    return(
        <div className={`addRestaurantModal-container ${props.isVisible ? "":"addRestaurantModal-container--hide"}`}>
            <form className="addRestaurantModal-container__form">
                <div className="addRestaurantModal-container__form__inputs">
                    <label >Restaurant name: </label>
                    <input
                        type="text"
                        name="restaurant name"
                        value={restaurantName}
                        onChange={changeRestaurantName}
                    />
                </div>
                <div className="addRestaurantModal-container__form__buttons">

                    <input 
                        type="submit" 
                        value="Add"
                        onClick={addRestaurant}
                    />

                    <input 
                        type="submit" 
                        value="Cancel"
                        onClick={hideModal}
                    />

                </div>
            </form>
        </div>
    )
}

export default AddRestaurantModal;