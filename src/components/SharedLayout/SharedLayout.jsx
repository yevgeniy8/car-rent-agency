import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Main } from './SharedLayout.styled';
import SideBar from 'components/SideBar/SideBar';
import Spinner from 'components/Spinner/Spinner';

const SharedLayout = () => {
    return (
        <Container>
            <SideBar />

            <Main>
                <Suspense fallback={<Spinner />}>
                    <Outlet />
                </Suspense>
            </Main>
        </Container>
    );
};

export default SharedLayout;
