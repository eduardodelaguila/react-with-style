import React, { useContext, useEffect } from 'react';

import { ThemeContext } from 'context';

const Inline = () => {
    const [, setThemeCtx] = useContext(ThemeContext);
    useEffect(() => {
        setThemeCtx('blue');
    }, []);

    return (
        <section
            style={{
                height: '100%',
                width: '100%',
                backgroundColor: '#9DD0E6',
            }}
        >
            <div
                style={{
                    height: '350px',
                    width: '450px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#475467',
                }}
            >
                <p
                    style={{
                        fontFamily: 'Raleway',
                        fontWeight: 400,
                        fontSize: '2em',
                        color: '#FFF',
                    }}
                >
                    This is a test
                </p>
            </div>
        </section>
    );
};

export default Inline;
