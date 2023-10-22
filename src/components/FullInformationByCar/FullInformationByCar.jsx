import React, { useEffect, useState } from 'react';

import {
    ButtonClose,
    Svg,
    Image,
    Make,
    CarSpecification,
    Accessories,
    RentalConditions,
    WrapperConditions,
    RentalConditionsStyled,
    SecondConditionsStyled,
    SecondConditionsStyledBlue,
    Button,
} from './FullInformationByCar.styled';

import { Model, Description } from 'components/CarCard/CarCard.styled';

import car_default from '../../images/car-default.webp';

import sprite from '../../images/icons.svg';

const FullInformationByCar = ({ car, toggleModal }) => {
    const [image, setImage] = useState();

    const rentalConditions = car.rentalConditions.split('\n');

    const carMileagemassive = car.mileage.toString().split('');
    carMileagemassive.splice(1, 0, ',');

    const handleClickClose = () => {
        toggleModal();
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
        loadImage(car.img || car.photoLink);
    }, [car.img, car.photoLink]);

    return (
        <div>
            <ButtonClose onClick={handleClickClose}>
                <Svg width="24" height="24">
                    <use href={`${sprite}#icon-close`} />
                </Svg>
            </ButtonClose>
            <Image src={image} alt="" width={461} height={248} />
            <Make>
                {car.make} <Model>{car.model}</Model>, {car.year}
            </Make>
            <Description>
                {car.address[0]} | {car.address[1]} | Id: {car.id} | Year:{' '}
                {car.year} | Type: {car.type}
            </Description>
            <Description>
                Fuel Consumption: {car.fuelConsumption} | Engine Size:{' '}
                {car.engineSize}
            </Description>
            <CarSpecification>{car.description}</CarSpecification>
            <Accessories>Accessories and functionalities:</Accessories>
            <Description>
                {car.accessories[0]} | {car.accessories[1]} |{' '}
                {car.accessories[2]}
            </Description>
            <Description>
                {car.functionalities[0]} | {car.functionalities[1]} |{' '}
                {car.functionalities[2]}
            </Description>
            <RentalConditions>Rental Conditions:</RentalConditions>
            <WrapperConditions>
                <SecondConditionsStyled>
                    {rentalConditions[0].split(': ')[0]}:{' '}
                    <SecondConditionsStyledBlue>
                        {rentalConditions[0].split(': ')[1]}
                    </SecondConditionsStyledBlue>
                </SecondConditionsStyled>{' '}
                <RentalConditionsStyled>
                    {rentalConditions[1]}
                </RentalConditionsStyled>
            </WrapperConditions>
            <WrapperConditions>
                <RentalConditionsStyled>
                    {rentalConditions[2]}
                </RentalConditionsStyled>
                <RentalConditionsStyled>
                    Mileage:{' '}
                    <SecondConditionsStyledBlue>
                        {carMileagemassive.join('')}
                    </SecondConditionsStyledBlue>
                </RentalConditionsStyled>
                <RentalConditionsStyled>
                    Price:{' '}
                    <SecondConditionsStyledBlue>
                        {car.rentalPrice}
                    </SecondConditionsStyledBlue>
                </RentalConditionsStyled>
            </WrapperConditions>
            <Button to="tel:+380730000000">Rental car</Button>
        </div>
    );
};

export default FullInformationByCar;
