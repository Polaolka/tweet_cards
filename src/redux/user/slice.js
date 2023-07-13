import { createSlice } from '@reduxjs/toolkit';
import { getAllUsers, getUserById, updateUserById } from './operations';

const initialState = {
  user: {
    id: '',
    name: '',
    avatar: '',
    tweets: [],
    followers: null,
  },
  users: [],
  favoriteUsers: [],
  select: "",
  error: null,
  currentPage: 1,
  isLoadinggetAllUsers: false,
  isLoadingGetUserById: false,
  isLoadingUpdateUserById: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToFavArr: (state, action) => {
      if (state.favoriteUsers.indexOf(action.payload) === -1) {
        state.favoriteUsers.push(action.payload);
      }
    },
    removeFromFavArr: (state, action) => {
      state.favoriteUsers = state.favoriteUsers.filter((number) => number !== action.payload);
    },
    selectCategory: (state, action) => {
      state.select = action.payload;
    },
    nextPage: (state, action) => {
      state.currentPage +=1;
    },
    firstPage: (state, action) => {
      state.currentPage = 1;
    },
    takeEmptyUser: (state, action) => {
      state.user = {
        id: '',
        name: '',
        avatar: '',
        tweets: [],
        followers: null,
      };
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getUserById.fulfilled, (state, action) => {
        const { id, name, avatar, tweets, followers } =
          action.payload.response;
        state.user.id = id;
        state.user.name = name;
        state.user.avatar = avatar;
        state.user.tweets = tweets;
        state.user.followers = followers;
        state.error = null;
        state.isLoadingGetUserById = false;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoadingGetUserById = false;
      })
      .addCase(getUserById.pending, state => {
        state.isLoadingGetUserById = true;
      })
      .addCase(updateUserById.fulfilled, (state, action) => {
        const { id, name, avatar, tweets, followers  } =
          action.payload.response;
        state.user.id = id;
        state.user.name = name;
        state.user.avatar = avatar;
        state.user.tweets = tweets;
        state.user.followers = followers;
        state.error = null;
        state.isLoadingUpdateUserById = false;
      })
      .addCase(updateUserById.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoadingUpdateUserById = false;
      })
      .addCase(updateUserById.pending, state => {
        state.isLoadingUpdateUserById = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.error = null;
        state.isLoadinggetAllUsers = false;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoadinggetAllUsers = false;
      })
      .addCase(getAllUsers.pending, state => {
        state.isLoadinggetAllUsers = true;
      })
      
  },
});
export const { addToFavArr, removeFromFavArr, selectCategory, nextPage, firstPage, takeEmptyUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
