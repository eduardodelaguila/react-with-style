import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

const Home = () => {
    return (
        <div className="Home">
            <nav className="Home__menu">
                <Link to="inline">Inline</Link>
                <Link to="css">CSS</Link>
                <Link to="preprocessor">SASS & Less</Link>
                <Link to="styled">Styled Components</Link>
            </nav>
        </div>
    );
};

export default Home;
