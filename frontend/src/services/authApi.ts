import axios from 'axios';
import { IUserModel } from './../../../backend/models/UserModel';
import { LoginFormData } from './../pages/AuthPage/components/LoginModal';
export const AuthApi = {
  async signIn(loginData: LoginFormData): Promise<IUserModel> {
    const { data } = axios.post('/auth/login', loginData);
  },
};
