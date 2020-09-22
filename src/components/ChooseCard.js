import React from 'react';


const ChooseCard = ({icon, heading, text}) => (
    <div className="choose__card">
        <img className="choose__card--icon" src={icon} alt=''/>
        <h3 className="choose__card--heading">{heading} </h3>
        <p className="choose__card--subheading">{text}</p>
    </div>
)

export default ChooseCard;