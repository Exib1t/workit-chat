import {createSlice} from '@reduxjs/toolkit';
import {IErrors} from '../../../models/global.types.ts';
import {AuthSliceState} from './authSlice.types.ts';
import {loginThunk, refreshThunk, registerThunk} from './authThunks.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState: AuthSliceState = {
  id: null,
  email: null,
  token: null,
  isLoading: false,
  isAuthenticated: false,
  errors: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      if (!action.payload) {
        AsyncStorage.removeItem('token');
      }
      state.token = action.payload;
    },
    logout: state => {
      AsyncStorage.removeItem('token');
      state.token = null;
      state.isAuthenticated = false;
      state.email = null;
      state.id = null;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(registerThunk.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(registerThunk.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.errors = null;
      state.isAuthenticated = true;
      state.isLoading = false;
    });
    builder.addCase(registerThunk.rejected, (state, action) => {
      state.errors = action.payload as IErrors;
      state.isLoading = false;
      state.isAuthenticated = false;
    });

    builder.addCase(loginThunk.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.errors = null;
      state.isAuthenticated = true;
      state.isLoading = false;
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.errors = action.payload as IErrors;
      state.isLoading = false;
      state.isAuthenticated = false;
    });

    builder.addCase(refreshThunk.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(refreshThunk.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.isAuthenticated = true;
      state.isLoading = false;
    });
    builder.addCase(refreshThunk.rejected, (state, action) => {
      state.id = null;
      state.email = null;
      state.isAuthenticated = false;
      state.errors = action.payload as IErrors;
      state.isLoading = false;
    });
  },
});

export default authSlice.reducer;
export const {setToken, logout, setErrors} = authSlice.actions;
