import { createSlice } from '@reduxjs/toolkit';

import { fetchCars, fetchCarsAll } from './carsOperations';

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
                if (action.payload.page === 1) {
                    state.cars = action.payload.data;
                } else {
                    state.cars = [...state.cars, ...action.payload.data];
                }

                state.loading = false;
            })
            .addCase(fetchCars.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(fetchCarsAll.pending, state => {
                state.loading = true;
            })
            .addCase(fetchCarsAll.fulfilled, (state, action) => {
                state.cars = action.payload;
                state.loading = false;
            })
            .addCase(fetchCarsAll.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    },
});

export const carsReducer = carSlice.reducer;
