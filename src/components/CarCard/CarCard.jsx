import React from 'react';
import {
    CardCar,
    Image,
    ImageGradient,
    Make,
    Model,
    RentalPrice,
    StartDescription,
    Description,
    Button,
} from './CarCard.styled';

const CarCard = ({ item }) => {
    // console.log(
    //     item.address
    //         .split(',')
    //         .slice(1, 4)
    //         .join(' ')
    //         .trim()
    //         .split(' ')
    //         .splice(1, 1)
    // );
    // console.log(item.address);

    const address = item.address?.split(', ').slice(1, 3);

    // console.log(item.address?.split(', ').slice(1, 3));

    return (
        <CardCar key={item.id}>
            <Image src={item.img} alt="" />
            <ImageGradient></ImageGradient>

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
                {item.type} | {item.model} | {item.id}
                {/* {item.functionalities[0]} */}
            </Description>
            <Button>Learn more</Button>
        </CardCar>
    );
};

export default CarCard;
