import React from 'react';
import mockUpImage from '../images/image-mockups.png';
import bgDesktop from '../images/bg-intro-desktop.svg';
import bgMobile from '../images/bg-intro-mobile.svg';
import {Button} from './';

const Header = () => (
    <div className="header">
        <div className="header__textbox">
            <h1 className="header__textbox__heading">Next generation digital banking</h1>
            <p className="header__subheading">Take your financial life online. Your Easybank account will 
                be a one-stop-shop for spending, saving, budgeting, 
                investing, and much more.
            </p>
            <Button/>
        </div>
        <div className="header__image__container">
        <img src={mockUpImage} className="mockUp-image" alt="orderly mobile phones" />
        <img src={bgDesktop} className="bg-desktop" alt="" />
        <img src={bgMobile} className="bg-mobile" alt="" />
        </div>
        
    </div>
)

export default Header;