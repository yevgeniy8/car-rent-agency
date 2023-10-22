// import React, { useEffect, useState } from 'react';
import CarCard from 'components/CarCard/CarCard';

import { ListCar } from './CarList.styled';
import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';

const CarList = ({ cars, changePage, showLoadMore, isFiltering }) => {
    const isLoading = useSelector(state => state.cars.loading);

    return (
        <div>
            <ListCar>
                {cars?.map(item => (
                    <CarCard key={item.id} item={item} />
                ))}
            </ListCar>

            {!isFiltering &&
                (isLoading ? (
                    <Loading>Loading...</Loading>
                ) : (
                    showLoadMore && <ButtonLoadMore changePage={changePage} />
                ))}
        </div>
    );
};

const Loading = styled.div`
    color: #000000;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5;

    display: block;
    /* margin: 0 auto; */

    margin-bottom: 100px;

    text-align: center;
`;

export default CarList;
