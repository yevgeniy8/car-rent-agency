import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64be66165ee688b6250c5763.mockapi.io/api/v1';

export const fetchCars = createAsyncThunk(
    '/cars/getCars',
    async (page, thunkAPI) => {
        try {
            const { data } = await axios(`/adverts?page=${page}&limit=8`);
            return { data, page };
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const fetchCarsAll = createAsyncThunk(
    '/cars/getCarsAll',
    async (page, thunkAPI) => {
        try {
            const { data } = await axios(`/adverts`);
            return { data, page };
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const fetchCarById = createAsyncThunk(
    '/cars/getCarById',
    async (id, thunkAPI) => {
        try {
            const response = await axios(`/adverts/${id}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
