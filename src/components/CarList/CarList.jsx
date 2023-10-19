// import React, { useEffect, useState } from 'react';
import CarCard from 'components/CarCard/CarCard';

import { ListCar } from './CarList.styled';
import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCars } from 'redux/cars/carsOperations';

const CarList = ({ cars, changePage, showLoadMore }) => {
    return (
        <div>
            <ListCar>
                {cars?.map(item => (
                    <CarCard key={item.id} item={item} />
                ))}
            </ListCar>

            {showLoadMore && <ButtonLoadMore changePage={changePage} />}
        </div>
    );
};

export default CarList;
