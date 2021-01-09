import axios from '../utils/axios';
import { Tweet } from '../store/ducks/tweets/contracts/state';
import { ImageData } from '../store/types';

type ResponseStatus = 'success' | 'error';

interface IResponse<T> {
  success: ResponseStatus;
  data: T;
}

interface CreateTweetData {
  text: string;
  images: ImageData[];
}

export const tweetsApi = {
  async getTweets(username?: string): Promise<Tweet[]> {
    const path = username ? '/user/tweets/' + username : '/tweets';
    const { data } = await axios.get<IResponse<Tweet[]>>(path);
    return data.data;
  },

  async getTweetData(id: string): Promise<Tweet> {
    const { data } = await axios.get<IResponse<Tweet>>('/tweets/' + id);
    return data.data;
  },

  async addTweet(tweetData: CreateTweetData): Promise<Tweet> {
    const { data } = await axios.post<IResponse<Tweet>>('/tweets', tweetData);
    return data.data;
  },

  async deleteTweet(id: string): Promise<string> {
    await axios.delete<IResponse<null>>('/tweets/' + id);
    return id;
  },
};
