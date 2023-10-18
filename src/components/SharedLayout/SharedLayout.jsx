import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => {
    return (
        <div>
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
        </div>
    );
};

export default SharedLayout;
