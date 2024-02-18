import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  IRefreshUser,
  IToken,
  IUserCreate,
  IUserLogin,
} from './authSlice.types.ts';
import AuthApi from '../../../services/Api/auth/AuthApi.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const registerThunk = createAsyncThunk<IToken, IUserCreate>(
  'auth/register',
  async (data, thunkAPI) => {
    try {
      const response = await AuthApi.registerUser(data);
      await AsyncStorage.setItem('token', response.data.token);
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data.errors);
    }
  },
);

export const loginThunk = createAsyncThunk<IToken, IUserLogin>(
  'auth/login',
  async (data, thunkAPI) => {
    try {
      console.log(data);
      const response = await AuthApi.loginUser(data);
      await AsyncStorage.setItem('token', response.data.token);
      return response.data;
    } catch (err: any) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.response.data.errors);
    }
  },
);

export const refreshThunk = createAsyncThunk<IRefreshUser, IToken>(
  'auth/refresh',
  async (data, thunkAPI) => {
    try {
      const response = await AuthApi.refreshUser(data);
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data.errors);
    }
  },
);
