import axios from '../utils/axios';
import { ILoginFormData } from '../store/ducks/user/contracts/actionTypes';
import { User } from '../store/ducks/user/contracts/state';

interface Response<T> {
  status: 'success';
  data: T;
}

export const authApi = {
  async signIn(loginData: ILoginFormData) {
    const { data } = await axios.post<Response<User>>('/auth/login', {
      username: loginData.email,
      password: loginData.password,
    });
    return data.data;
  },

  async checkCurrentUser() {
    const { data } = await axios.get<Response<User>>('/users/me');
    return data.data;
  },
};
