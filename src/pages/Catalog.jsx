import React, { useEffect, useState } from 'react';
import CarList from 'components/CarList/CarList';
import SearchForm from 'components/SearchForm/SearchForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/cars/carsOperations';

const Catalog = () => {
    const [page, setPage] = useState(1);
    const [showLoadMore, setShowLoadMore] = useState(true);

    const cars = useSelector(state => state.cars.cars);

    const dispatch = useDispatch();

    const changePage = () => {
        setPage(prevState => prevState + 1);

        console.log(page);
    };

    useEffect(() => {
        const func = async () => {
            const response = await dispatch(fetchCars(page));
            console.log(response.payload.length < 8);
            if (response.payload.length < 8) {
                setShowLoadMore(false);
            }
        };

        func();
    }, [dispatch, page]);

    return (
        <div>
            <SearchForm />
            <CarList
                cars={cars}
                changePage={changePage}
                showLoadMore={showLoadMore}
            />
        </div>
    );
};

export default Catalog;
