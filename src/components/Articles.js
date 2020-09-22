import React from 'react';
import {ArticlesCard} from './';
import currencyImage from '../images/image-currency.jpg';
import restaurantImage from '../images/image-restaurant.jpg';
import airplaneImage from '../images/image-plane.jpg';
import confettiImage from '../images/image-confetti.jpg';

const Articles = () => (
    <div className="articles">
        <div className="articles__textbox">
            <h2>Latest Articles</h2>
        </div>
        <div className="articles__card__container">
            <ArticlesCard
                image={currencyImage}
                author="Claire Robinson"
                heading='Receive money in any currency with no fees'
                text="The world is getting smaller and we're becoming more mobile. 
                So why should you be forced to only receive money in a single..."
            />

            <ArticlesCard
                image={restaurantImage}
                author="Wilson Hutton"
                heading='Treat yourself without worrying about money'
                text="Our simple budgeting feature allows you to separate out your 
                spending and set realistic limits each month. That means you..."
            />

            <ArticlesCard
                image={airplaneImage}
                author="Wilson Hutton"
                heading='Take your Easybank card wherever you go'
                text="We want you to enjoy your travels. This is why we don't charge
                any fees on purchases while you're abroad. We'll even show you..."
            />

            <ArticlesCard
                image={confettiImage}
                author="Claire Robinson"
                heading='Our invite-only Beta accounts are now live!'
                text="After a lot of hard work by the whole team, we're excited to 
                launch our closed beta. It's easy to request an invite through 
                the site..."
            />
        </div>
    </div>
)

export default Articles;