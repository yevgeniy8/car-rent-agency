import { createSlice } from '@reduxjs/toolkit';

import { fetchCars } from './carsOperations';

const initialState = {
    cars: [],
    loading: false,
    error: null,
};

export const carSlice = createSlice({
    name: 'cars',
    initialState: initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchCars.pending, state => {
                state.loading = true;
            })
            .addCase(fetchCars.fulfilled, (state, action) => {
                // if (state.cars.length) {
                //     state.cars.push(action.payload);
                // } else {
                //     state.cars = action.payload;
                // }

                console.log(state.cars.length);
                console.log(action.payload);

                // state.cars = action.payload;
                // state.cars.push(...action.payload);

                // state.cars = [...state.cars, ...action.payload];
                state.cars = [...state.cars, ...action.payload];

                state.loading = false;
            })
            .addCase(fetchCars.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    },
});

export const carsReducer = carSlice.reducer;
