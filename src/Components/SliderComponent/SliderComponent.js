import React, {useState} from 'react';
import './SliderComponent.scss';
import {Icon} from '@iconify/react';
import roundMenu from '@iconify/icons-ic/round-menu';

const SliderComponent = (props) =>{
    
    return(
        <div className={`slider ${props.visible}`}>
            <div className="sliderButtonContainer"><Icon className="sliderButtonContainer__button" icon={roundMenu} onClick={props.slideBack} /></div>
        </div>
    );

}

export default SliderComponent;