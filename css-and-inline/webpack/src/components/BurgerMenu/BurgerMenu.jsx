import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { ThemeContext, BurgerMenuContext } from 'context/';

// Styles
import './BurgerMenu.scss';

const BurgerMenu = () => {
    const [theme] = useContext(ThemeContext);
    const [burgerMenuIsOpen, setBMIsOpen] = useContext(BurgerMenuContext);

    // Dynamic class names
    const BurgerMenuCN = classNames(
        'BurgerMenu',
        { open: burgerMenuIsOpen },
        { closed: !burgerMenuIsOpen }
    );

    const LinkCN = classNames('BurgerMenu__Link', `button_${theme}`);

    return (
        <ul className={BurgerMenuCN}>
            <div className="BurgerMenu__Close">
                <i
                    className="fas fa-times"
                    onClick={() => setBMIsOpen(false)}
                />
            </div>
            <Link className={LinkCN} to="inline">
                Inline
            </Link>
            <Link className={LinkCN} to="css">
                CSS
            </Link>
            <Link className={LinkCN} to="preprocessor">
                Preprocessors
            </Link>
            <Link className={LinkCN} to="styled">
                Styled Components
            </Link>
        </ul>
    );
};

export default BurgerMenu;
