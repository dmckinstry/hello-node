
import { createSlice } from '@reduxjs/toolkit';

const initialState = {message: 'Not fired yet.'};

const exampleSlice = createSlice({
    name: 'example',
    initialState,
    reducers: {
        update(state) {
            state.message = 'Action was called and the reducer fired.'
        }
    }
});

export const { update } = exampleSlice.actions;
export default exampleSlice.reducer;
