import { body } from 'express-validator';

export default [body('text', "Invalid tweet's text").isString().isLength({ max: 281 })];
