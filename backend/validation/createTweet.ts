import { body } from 'express-validator';

export default [body('text', "Invalid tweet's text").isString().isLength({ min: 1, max: 281 })];
