import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favoriteCars: [],
    isLoading: false,
    error: null,
};

export const favoriteSlice = createSlice({
    name: 'favoriteCars',
    initialState: initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.favoriteCars.push(action.payload);
        },
        deleteFavorite: (state, action) => {
            state.favoriteCars = state.favoriteCars.filter(
                item => item.id !== action.payload
            );
        },
    },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { addFavorite, deleteFavorite } = favoriteSlice.actions;
