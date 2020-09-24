import React from 'react';
import { Button, Links } from './';
import logoWhite from '../images/logo-white.svg';

const Footer = () => {
    return (
        <div className="footer">
            <img className="footer__logo" src={logoWhite} alt="Easybank company logo" />

            <div className="footer__social__logos">
                <a href="#" aria-label="Facebook icon">
                    <i className="fab fa-facebook-square" />
                </a>
                <a href="#" aria-label="YouTube icon">
                    <i className="fab fa-youtube-square" />
                </a>
                <a href="#" aria-label="Twitter icon">
                    <i className="fab fa-twitter" />
                </a>
                <a href="#" aria-label="Pinterest icon">
                    <i className="fab fa-pinterest" />
                </a>
                <a href="#" aria-label="Instagram icon">
                    <i className="fab fa-instagram" />
                </a>
            </div>

            <div className="footer__links">
                <Links/>
            </div>

            <Button/>
            
            <p className="footer__copyright">©Easybank. All Rights Reserved</p>
        </div>
    )
}

export default Footer;