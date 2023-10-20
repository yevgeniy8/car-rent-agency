import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    brand: '',
    price: '',
    mileage: { from: '', to: '' },
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        changeFilter: (state, action) => {
            // console.log(action);
            state.brand = action.payload.brand.value;
            state.price = action.payload.price.value;
            state.mileage = action.payload.mileage;
        },
    },
});

export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
