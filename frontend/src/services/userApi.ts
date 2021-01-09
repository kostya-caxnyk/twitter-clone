import axios from '../utils/axios';
import { User } from '../store/ducks/user/contracts/state';

type ResponseStatus = 'success' | 'error';

interface IResponse<T> {
  success: ResponseStatus;
  data: T;
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

  async followUser(id: string): Promise<void> {
    await axios.post('/follow/' + id);
  },

  async unfollowUser(id: string): Promise<void> {
    await axios.delete('/follow/' + id);
  },
};
