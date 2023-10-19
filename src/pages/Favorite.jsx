import React from 'react';

import CarList from 'components/CarList/CarList';
import { useSelector } from 'react-redux';

const Favorite = () => {
    const favoriteCars = useSelector(state => state.favorite.favoriteCars);
    // console.log(favoriteCars);

    return (
        <div>
            <CarList cars={favoriteCars} />
        </div>
    );
};

export default Favorite;
