import React from 'react';
import empty from '../../images/empty.png';
import { useNavigate } from 'react-router-dom';
import { EmptyWrapper, Text, TextSecondary } from './Empty.styled';
import { ButtonForm } from 'components/SearchForm/SearchForm.styled';

const Empty = () => {
    const navigate = useNavigate();

    const handleClick = evt => {
        navigate('/catalog');
    };

    return (
        <EmptyWrapper>
            <img src={empty} alt="" width={150} />
            <Text>You have not yet added any ad to your favorites</Text>
            <TextSecondary>
                Save interesting offers to track prices and quickly find what
                you like.
            </TextSecondary>
            <ButtonForm onClick={handleClick}>Go to search</ButtonForm>
        </EmptyWrapper>
    );
};

export default Empty;
