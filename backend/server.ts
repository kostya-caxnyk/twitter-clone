import express from 'express';
require('dotenv').config();
import './core/db';
import UserController from './controllers/UserController';
import regValidators from './validation/register';
import { passport } from './core/passport';

const app = express();

const PORT = process.env.PORT || 8888;

app.use(express.json());
app.use(passport.initialize());

app.get('/users', UserController.getUsers);
app.get('/users/me', passport.authenticate('jwt'), (req, res) => {
  res.json('hello');
});
app.post('/auth/registration', regValidators, UserController.createUser);
app.get('/auth/verify', UserController.verify);
app.get('/users/:id', UserController.getUser);
app.post('/auth/login', passport.authenticate('local'), UserController.getlogin);

app.listen(PORT, () => {
  console.log('server is running on port ' + PORT);
});
