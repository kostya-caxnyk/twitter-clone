import axios from '../utils/axios';
import { User } from '../store/ducks/user/contracts/state';

type ResponseStatus = 'success' | 'error';

interface IResponse<T> {
  success: ResponseStatus;
  data: T;
}

export interface IEditFormData {
  name: string;
  about: string;
  location: string;
  website: string;
  avatarUrl?: string;
  backgroundUrl?: string;
}

export const userApi = {
  async getUser(username: string): Promise<User> {
    const { data } = await axios.get<IResponse<User>>('/users/' + username);
    return data.data;
  },

  async getUsers(quantity: number): Promise<User[]> {
    const { data } = await axios.get<IResponse<User[]>>('/users?from=0&to=' + quantity);
    return data.data;
  },

  async followUser(id: string): Promise<string[]> {
    const { data } = await axios.post<IResponse<string[]>>('/follow/' + id);
    return data.data;
  },

  async unfollowUser(id: string): Promise<string[]> {
    const { data } = await axios.delete<IResponse<string[]>>('/follow/' + id);
    return data.data;
  },

  async editUserData(newData: IEditFormData): Promise<User> {
    const { data } = await axios.patch<IResponse<User>>('/edit/profile', newData);
    return data.data;
  },
};
