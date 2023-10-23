import React, { useEffect, useState } from 'react';
import {
    CardCar,
    Image,
    ImageGradient,
    Svg,
    Make,
    Model,
    RentalPrice,
    StartDescription,
    Description,
    Button,
} from './CarCard.styled';

import car_default from '../../images/car-default.webp';
import sprite from '../../images/icons.svg';

import Modal from 'components/Modal/Modal';
import FullInformationByCar from 'components/FullInformationByCar/FullInformationByCar';

import { addFavorite, deleteFavorite } from 'redux/favorite/favoriteCarsSlice';
import { useDispatch, useSelector } from 'react-redux';

const CarCard = ({ item }) => {
    const [inFavorite, setInFavorite] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const [image, setImage] = useState();

    const favoriteCars = useSelector(state => state.favorite.favoriteCars);

    useEffect(() => {
        if (
            favoriteCars.filter(favoriteCar => item.id === favoriteCar.id)
                .length
        ) {
            setInFavorite(true);
        }
    }, [favoriteCars, item.id]);

    const dispatch = useDispatch();

    const address = item.address?.split(', ').slice(1, 3);

    const handleClickFavorite = () => {
        setInFavorite(prevState => !prevState);
        if (
            favoriteCars.filter(favoriteCar => item.id === favoriteCar.id)
                .length
        ) {
            dispatch(deleteFavorite(item.id));
        } else {
            dispatch(addFavorite(item));
        }
    };

    const toggleModal = () => {
        setIsOpenModal(prevState => !prevState);
    };

    const loadImage = async imageUrl => {
        try {
            const response = await fetch(imageUrl);
            if (response.ok) {
                setImage(imageUrl);
                return imageUrl;
            }
        } catch (error) {
            console.error('Помилка завантаження зображення:', error);
        }
        setImage(car_default);
        return car_default;
    };

    useEffect(() => {
        loadImage(item.img || item.photoLink);
    }, [item.img, item.photoLink]);

    return (
        <CardCar key={item.id}>
            <ImageGradient>
                <Svg width="18" height="18" onClick={handleClickFavorite}>
                    <use
                        href={
                            !inFavorite
                                ? `${sprite}#icon-normal`
                                : `${sprite}#icon-active`
                        }
                    />
                </Svg>
                <Image src={image} alt="" />
            </ImageGradient>

            <StartDescription>
                <Make>
                    {item.make} <Model>{item.model}</Model>, {item.year}
                </Make>
                <RentalPrice>{item.rentalPrice}</RentalPrice>
            </StartDescription>
            <Description>
                {address[0]} | {address[1]} | {item.rentalCompany}
            </Description>
            <Description>
                {item.type} | {item.model} | {item.id} |{' '}
                {item.functionalities[0]}
            </Description>
            <Button onClick={toggleModal}>Learn more</Button>
            {isOpenModal && (
                <Modal toggleModal={toggleModal}>
                    <FullInformationByCar
                        car={item}
                        toggleModal={toggleModal}
                    />
                </Modal>
            )}
        </CardCar>
    );
};

export default CarCard;
