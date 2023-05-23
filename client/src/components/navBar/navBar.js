import React, { useState } from 'react';
import { crewLogo } from '../../assets/index';
import { Spin as Hamburger } from 'hamburger-react';
import './navBar.css';

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
        setIsDropdownOpen1(false);
    };

    const toggleDropdown1 = () => {
        setIsDropdownOpen1(!isDropdownOpen1);
        setIsDropdownOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="divnavbar_container padding-global">
            <img className="logo-crew" src={crewLogo} alt="logo-crew" />

            <div className="burger-menu" onClick={toggleMenu}>
                <Hamburger toggled={isMenuOpen} toggle={toggleMenu} />
            </div>

            <div className={`navw-dropdown-list-0 ${isMenuOpen ? 'open' : ''}`}>
                <div className="divw-dropdown-toggle-1" onClick={toggleDropdown}>
                    <div className="product valign-text-middle inter-bold-log-cabin-15-2px">
                        Product
                    </div>

                    {isDropdownOpen && (
                        <nav className="dropdown-menu1-open" id='dropdown-menu-transition'>
                            <a href='#'>Chrome Extension</a>
                        </nav>
                    )}
                </div>
                <div className="divw-dropdown-toggle-2" onClick={toggleDropdown1}>
                    <div className="resources valign-text-middle inter-bold-log-cabin-14-2px">
                        Resources
                    </div>
                    {isDropdownOpen1 && (
                        <nav className="dropdown-menu-open" id='dropdown-menu1-transition'>
                            <a href=''>Blog</a>
                            <a href=''>Hiring guide</a>
                            <a href=''>Get started with Crew</a>
                            <a href=''>Help center</a>
                            <a href=''>Webinars</a>
                        </nav>
                    )}
                </div>
                <div className="customers valign-text-middle inter-bold-log-cabin-14-2px">
                    <a href='' className='navbar-link'>Customers</a>
                </div>
                <div className="pricing valign-text-middle inter-bold-log-cabin-15-2px">
                    <a href='#' className='navbar-link'>Pricing</a>
                </div>
            </div>

            <div className="divnavbar_buttons">
                <div className="login valign-text-middle"><a href='#'>Login</a></div>
                <div className="divprimary-button_component-nav">
                    <div className="divprimary-button_ghost-nav">
                        <div className="divprimary-button_ghost_left-nav"></div>
                        <div className="divprimary-button_ghost_right-nav"></div>
                    </div>
                    <div className="abutton">
                        <div className="talk-to-sales valign-text-middle">
                            <a className='button is-small' href='' target='_blank'>Talk to sales</a>
                        </div>
                    </div>
                </div>


                <div className="divprimary-button_component-1">
                    <div className="divprimary-button_ghost-1">
                        <div className="divprimary-button_ghost_left"></div>
                        <div className="divprimary-button_ghost_right-1"></div>
                    </div>
                    <div className="abutton-1">
                        <div className="start-free-trial valign-text-middle">
                            <a className='button is-small is-secondary desktop' href='' target="_blank">Start free trial</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
