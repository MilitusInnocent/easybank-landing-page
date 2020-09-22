import React from 'react';


const ArticlesCard = ({image, author, heading, text}) => (
    <div className="articles__card">
        <div className="articles__card__image__container">
            <img src={image} alt=''/>
        </div>
        <div className="articles__card__textbox">
            <p className="articles__card__textbox--author">By {author}</p>
            <h3 className="articles__card__textbox--heading">{heading} </h3>
            <p className="articles__card__textbox--subheading">{text}</p>
        </div>
    </div>
)

export default ArticlesCard;