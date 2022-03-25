import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, fetchCurrentUser } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  // error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    // [register.rejected](state, { payload }) {
    //   state.error = payload;
    //   state.isLoggedIn = false;
    // },

    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    // [logIn.rejected](state, { payload }) {
    //   state.error = payload;
    //   state.isLoggedIn = false;
    // },
    
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    // [logOut.rejected](state, { payload }) {
    //   state.error = payload;
    //   state.isLoggedIn = true;
    // },
    
    [fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [fetchCurrentUser.rejected](state, { payload }) {
      state.isFetchingCurrentUser = false;
      // state.error = payload;
      // state.isLoggedIn = false;
    },
  },
});

export const authReducer = authSlice.reducer;


// const error = createReducer(null, {
//   [fetchContacts.rejected]: (_, { payload }) => payload,
//   [fetchContacts.pending]: () => null,
//   [addContact.rejected]: (_, { payload }) => payload,
//   [addContact.pending]: () => null,
//   [deleteContact.rejected]: (_, { payload }) => payload,
//   [deleteContact.pending]: () => null,
// });