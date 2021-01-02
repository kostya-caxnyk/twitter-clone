import express from 'express';
require('dotenv').config();
import './core/db';
import UserController from './controllers/UserController';
import regValidators from './validation/register';
import { passport } from './core/passport';
import TweetController from './controllers/TweetController';
import tweetValidators from './validation/createTweet';

const app = express();

const PORT = process.env.PORT || 8888;

app.use(express.json());
app.use(passport.initialize());

app.get('/users', UserController.getUsers);
app.get('/users/me', passport.authenticate('jwt'), UserController.getCurrentUser);
app.get('/users/:id', UserController.getUser);

app.post('/auth/login', passport.authenticate('local'), UserController.login);
app.post('/auth/registration', regValidators, UserController.createUser);
app.get('/auth/verify', UserController.verify);

app.get('/tweets/:id', TweetController.getTweet);
app.get('/tweets', TweetController.getAllTweets);
app.post(
  '/tweets',
  passport.authenticate('jwt', { session: false }),
  tweetValidators,
  TweetController.createTweet,
);
app.delete(
  '/tweets/:id',
  passport.authenticate('jwt', { session: false }),
  TweetController.deleteTweet,
);

app.listen(PORT, () => {
  console.log('server is running on port ' + PORT);
});
