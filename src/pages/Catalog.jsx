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

    const changePage = async () => {
        setPage(prevState => prevState + 1);

        const response = await dispatch(fetchCars(page + 1));
        // console.log(response);
        // console.log(response.payload.data.length < 8);
        if (response.payload.data.length < 8) {
            // console.log('objectobjk');
            setShowLoadMore(false);
        }

        // console.log(page);
    };

    useEffect(() => {
        if (page === 1) {
            dispatch(fetchCars(1));
        }
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
