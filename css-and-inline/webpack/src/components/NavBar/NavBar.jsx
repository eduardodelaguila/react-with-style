import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import { ThemeContext, BurgerMenuContext } from 'context/';

import './Navbar.scss';

const NavBar = () => {
    const [theme] = useContext(ThemeContext);
    const [, setBMIsOpen] = useContext(BurgerMenuContext);
    const { pathname } = useLocation();

    // Dynamic class names
    const navBarCN = classNames('NavBar', theme, 'theme-menu');
    const ToggleHamburgerMenuCN = classNames(
        'NavBar__toggle-hamburger-menu',
        'hoverable',
        theme
    );

    return (
        <nav className={navBarCN}>
            <span
                className={ToggleHamburgerMenuCN}
                onClick={() => setBMIsOpen(true)}
            >
                <i className="fad fa-bars"></i>
            </span>
            <div>
                <p>
                    React with <i>style</i>
                </p>
                <div>
                    {pathname === '/' ? 'Home' : pathname.replace('/', '')}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
