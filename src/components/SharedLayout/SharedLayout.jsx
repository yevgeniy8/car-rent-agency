import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Main } from './SharedLayout.styled';
import SideBar from 'components/SideBar/SideBar';

const SharedLayout = () => {
    return (
        <Container>
            <SideBar />

            {/* <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/catalog">Catalog</NavLink>
                    <NavLink to="/favorite">Favorite</NavLink>
                </nav>
            </header> */}

            <Main>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            </Main>
        </Container>
    );
};

export default SharedLayout;
