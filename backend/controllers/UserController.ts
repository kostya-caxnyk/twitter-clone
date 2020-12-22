import { transporter } from './../core/mailer';
import { generateMD5 } from './../utils/generateHash';
import express from 'express';
import { validationResult } from 'express-validator';
import UserModel from '../models/UserModel';
import regEmail from '../emails/registration';
class UserController {
  async getUsers(_: any, res: express.Response): Promise<void> {
    try {
      const users = await UserModel.find().exec();

      res.status(200).json({
        status: 'success',
        data: users,
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        errors: error,
      });
    }
  }
  async createUser(req: express.Request, res: express.Response): Promise<void> {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({
          status: 'error',
          errors: errors.array(),
        });
        return;
      }

      const { email, password, name, username } = req.body;
      const data = {
        email,
        password,
        name,
        username,
        confirmHash: generateMD5(process.env.SECRET_KEY || Math.random().toString()),
      };

      const user = new UserModel(data);
      await user.save();

      res.status(201).json({
        status: 'success',
        data: user,
      });

      await transporter.sendMail(regEmail(email, data.confirmHash));
    } catch (error) {
      res.status(500).json({
        status: 'error',
        errors: error,
      });
    }
  }

  async verify(req: express.Request, res: express.Response): Promise<void> {
    try {
      const { hash } = req.query as any;

      if (!hash) {
        res.status(400).send();
        return;
      }

      const user = await UserModel.findOne({ confirmHash: hash }).exec();

      if (user) {
        user.confirmed = true;
        await user.save();

        res.status(200).json({
          status: 'success',
        });
      } else {
        res.status(404).send();
      }
    } catch (error) {
      res.status(500).json({
        status: 'error',
        errors: error,
      });
    }
  }
}

export default new UserController();
