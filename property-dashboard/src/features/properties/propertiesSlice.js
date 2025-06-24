import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';

export const addProperty = createAsyncThunk('properties/add', async (newProperty) => {
    const response = await api.post('/properties', newProperty);
    return response.data;
});

export const fetchProperties = createAsyncThunk('properties/fetch', async () => {
    const response = await api.get('/properties');
    return response.data;
});

const propertiesSlice = createSlice({
    name: 'properties',
    initialState: {
        data: [],
        loading: false,
    },
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(fetchProperties.pending, state => {
            state.loading = true;
        })
        .addCase(fetchProperties.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(addProperty.fulfilled, (state, action) => {
            state.data.push(action.payload); 
        });
    },
});

export default propertiesSlice.reducer;
