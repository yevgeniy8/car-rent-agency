import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from '../SharedLayout/SharedLayout';
import { lazy } from 'react';

const Home = lazy(() => import('../../pages/Home'));
const Catalog = lazy(() => import('../../pages/Catalog'));
const Favorite = lazy(() => import('../../pages/Favorite'));

export const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path="catalog" element={<Catalog />} />
                    <Route path="favorites" element={<Favorite />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </div>
    );
};
