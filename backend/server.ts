import express from 'express';
require('dotenv').config();
import './core/db';
import UserController from './controllers/UserController';
import regValidators from './validation/register';

const app = express();

const PORT = process.env.PORT || 8888;

app.use(express.json());

app.get('/users', UserController.getUsers);
app.post('/users', regValidators, UserController.createUser);
app.get('/users/verify', UserController.verify);

app.listen(PORT, () => {
  console.log('server is running on port ' + PORT);
});
