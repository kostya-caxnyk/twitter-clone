import axios from 'axios';
import { Tweet } from '../store/ducks/tweets/contracts/state';

export const tweetsApi = {
  async getTweets(): Promise<Tweet[]> {
    const { data } = await axios.get('/tweets');
    return data;
  },
};
