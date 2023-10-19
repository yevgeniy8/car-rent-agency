import React from 'react';

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

import sprite from '../../images/icons.svg';

const FullInformationByCar = ({ car, toggleModal }) => {
    const rentalConditions = car.rentalConditions.split('\n');

    // console.log(car.mileage.toString().split('').splice(1, 0, ','));

    const mileage = car.mileage.toString().split('');
    console.log(mileage.splice(1, 0, ',').join(''));

    const handleClickClose = () => {
        toggleModal();
    };

    return (
        <div>
            <ButtonClose onClick={handleClickClose}>
                <Svg width="24" height="24">
                    <use href={`${sprite}#icon-close`} />
                </Svg>
            </ButtonClose>
            <Image src={car.img} alt="" width={461} height={248} />
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
                        {mileage}
                    </SecondConditionsStyledBlue>
                </RentalConditionsStyled>
                <RentalConditionsStyled>
                    Price:{' '}
                    <SecondConditionsStyledBlue>
                        {car.rentalPrice}
                    </SecondConditionsStyledBlue>
                </RentalConditionsStyled>
            </WrapperConditions>
            <Button>Rental car</Button>
        </div>
    );
};

export default FullInformationByCar;
