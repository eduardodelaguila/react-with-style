import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';

import { ThemeContext } from 'context';
import LoadingSkeleton from 'components/LoadingSkeleton';

import './Preprocessor.scss';
import lotrData from './data';

const Preprocessor = () => {
    const [theme, setThemeCtx] = useContext(ThemeContext);
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        setThemeCtx('green');
        const getCharacters = () => {
            setTimeout(() => {
                setCharacters(lotrData);
            }, 1000);
        };

        getCharacters();
    }, []);

    const renderLoading = () => {
        if (characters.length === 0) {
            return [{}, {}, {}, {}].map(({ index }) => (
                <LoadingSkeleton key={`${Math.random()}${index}}`} />
            ));
        }
        return null;
    };

    const PreprocessorCN = classNames('Preprocessor', theme);

    return (
        <section className={PreprocessorCN}>
            <div className="Preprocessor__grid">
                {renderLoading()}
                {characters.length !== 0 &&
                    characters.map(({ name, race, weapon, photo }, index) => {
                        return (
                            <div
                                className="Preprocessor__grid__item"
                                key={`${name}${index}`}
                            >
                                <div className="Preprocessor__grid__item__photo-container">
                                    <img
                                        className="Preprocessor__grid__item__photo-container__photo"
                                        src={photo}
                                        alt=""
                                    />
                                </div>
                                <div className="Preprocessor__grid__item__data-container">
                                    {/* 2 Lazy to keep using BEM :v */}
                                    <p className="name">{name}</p>
                                    <div className="value-container">
                                        <i className="fad fa-dna"></i>
                                        <p>{race}</p>
                                    </div>
                                    <div className="value-container">
                                        <i className="fad fa-sword"></i>
                                        <p>{weapon}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </section>
    );
};

export default Preprocessor;
