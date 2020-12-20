import express from 'express';
import UserModel from '../models/UserModel';

class UserController {
  async getUsers(_: any, res: express.Response): Promise<void> {
    try {
      const users = await UserModel.find().exec();
      res.json({
        status: 'success',
        data: users,
      });
    } catch (error) {
      res.json({
        status: 'error',
        error: JSON.stringify(error),
      });
    }
  }
  async createUser(req: express.Request, res: express.Response): Promise<void> {
    try {
      const user = new UserModel({});
      await user.save();
    } catch (error) {}
  }
}

export default new UserController();
