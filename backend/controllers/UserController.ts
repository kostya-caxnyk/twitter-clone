import { isValidObjectId } from 'mongoose';
import jwt from 'jsonwebtoken';
import express from 'express';
import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';

import { IUserModel } from './../models/UserModel';
import { transporter } from './../core/mailer';
import UserModel from '../models/UserModel';
import regEmail from '../emails/registration';
import { errorResponse, successResponse } from './../utils/sendResponse';

class UserController {
  async getUsers(_: any, res: express.Response): Promise<void> {
    try {
      const users = await UserModel.find().exec();

      successResponse(res, 200, { data: users });
    } catch (errors) {
      errorResponse(res, 500, { errors });
    }
  }
  async createUser(req: express.Request, res: express.Response): Promise<void> {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        errorResponse(res, 400, { errors: errors.array() });
        return;
      }

      const { email, password, name, username } = req.body;
      const data = {
        email,
        name,
        username,
        password: await bcrypt.hash(password, 10),
        confirmHash: await bcrypt.genSalt(8),
      };

      const user = new UserModel(data);
      await user.save();

      successResponse(res, 201, { data: user });

      await transporter.sendMail(regEmail(email, data.confirmHash));
    } catch (errors) {
      errorResponse(res, 500, { errors });
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

        successResponse(res, 200);
      } else {
        res.status(404).send();
      }
    } catch (errors) {
      errorResponse(res, 500, { errors });
    }
  }

  async getUser(req: express.Request, res: express.Response) {
    try {
      const { id } = req.params;

      if (!isValidObjectId(id)) {
        res.status(400).send();
        return;
      }

      const user = await UserModel.findById(id).exec();

      if (!user) {
        errorResponse(res, 404, { errors: 'Пользователь не найден' });
        return;
      }

      successResponse(res, 200, { data: user });
    } catch (errors) {
      errorResponse(res, 500, { errors });
    }
  }

  async login(req: express.Request, res: express.Response): Promise<void> {
    try {
      const user = req.user as IUserModel | undefined;
      if (!user) {
        errorResponse(res, 500);
        return;
      }

      const { _id, username, name } = user;
      const jwtData = { _id, username, name };
      successResponse(res, 200, {
        data: {
          ...req.user,
          token: jwt.sign(jwtData, process.env.SECRET_KEY as string, {
            expiresIn: '24h',
          }),
        },
      });
    } catch (errors) {
      errorResponse(res, 500, { errors });
    }
  }
}

export default new UserController();
