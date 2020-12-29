import axios from 'axios';
import { IUserModel } from './../../../backend/models/UserModel';
import { LoginFormData } from './../pages/AuthPage/components/LoginModal';

interface ErrorResponse {
  status: 'error';
  errors: Error;
}

interface SuccessResponse<T> {
  status: 'success';
  data: T;
}

type Response<T> = ErrorResponse | SuccessResponse<T>;

export const AuthApi = {
  async signIn(loginData: LoginFormData) {
    const { data } = await axios.post<Response<any>>('/auth/login', loginData);
    console.log(data);
  },
};
