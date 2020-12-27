import axios from '../utils/axios';
import { Tweet } from '../store/ducks/tweets/contracts/state';

type ResponseStatus = 'success' | 'error';

interface IResponse<T> {
  success: ResponseStatus;
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

  async deleteTweet(id: string): Promise<string> {
    await axios.delete<IResponse<null>>('/tweets/' + id);
    return id;
  },
};
