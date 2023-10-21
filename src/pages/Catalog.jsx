import React, { useEffect, useState } from 'react';
import CarList from 'components/CarList/CarList';
import SearchForm from 'components/SearchForm/SearchForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars, fetchCarsAll } from 'redux/cars/carsOperations';

// import { fetchCarsAll } from 'redux/cars/carsOperations';

const Catalog = () => {
    const [page, setPage] = useState(1);
    const [showLoadMore, setShowLoadMore] = useState(false);
    const [allCars, setAllCars] = useState([]);
    const [isFiltering, setIsFiltering] = useState(false);

    const cars = useSelector(state => state.cars.cars);

    const filter = useSelector(state => state.filter);

    const dispatch = useDispatch();

    const changePage = async () => {
        setShowLoadMore(true);

        setPage(prevState => prevState + 1);

        const response = await dispatch(fetchCars(page + 1));

        if (response.payload.data.length < 8) {
            setShowLoadMore(false);
        }
    };

    useEffect(() => {
        if (page === 1) {
            setShowLoadMore(true);
            dispatch(fetchCars(1));
        }

        // return () => setIsFiltering(false);
    }, [dispatch, page]);

    useEffect(() => {
        if (isFiltering) {
            const func = async () => {
                setShowLoadMore(false);
                const response = await dispatch(fetchCarsAll());
                setAllCars(response.payload.data);
            };
            func();
        }

        // return () => setIsFiltering(false);
    }, [dispatch, isFiltering]);

    const visibleCars = () => {
        if (
            filter.brand === '' &&
            filter.price === '' &&
            filter.mileage.from === '' &&
            filter.mileage.to === ''
        ) {
            return cars;
        }
        if (!isFiltering) {
            return cars;
        }
        if (isFiltering) {
            const filteredCars = allCars.filter(item => {
                let passFilter = true;

                if (filter.brand) {
                    passFilter = passFilter && item.make === filter.brand;
                }

                if (filter.price) {
                    passFilter =
                        passFilter && item.rentalPrice === filter.price;
                }

                if (filter.mileage.from && filter.mileage.to) {
                    passFilter =
                        passFilter &&
                        item.mileage > filter.mileage.from &&
                        item.mileage < filter.mileage.to;
                } else {
                    if (filter.mileage.from) {
                        passFilter =
                            passFilter && item.mileage > filter.mileage.from;
                    }
                    if (filter.mileage.to) {
                        passFilter =
                            passFilter && item.mileage < filter.mileage.to;
                    }
                }

                return passFilter;
            });

            return filteredCars;
        }
    };

    return (
        <div>
            <SearchForm
                setIsFiltering={setIsFiltering}
                setShowLoadMore={setShowLoadMore}
            />
            <CarList
                cars={visibleCars()}
                changePage={changePage}
                showLoadMore={showLoadMore}
            />
        </div>
    );
};

export default Catalog;
