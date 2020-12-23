import { body } from 'express-validator';

export default [
  body('email', 'Введите E-Mail')
    .isEmail()
    .withMessage('Неверный E-Mail')
    .isLength({ min: 7, max: 40 })
    .withMessage("Неверная длина E-Mail'а")
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
    .trim(),

  body('name', 'Введите имя')
    .isString()
    .isLength({ min: 2, max: 100 })
    .withMessage('Неверное имя')
    .trim(),
];
