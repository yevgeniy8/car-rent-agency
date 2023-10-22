import React from 'react';
import { Header, Title, Navigation, NavigLink } from './SideBar.styled';

const SideBar = () => {
    return (
        <Header>
            <Title>Car Rent Agency</Title>
            <Navigation>
                <NavigLink to="/">Home</NavigLink>
                <NavigLink to="/catalog">Catalog</NavigLink>
                <NavigLink to="/favorites">Favorites</NavigLink>
            </Navigation>
        </Header>
    );
};

export default SideBar;
