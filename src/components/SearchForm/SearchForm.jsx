import React, { useState } from 'react';

import {
    Form,
    WrapperBrand,
    Label,
    WrapperPrice,
    Input,
    InputTo,
    Inputs,
    WrapperInput,
    LabelHolder,
    ButtonForm,
} from './SearchForm.styled';

import Select from 'react-select';
import { createBrandOptions } from 'helpers/createBrandOptions';
import { createPriceOptions } from 'helpers/createPriceOptions';

import { changeFilter } from 'redux/filter/filterSlice';

import brandOpt from '../../data/makes.json';
import { useDispatch } from 'react-redux';
import { fetchCars } from 'redux/cars/carsOperations';

const SearchForm = ({ setIsFiltering, setShowLoadMore }) => {
    const dispatch = useDispatch();

    const [brand, setBrand] = useState({
        value: '',
        label: 'Enter the text',
    });
    const [price, setPrice] = useState({
        value: '',
        label: 'To $',
    });

    const [mileage, setMileage] = useState({ from: '', to: '' });

    const handleSelectBrand = option => {
        setBrand(option);
    };

    const handleSelectPrice = option => {
        // console.log(option);
        setPrice({
            value: `$${option.value}`,
            label: `To ${option.label}$`,
        });
    };

    const handleChangeMileage = evt => {
        switch (evt.target.name) {
            case 'from':
                setMileage(prevState => ({
                    ...prevState,
                    from: evt.target.value,
                }));
                break;
            case 'to':
                setMileage(prevState => ({
                    ...prevState,
                    to: evt.target.value,
                }));
                break;
            default:
                break;
        }
    };

    const handleClickSearch = evt => {
        evt.preventDefault();

        setIsFiltering(true);

        // console.log({ brand, price, mileage });

        dispatch(
            changeFilter({
                brand,
                price,
                mileage: {
                    from: mileage.from?.split(',').join(''),
                    to: mileage.to?.split(',').join(''),
                },
            })
        );
    };

    const handleClickClear = evt => {
        evt.preventDefault();

        dispatch(fetchCars(1));

        setIsFiltering(false);
        setShowLoadMore(true);

        setBrand({
            value: '',
            label: 'Enter the text',
        });

        setPrice({
            value: '',
            label: 'To $',
        });

        setMileage({ from: '', to: '' });

        dispatch(
            changeFilter({
                brand: { value: '' },
                price: { value: '' },
                mileage: { from: '', to: '' },
            })
        );
    };

    return (
        <div>
            <Form action="">
                <WrapperBrand>
                    <Label htmlFor="brand">Car brand</Label>
                    <Select
                        id="brand"
                        options={createBrandOptions(brandOpt)}
                        value={brand}
                        onChange={handleSelectBrand}
                        styles={{
                            control: styles => ({
                                ...styles,
                                borderRadius: '14px',
                                height: '48px',
                                backgroundColor: '#F7F7FB',
                                border: 'none',
                                output: 'none',
                            }),
                        }}
                    />
                </WrapperBrand>

                <WrapperPrice>
                    <Label htmlFor="price">Price/ 1 hour</Label>
                    <Select
                        id="price"
                        options={createPriceOptions()}
                        value={price}
                        onChange={handleSelectPrice}
                        styles={{
                            control: styles => ({
                                ...styles,
                                borderRadius: '14px',
                                height: '48px',
                                backgroundColor: '#F7F7FB',
                                border: 'none',
                                output: 'none',
                            }),
                        }}
                    />
                </WrapperPrice>

                <label htmlFor="">
                    <Label> Сar mileage / km</Label>
                    <Inputs>
                        <WrapperInput>
                            <LabelHolder htmlFor="from">From</LabelHolder>
                            <Input
                                type="text"
                                name="from"
                                id="from"
                                value={mileage.from}
                                onChange={handleChangeMileage}
                                format="##,###"
                                maxLength={6}
                                decimalScale={3}
                                thousandSeparator={true}
                            />
                        </WrapperInput>

                        <WrapperInput>
                            <LabelHolder htmlFor="to">To</LabelHolder>
                            <InputTo
                                type="text"
                                name="to"
                                id="to"
                                value={mileage.to}
                                onChange={handleChangeMileage}
                                format="##,###"
                                maxLength={6}
                                decimalScale={3}
                                thousandSeparator={true}
                            />
                        </WrapperInput>
                    </Inputs>
                </label>

                <ButtonForm
                    disabled={
                        brand.value === '' &&
                        price.value === '' &&
                        mileage.from === '' &&
                        mileage.to === ''
                    }
                    onClick={handleClickSearch}
                >
                    Search
                </ButtonForm>

                <ButtonForm
                    disabled={
                        brand.value === '' &&
                        price.value === '' &&
                        mileage.from === '' &&
                        mileage.to === ''
                    }
                    onClick={handleClickClear}
                >
                    Clear
                </ButtonForm>
            </Form>
        </div>
    );
};

export default SearchForm;
