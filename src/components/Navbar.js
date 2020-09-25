import React, { useState, useEffect, useRef } from 'react';
import { Button, Links } from './';
import companyLogo from '../images/logo.svg';
import open from '../images/icon-hamburger.svg';
import close from '../images/icon-close.svg';

const Navbar = () => {
    const mobileNavbarBtnEl = useRef();
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    useEffect(() => {
        handleMobileNavLinkClick()
    }, [])

    const handleNavOpen = () => {
        mobileNavbarBtnEl.current.classList.add('change');
    }

    const handleNavClose = () => {
        setTimeout(function() {
            mobileNavbarBtnEl.current.classList.remove('change');
        }, 850);
    }

    const handleMobileNavLinkClick = () => {
        let innerMobileNavLinks = [...document.querySelectorAll('.link')].slice(7, 12);
        
        innerMobileNavLinks.forEach(link => link.addEventListener('click', () => {
            closeAll();
        }))
    }

    const closeAll = () => {
        handleNavClose();
        setMobileNavOpen(false);
    }

    return (
        <div className={`navbar ${mobileNavOpen ? 'fixed' : ''}`}>
            <div className={`overlay ${mobileNavOpen ? 'active' : ''}`} />
            <img className="navbar__logo" src={companyLogo} alt="Easybank company logo" onClick={closeAll} />
            <div className="navbar__links">
                <Links/>
            </div>
            <Button />
            <a 
                ref={mobileNavbarBtnEl}
                href="#" 
                className="navbar__mobile__btn" 
                aria-label="Button for mobile navbar deployment"
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
                <img src={open} className="open" alt="Hamburger icon" onClick={handleNavOpen} />
                <img src={close} className={`close ${!mobileNavOpen ? 'spin' : ''}`} alt="X shape" onClick={handleNavClose} />
            </a>
            <div className={`navbar__mobile ${mobileNavOpen ? 'deployed' : ''}`} onClick={handleMobileNavLinkClick}>
                <Links/>
            </div>
        </div>
    )
}

export default Navbar;