import React from 'react';
import { ButtonMore } from './ButtonLoadMore.styled';

const ButtonLoadMore = ({ changePage }) => {
    return <ButtonMore onClick={changePage}>Load more</ButtonMore>;
};

export default ButtonLoadMore;
