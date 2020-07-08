import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import classNames from 'classnames';

// Routes
import Home from 'modules/Home/';
import Inline from 'modules/Inline/';
import Css from 'modules/Css/';
import Preprocessor from 'modules/Preprocessor/';
import StyledComponents from 'modules/StyledComponents/';

// Components
import NavBar from 'components/NavBar/';
import BurgerMenu from 'components/BurgerMenu/';

// Styles
import './index.scss';
import 'styles/reset.css';
import 'styles/fontawesome/all.css';

// Context
import { ThemeContext, BurgerMenuContext } from 'context/';

function App() {
    let isHome;
    const [theme, setTheme] = useState('white');
    const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);

    useEffect(() => {
        isHome = window.location.pathname === '/';
    }, [window.location.pathname]);

    const appClassName = classNames('app', theme, {
        'app--withNavBar': !isHome,
    });

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            <BurgerMenuContext.Provider
                value={[burgerMenuIsOpen, setBurgerMenuIsOpen]}
            >
                <Router>
                    {!isHome && <NavBar />}
                    <BurgerMenu />
                    <div id="floating-menu-container" />
                    <div className={appClassName}>
                        <Switch>
                            <Route exact path="/inline">
                                <Inline />
                            </Route>
                            <Route exact path="/css">
                                <Css />
                            </Route>
                            <Route exact path="/preprocessor">
                                <Preprocessor />
                            </Route>
                            <Route exact path="/styled">
                                <StyledComponents height="360px" />
                            </Route>
                            <Route exact path="/home">
                                <Home />
                            </Route>

                            <Route path="/">
                                <Redirect to="/home" />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </BurgerMenuContext.Provider>
        </ThemeContext.Provider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
