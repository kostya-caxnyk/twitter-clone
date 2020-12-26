import axios from '../utils/axios';
import { Tweet } from '../store/ducks/tweets/contracts/state';

interface IResponse<T> {
  success: string;
  data: T;
}

export const tweetsApi = {
  async getTweets(): Promise<Tweet[]> {
    const { data } = await axios.get<IResponse<Tweet[]>>('/tweets');
    return data.data;
  },

  async getTweetData(id: string): Promise<Tweet> {
    const { data } = await axios.get<IResponse<Tweet>>('/tweets/' + id);
    return data.data;
  },

  async addTweet(text: string): Promise<Tweet> {
    const { data } = await axios.post<IResponse<Tweet>>('/tweets', { text });
    return data.data;
  },
};
