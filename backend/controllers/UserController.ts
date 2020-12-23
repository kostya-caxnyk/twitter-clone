import { transporter } from './../core/mailer';
import { generateMD5 } from './../utils/generateHash';
import express from 'express';
import { validationResult } from 'express-validator';
import UserModel from '../models/UserModel';
import regEmail from '../emails/registration';
import { isValidObjectId } from 'mongoose';

enum Status {
  SUCCESS = 'sucess',
  ERROR = 'error',
}
class UserController {
  async getUsers(_: any, res: express.Response): Promise<void> {
    try {
      const users = await UserModel.find().exec();

      res.status(200).json({
        status: Status.SUCCESS,
        data: users,
      });
    } catch (error) {
      res.status(500).json({
        status: Status.ERROR,
        errors: error,
      });
    }
  }
  async createUser(req: express.Request, res: express.Response): Promise<void> {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({
          status: Status.ERROR,
          errors: errors.array(),
        });
        return;
      }

      const { email, password, name, username } = req.body;
      const data = {
        email,
        name,
        username,
        password: generateMD5(password + process.env.SECRET_KEY),
        confirmHash: generateMD5(process.env.SECRET_KEY || Math.random().toString()),
      };

      const user = new UserModel(data);
      await user.save();

      res.status(201).json({
        status: Status.SUCCESS,
        data: user,
      });

      await transporter.sendMail(regEmail(email, data.confirmHash));
    } catch (error) {
      res.status(500).json({
        status: Status.ERROR,
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
          status: Status.SUCCESS,
        });
      } else {
        res.status(404).send();
      }
    } catch (error) {
      res.status(500).json({
        status: Status.ERROR,
        errors: error,
      });
    }
  }

  async getUser(req: express.Request, res: express.Response) {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      res.status(400).send();
      return;
    }

    const user = await UserModel.findById(id).exec();

    if (!user) {
      res.status(404).json({
        status: Status.ERROR,
        errors: 'Пользователь не найден',
      });
      return;
    }

    res.status(200).json({
      status: Status.SUCCESS,
      data: user,
    });
  }
}

export default new UserController();
