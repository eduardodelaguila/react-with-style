import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import Confetti from 'react-confetti';

import { ThemeContext } from 'context';

import './Css.css';

const Css = () => {
    const [showConfetti, setShowConfetti] = useState(false);
    const [theme, setThemeCtx] = useContext(ThemeContext);
    useEffect(() => {
        setThemeCtx('lilac');
    }, []);

    const triggerConfetti = () => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 4500);
    };

    const cssCN = classNames('Css', theme);
    return (
        <section className={cssCN}>
            <div className="Css__form" submit={() => false}>
                <p className="Css__form__title">Fancy Form</p>
                <label className="Css__form__input-label" htmlFor="form-name">
                    Name
                </label>
                <input
                    name="form-name"
                    className="Css__form__input"
                    name
                ></input>
                <label
                    className="Css__form__input-label"
                    htmlFor="form-middlename"
                >
                    Middle Name
                </label>
                <input
                    name="form-middlename"
                    className="Css__form__input"
                ></input>
                <label
                    className="Css__form__input-label"
                    htmlFor="form-lastname"
                >
                    Last Name
                </label>
                <input
                    name="form-lastname"
                    className="Css__form__input"
                ></input>
                <label className="Css__form__input-label" htmlFor="form-hobbie">
                    Your hobbie
                </label>
                <input name="form-hobbie" className="Css__form__input"></input>
                <button
                    className="Css__form__button hoverable"
                    onClick={triggerConfetti}
                >
                    Submit
                </button>
            </div>
            {showConfetti && (
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                />
            )}
        </section>
    );
};

export default Css;
