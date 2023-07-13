import { createSlice } from '@reduxjs/toolkit';
import { getAllUsers } from 'redux/user/operations';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    isLoading: false,
  },
  extraReducers: builder => {
    builder.addCase(getAllUsers.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getAllUsers.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(getAllUsers.fulfilled, state => {
      state.isLoading = false;
    });
  },
});

export const loadingReducer = loadingSlice.reducer;
