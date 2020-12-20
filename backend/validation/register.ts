import validator from 'express-validator';

validator.body('email', 'Введите E-Mail').isEmail().isLength({ min: 7, max: 40 });
