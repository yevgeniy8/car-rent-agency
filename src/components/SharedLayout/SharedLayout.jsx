import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';

const SharedLayout = () => {
    return (
        <Container>
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/catalog">Catalog</NavLink>
                    <NavLink to="/favorite">Favorite</NavLink>
                </nav>
            </header>

            <main>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            </main>
        </Container>
    );
};

export default SharedLayout;
