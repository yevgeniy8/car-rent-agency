import React from 'react';
import styled from '@emotion/styled';
import CarList from 'components/CarList/CarList';
import { useSelector } from 'react-redux';

import Empty from 'components/Empty/Empty';

const Favorite = () => {
    const favoriteCars = useSelector(state => state.favorite.favoriteCars);

    return (
        <div>
            {!favoriteCars.length ? (
                <Empty />
            ) : (
                <div>
                    <TitleFavorite>Your favorites cars</TitleFavorite>
                    <CarList cars={favoriteCars} />
                </div>
            )}
        </div>
    );
};

const TitleFavorite = styled.p`
    color: rgba(18, 20, 23, 0.5);
    font-family: Manrope;
    font-size: 32px;
    font-style: normal;
    font-weight: bold;
    line-height: 1.5;

    text-align: center;
    margin-bottom: 15px;
`;

export default Favorite;
