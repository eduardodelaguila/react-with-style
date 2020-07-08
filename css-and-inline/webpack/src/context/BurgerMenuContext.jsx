import { createContext } from 'react';

export const BurgerMenuContext = createContext({
    burgerMenuIsOpen: false,
    setBurgerMenuIsOpen: () => {},
});
