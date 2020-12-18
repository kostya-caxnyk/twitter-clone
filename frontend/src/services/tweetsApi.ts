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
  async addTweet(text: string): Promise<Tweet> {
    const tweet = {
      _id: '5fd8a1124a883c58bce81e3512',
      user: {
        name: 'Kostya Sakhnyuk',
        username: 'kostya3228',
        avatarUrl: 'https://www.computerhope.com/jargon/g/guest-user.jpg',
      },
      date: '2014-12-22T12:28:21 -03:00',
      text,
    };
    const { data } = await axios.post('/tweets', tweet);
    return data;
  },
};
