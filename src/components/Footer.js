import React from 'react';
import logoWhite from '../images/logo-white.svg';
import {Button, Links} from './';

const Footer = () => {
    return (
        <div className="footer">
            <img className="footer__logo" src={logoWhite} alt="Easybank company logo" />
            <div className="footer__social__logos">
                <a href="#" aria-label="Facebook icon">
                    <i className="fab fa-facebook-square"></i>
                </a>
                <a href="#" aria-label="YouTube icon">
                    <i className="fab fa-youtube-square"></i>
                </a>
                <a href="#" aria-label="Twitter icon">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="Pinterest icon">
                    <i className="fab fa-pinterest"></i>
                </a>
                <a href="#" aria-label="Instagram icon">
                    <i className="fab fa-instagram"></i>
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