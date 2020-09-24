import React from 'react';
import companyLogo from '../images/logo.svg';
import {Button, Links} from './';

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={companyLogo} alt="logo" />
            <div className="navbar__links">
                <Links/>
            </div>
            <Button />

            <div className="navbar--mobile">
                <Links/>
            </div>
        </div>
    )
}

export default Navbar;