import React from 'react';
import image from '../../images/car.jpeg';
import {
    WrapperHome,
    Title,
    Description,
    ListDescription,
    WrapperList,
    Li,
    TextReserve,
    ButtonWrapper,
    Image,
} from './HomeInformation.styled';

import { ButtonForm } from 'components/SearchForm/SearchForm.styled';
import { useNavigate } from 'react-router-dom';

const HomeInformation = () => {
    const navigate = useNavigate();

    const handleClick = evt => {
        navigate('/catalog');
    };

    return (
        <WrapperHome>
            <Title>Welcome to Car Rent Agency</Title>
            <Description>
                Are you looking for the perfect car for travel and vacations?
                "Free Road" is what you need! We offer the widest selection of
                quality cars for every taste and budget.
            </Description>

            <ListDescription>Our services include:</ListDescription>
            <WrapperList>
                <ul>
                    <Li>
                        Diverse car fleet: You can choose the car you like. From
                        comfortable family minivans to economy class, we have a
                        car for every customer.
                    </Li>
                    <Li>
                        Convenient rental conditions: Our rates are competitive
                        and transparent. We also offer flexible rental terms.
                    </Li>
                    <Li>
                        Security and support: We always care about your
                        security. We have insurance and a roadside assistance
                        program.
                    </Li>
                </ul>

                <Image src={image} alt="" width={560} />
            </WrapperList>
            <ButtonWrapper>
                <ButtonForm onClick={handleClick}>Go to rent car</ButtonForm>
            </ButtonWrapper>

            <TextReserve>
                Reserve your car today and enjoy the Car Rent Agency trip.
            </TextReserve>
        </WrapperHome>
    );
};

export default HomeInformation;
