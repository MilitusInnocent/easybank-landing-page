import React from 'react';
import {ChooseCard} from './';
import iconApi from '../images/icon-api.svg';
import iconBudgeting from '../images/icon-budgeting.svg';
import iconOnboarding from '../images/icon-onboarding.svg';
import iconOnline from '../images/icon-online.svg';

const Choose = () => (
    <div className="choose">
        <div className="choose__textbox">
            <h2 className="choose__textbox--heading">Why choose Easybank</h2>
            <p className="choose__textbox--subheading">We leverage Open Banking 
            to turn your bank account into your financial hub. 
            Control your finances like never before.</p>
        </div>
        <div className="choose__card__container">
            <ChooseCard
                icon={iconOnline}
                heading='Online Banking'
                text='Our modern web and mobile applications
                allow you to keep track of your finances wherever you are in the world.'
            />

            <ChooseCard
                icon={iconBudgeting}
                heading='Simple Budgeting'
                text="See exactly where your money goes each month. 
                Receive notifications when you're close to hitting your limits"
            />

            <ChooseCard
                icon={iconOnboarding}
                heading='Fast Onboarding'
                text="We don't do branches. Open your account in 
                minutes online and start taking control of your finances right away."
            />

            <ChooseCard
                icon={iconApi}
                heading='Open API'
                text="Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier."
            />
        </div>
    </div>
)

export default Choose;