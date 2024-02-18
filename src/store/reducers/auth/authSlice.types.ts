import {IErrors} from '../../../models/global.types.ts';

export interface AuthSliceState {
  id: number | null;
  email: string | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  errors: IErrors | null;
}

export interface IUserCreate {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface IUserLogin {
  email: string;
  password: string;
  isRemember: boolean;
}

export interface IToken {
  token: string;
}

export interface IRefreshUser {
  id: number;
  email: string;
}
