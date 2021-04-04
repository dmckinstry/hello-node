import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { items: [] };

export const fetchList = createAsyncThunk(
    'example/all',
    async () => {
      const {data } = await axios.get('/api/example/all')
      return data;
    }
  );

const dataFetchSlice = createSlice({
    name: 'dataFetch',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchList.fulfilled]: (state, action) => {
          state.items = action.payload;
          return state;
        }
      }
});



  export default dataFetchSlice.reducer;