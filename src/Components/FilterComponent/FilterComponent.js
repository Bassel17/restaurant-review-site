import React from 'react';

const FilterComponent = (props) => {


    const changeMax = (event) => {
        props.changeMax(event.target.value);
    }

    const changeMin = (event) => {
        props.changeMin(event.target.value);
    }

    return (
        <div>
            Filter restaurants by review
            <input 
                type="number"
                min="0" 
                max="5"
                value = {props.min}
                onChange = {changeMin}
            />
            <input 
                type="number"
                min="0" 
                max="5"
                value = {props.max}
                onChange = {changeMax}
            />
        </div>
    )

}

export default FilterComponent;