import axios from 'axios';
import { Tweet } from '../store/ducks/tweets/contracts/state';

export const tweetsApi = {
  async getTweets(): Promise<Tweet[]> {
    const { data } = await axios.get('/tweets');
    return data;
  },
  async getTweetData(id: string): Promise<Tweet[]> {
    const { data } = await axios.get('/tweets?_id=' + id);
    return data;
  },
  async addTweet(tweet: Tweet): Promise<Tweet> {
    const { data } = await axios.post('/tweets', tweet);
    return data;
  },
};
