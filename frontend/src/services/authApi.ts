import axios from 'axios';
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
    const { data } = await axios.post<Response<any>>('/auth/login', {
      username: loginData.email,
      password: loginData.password,
    });
    return data;
  },
};
