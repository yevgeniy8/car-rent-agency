import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navigation } from './SideBar.styled';

const SideBar = () => {
    return (
        <header>
            <Navigation>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/catalog">Catalog</NavLink>
                <NavLink to="/favorite">Favorite</NavLink>
            </Navigation>
        </header>
    );
};

export default SideBar;
