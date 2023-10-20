import React, { useEffect, useState } from 'react';
import CarList from 'components/CarList/CarList';
import SearchForm from 'components/SearchForm/SearchForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/cars/carsOperations';

// import { fetchCarsAll } from 'redux/cars/carsOperations';

const Catalog = () => {
    const [page, setPage] = useState(1);
    const [showLoadMore, setShowLoadMore] = useState(true);

    const cars = useSelector(state => state.cars.cars);

    const filter = useSelector(state => state.filter);

    const dispatch = useDispatch();

    const changePage = async () => {
        setPage(prevState => prevState + 1);

        const response = await dispatch(fetchCars(page + 1));

        if (response.payload.data.length < 8) {
            setShowLoadMore(false);
        }
    };

    useEffect(() => {
        if (page === 1) {
            dispatch(fetchCars(1));
        }
    }, [dispatch, page]);

    const visibleCars = () => {
        if (
            filter.brand === '' &&
            filter.price === '' &&
            filter.mileage.from === '' &&
            filter.mileage.to === ''
        ) {
            return cars;
        }

        // const visible = cars
        //     .filter(item => item.make === filter.brand)
        //     .filter(item => item.rentalPrice === filter.price);

        // return visible;

        // const visible = cars
        //     .filter(item => {
        //         return item.make === filter.brand;
        //     })
        //     .filter(item => item.rentalPrice === filter.price)
        //     .filter(
        //         item =>
        //             item.mileage > filter.mileage.from &&
        //             item.mileage < filter.mileage.to
        //     );
        // return visible;

        if (
            filter.brand &&
            filter.price &&
            filter.mileage.from &&
            filter.mileage.to
        ) {
            const visible = cars
                .filter(item => {
                    return item.make === filter.brand;
                })
                .filter(item => item.rentalPrice === filter.price)
                .filter(
                    item =>
                        item.mileage > filter.mileage.from &&
                        item.mileage < filter.mileage.to
                );
            return visible;
        } else if (filter.price && filter.mileage.from && filter.mileage.to) {
            const visible = cars
                .filter(item => item.rentalPrice === filter.price)
                .filter(
                    item =>
                        item.mileage > filter.mileage.from &&
                        item.mileage < filter.mileage.to
                );
            return visible;
        } else if (filter.brand && filter.price && filter.mileage.from) {
            const visible = cars
                .filter(item => {
                    return item.make === filter.brand;
                })
                .filter(item => item.rentalPrice === filter.price)
                .filter(item => item.mileage > filter.mileage.from);

            return visible;
        } else if (filter.brand && filter.price && filter.mileage.to) {
            const visible = cars
                .filter(item => {
                    return item.make === filter.brand;
                })
                .filter(item => item.rentalPrice === filter.price)
                .filter(item => item.mileage < filter.mileage.to);
            return visible;
        } else if (filter.brand && filter.price) {
            const visible = cars
                .filter(item => {
                    return item.make === filter.brand;
                })
                .filter(item => item.rentalPrice === filter.price);
            return visible;
        } else if (filter.brand && filter.mileage.from) {
            const visible = cars
                .filter(item => {
                    return item.make === filter.brand;
                })
                .filter(item => item.mileage > filter.mileage.from);
            return visible;
        } else if (filter.brand && filter.mileage.to) {
            const visible = cars
                .filter(item => {
                    return item.make === filter.brand;
                })
                .filter(item => item.mileage < filter.mileage.to);
            return visible;
        } else if (filter.price && filter.mileage.from) {
            const visible = cars
                .filter(item => item.rentalPrice === filter.price)
                .filter(item => item.mileage > filter.mileage.from);
            return visible;
        } else if (filter.price && filter.mileage.to) {
            const visible = cars
                .filter(item => item.rentalPrice === filter.price)
                .filter(item => item.mileage < filter.mileage.to);
            return visible;
        } else if (filter.brand) {
            const visible = cars.filter(item => item.make === filter.brand);

            return visible;
        } else if (filter.price) {
            const visible = cars.filter(
                item => item.rentalPrice === filter.price
            );

            return visible;
        } else if (filter.mileage.from && filter.mileage.to) {
            const visible = cars.filter(
                item =>
                    item.mileage > filter.mileage.from &&
                    item.mileage < filter.mileage.to
            );
            return visible;
        } else if (filter.mileage.from) {
            const visible = cars.filter(
                item => item.mileage > filter.mileage.from
            );

            return visible;
        } else if (filter.mileage.to) {
            const visible = cars.filter(
                item => item.mileage < filter.mileage.to
            );

            return visible;
        }
        // else if (filter.brand === '') {
        //     const visible = cars
        //         .filter(item => item.rentalPrice === filter.price)
        //         .filter(
        //             item =>
        //                 item.mileage > filter.mileage.from &&
        //                 item.mileage < filter.mileage.to
        //         );
        //     return visible;
        // } else if (filter.price === '') {
        //     const visible = cars
        //         .filter(item => item.make === filter.brand)
        //         .filter(
        //             item =>
        //                 item.mileage > filter.mileage.from &&
        //                 item.mileage < filter.mileage.to
        //         );

        //     return visible;
        // } else if (filter.mileage.from === '' || filter.mileage.to === '') {
        //     const visible = cars
        //         .filter(item => item.make === filter.brand)
        //         .filter(item => item.rentalPrice === filter.price);

        //     return visible;
        // }
    };

    return (
        <div>
            <SearchForm />
            <CarList
                cars={visibleCars()}
                changePage={changePage}
                showLoadMore={showLoadMore}
            />
        </div>
    );
};

export default Catalog;
