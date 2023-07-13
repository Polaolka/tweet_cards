import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// getAllUsers
export const getAllUsers = createAsyncThunk(
  'user/getAllUsers',
  async (data , thunkAPI) => {

    try {
      const res = await axios.get(`https://642c458dd7081590f93689eb.mockapi.io/users`, {
        params: data 
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// get user by id
export const getUserById = createAsyncThunk(
  'user/getUserById',
  async ([id], thunkAPI) => {
    try {
      const res = await axios.get(`https://642c458dd7081590f93689eb.mockapi.io/users/${id}`);

      return { response: res.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserById = createAsyncThunk(
  'user/updateUserById',
  async (data, thunkAPI) => {
    try {
      const res = await axios.put(`https://642c458dd7081590f93689eb.mockapi.io/users/${data.id}`, data);
      return { response: res.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);