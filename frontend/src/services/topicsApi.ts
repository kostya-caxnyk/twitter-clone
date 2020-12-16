import axios from 'axios';
import { Topic } from '../store/ducks/topics/contracts/state';

export const topicsApi = {
  async getTopics(): Promise<Topic[]> {
    const { data } = await axios.get('/topics');
    return data;
  },
};
