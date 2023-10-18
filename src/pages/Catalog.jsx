import React from 'react';
import CarList from 'components/CarList/CarList';
import SearchForm from 'components/SearchForm/SearchForm';

const Catalog = () => {
    return (
        <div>
            <SearchForm />
            <CarList />
        </div>
    );
};

export default Catalog;
