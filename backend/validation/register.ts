import { body } from 'express-validator';
import UserModel from '../models/UserModel';

export default [
  body('email', 'Введите E-Mail')
    .isEmail()
    .withMessage('Неверный E-Mail')
    .isLength({ min: 7, max: 40 })
    .withMessage("Неверная длина E-Mail'а")
    .custom(async (email, { req }) => {
      try {
        const candidate = await UserModel.findOne({ email });

        if (candidate) {
          return Promise.reject('Пользователь с таким E-mail уже существует');
        }
      } catch (e) {
        console.log(e);
      }
    })
    .normalizeEmail(),

  body('password', 'Введите пароль')
    .isString()
    .withMessage('Неверный пароль')
    .isLength({ min: 6, max: 100 })
    .withMessage('Неверный пароль')
    .trim(),

  body('password2')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Пароли не совпадают');
      } else return true;
    })
    .trim(),

  body('username', 'Введите логин')
    .isString()
    .isLength({ min: 2, max: 50 })
    .withMessage('Неверный логин')
    .custom(async (username, { req }) => {
      try {
        const candidate = await UserModel.findOne({ username });

        if (candidate) {
          return Promise.reject('Пользователь с таким никнеймом уже существует');
        }
      } catch (e) {
        console.log(e);
      }
    })
    .trim(),

  body('name', 'Введите имя')
    .isString()
    .isLength({ min: 2, max: 50 })
    .withMessage('Неверное имя')
    .trim(),
];
