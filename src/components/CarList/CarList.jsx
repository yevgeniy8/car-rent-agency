import React, { useEffect, useState } from 'react';
import CarCard from 'components/CarCard/CarCard';
import axios from 'axios';

import { ListCar } from './CarList.styled';
import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';

const CarList = () => {
    const [cars, setCars] = useState([]);
    const [page, setPage] = useState(1);

    const changePage = () => {
        setPage(prevState => prevState + 1);

        console.log(page);
    };

    useEffect(() => {
        const func = async () => {
            const response = await axios(
                `https://64be66165ee688b6250c5763.mockapi.io/api/v1/adverts?page=${page}&limit=8`
            );
            console.log(response);
            setCars(response.data);
        };

        func();
    }, [page]);

    return (
        <div>
            <ListCar>
                {cars?.map(item => (
                    <CarCard key={item.id} item={item} />
                ))}
            </ListCar>

            <ButtonLoadMore changePage={changePage} />
        </div>
    );
};

export default CarList;
