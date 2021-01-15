import express from 'express';
import fs from 'fs';
require('dotenv').config();
import './core/db';
import UserController from './controllers/UserController';
import regValidators from './validation/register';
import { passport } from './core/passport';
import TweetController from './controllers/TweetController';
import tweetValidators from './validation/createTweet';
import { upload } from './middlewares/multer';
import { uploads } from './core/cloudinary';
import UploadFilesController from './controllers/UploadFilesController';

const app = express();

const PORT = process.env.PORT || 8888;

app.use(express.json());
app.use(passport.initialize());

app.get('/users', passport.authenticate('jwt'), UserController.getUsers);
app.get('/users/me', passport.authenticate('jwt'), UserController.getCurrentUser);
app.get('/users/:username', UserController.getUser);

app.post('/auth/login', passport.authenticate('local'), UserController.login);
app.post('/auth/registration', regValidators, UserController.createUser);
app.get('/auth/verify', UserController.verify);

app.get('/tweets/:id', TweetController.getTweet);
app.get('/tweets', TweetController.getAllTweets);
app.post('/tweets', passport.authenticate('jwt'), tweetValidators, TweetController.createTweet);
app.delete('/tweets/:id', passport.authenticate('jwt'), TweetController.deleteTweet);

app.get('/user/tweets/:username', UserController.getUserTweets);
app.post('/images', upload.array('images'), UploadFilesController.uploadImages);

app.post('/follow/:id', passport.authenticate('jwt'), UserController.followUser);
app.delete('/follow/:id', passport.authenticate('jwt'), UserController.unFollowUser);

app.post('/like/tweet/:id', passport.authenticate('jwt'), TweetController.likeTweet);
app.delete('/like/tweet/:id', passport.authenticate('jwt'), TweetController.dislikeTweet);
app.post(
  '/comment/tweet/:id',
  passport.authenticate('jwt'),
  tweetValidators,
  TweetController.addComment,
);
app.get('/comments/:id', TweetController.getComments);

app.patch('/edit/profile', passport.authenticate('jwt'), UserController.editUserData);

app.listen(PORT, () => {
  console.log('server is running on port ' + PORT);
});
