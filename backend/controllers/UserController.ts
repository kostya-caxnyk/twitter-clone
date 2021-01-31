import jwt from 'jsonwebtoken';
import express from 'express';
import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';

import { IUserModel } from '../models/UserModel';
import { transporter } from '../core/mailer';
import UserModel from '../models/UserModel';
import regEmail from '../emails/registration';
import { errorResponse, successResponse } from '../utils/sendResponse';
import TweetModel from '../models/TweetModel';

interface IJwtToken {
  _id: string;
  username: string;
  email: string;
}

class UserController {
  async getUsers(req: express.Request, res: express.Response): Promise<void> {
    try {
      const userFromReq = req.user as any;
      const user = await UserModel.findOne({ _id: userFromReq?._id });

      if (!user) {
        res.status(401).send();
        return;
      }

      const notRecomendedUsers = [...user.following, user._id];
      const limit = (req.query as any).to;
      const users = await UserModel.find({ _id: { $nin: notRecomendedUsers } })
        .sort({ createdAt: 1 })
        .limit(+limit)
        .exec();

      successResponse(res, 200, { data: users });
    } catch (errors) {
      errorResponse(res, 500, { errors });
    }
  }
  async createUser(req: express.Request, res: express.Response): Promise<void> {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        errorResponse(res, 400, { errors: errors.array()[0].msg });
        return;
      }

      const { email, password, name, username } = req.body;
      const data: IUserModel = {
        email,
        name,
        username,
        password: await bcrypt.hash(password, 10),
        confirmHash: await bcrypt.genSalt(8),
        confirmed: false,
        following: [],
        followers: [],
        tweets: [],
        likedTweets: [],
        comments: [],
      };

      const user = new UserModel(data);
      await user.save();

      const userWithoutPass: any = {
        ...user.toObject(),
      };
      delete userWithoutPass.password;
      delete userWithoutPass.confirmHash;

      const jwtData: IJwtToken = {
        email: user.email,
        username: user.username,
        _id: user._id,
      };

      successResponse(res, 201, {
        data: {
          ...userWithoutPass,
          token: jwt.sign(jwtData, process.env.SECRET_KEY as string, {
            expiresIn: '30d',
          }),
        },
      });

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
      const { username } = req.params;

      const user = await UserModel.findOne({ username }).exec();

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
      const user = req.user as any;
      if (!user) {
        errorResponse(res, 500);
        return;
      }

      const jwtData: IJwtToken = {
        email: user.email,
        username: user.username,
        _id: user._id,
      };

      successResponse(res, 200, {
        data: {
          ...user,
          token: jwt.sign(jwtData, process.env.SECRET_KEY as string, {
            expiresIn: '30d',
          }),
        },
      });
    } catch (errors) {
      errorResponse(res, 500, { errors });
    }
  }

  async getCurrentUser(req: express.Request, res: express.Response) {
    if (!req.user) {
      res.status(404).send();
      return;
    }

    const user = await UserModel.findById((req.user as any)._id);

    if (!user) {
      res.status(404).send();
      return;
    }

    successResponse(res, 200, { data: user });
  }

  async getUserTweets(req: express.Request, res: express.Response) {
    const username = req.params.username;

    if (!username) {
      res.status(401).send();
      return;
    }

    const user = await UserModel.findOne({ username }).lean().exec();

    if (!user) {
      res.status(404).send();
      return;
    }

    const tweets = await TweetModel.find({ user: user._id /* isComment: false */ })
      .populate('user')
      .sort({ createdAt: -1 })
      .lean()
      .exec();

    successResponse(res, 200, {
      data: tweets,
    });
  }

  async followUser(req: express.Request, res: express.Response) {
    const id = req.params.id;
    const userFromReq = req.user as any;

    const user = await UserModel.findOne({ _id: userFromReq?._id }).exec();
    if (!user) {
      res.status(404).send();
      return;
    }

    const followingUser = await UserModel.findOne({ _id: id }).exec();
    if (!followingUser) {
      res.status(404).send();
      return;
    }

    user.following.push(followingUser._id);
    followingUser.followers.push(user._id);

    await user.save();
    await followingUser.save();
    successResponse(res, 200, {
      data: user.following,
    });
  }

  async unFollowUser(req: express.Request, res: express.Response) {
    const id = req.params.id;
    const userFromReq = req.user as any;

    const user = await UserModel.findOne({ _id: userFromReq?._id }).exec();
    if (!user) {
      res.status(404).send();
      return;
    }

    const UnFollowingUser = await UserModel.findOne({ _id: id }).exec();
    if (!UnFollowingUser) {
      res.status(404).send();
      return;
    }

    user.following = user.following.filter(
      (_id) => _id.toString() !== UnFollowingUser._id.toString(),
    );
    UnFollowingUser.followers = UnFollowingUser.followers.filter(
      (_id) => _id.toString() !== user._id.toString(),
    );

    await user.save();
    await UnFollowingUser.save();
    successResponse(res, 200, {
      data: user.following,
    });
  }

  async editUserData(req: express.Request, res: express.Response) {
    const userFromReq = req.user as any;
    const { name, about, location, website, avatarUrl, backgroundUrl } = req.body;

    const user = await UserModel.findOne({ _id: userFromReq?._id }).exec();
    if (!user) {
      res.status(401).send();
      return;
    }

    user.avatarUrl = avatarUrl || user.avatarUrl;
    user.backgroundImgUrl = backgroundUrl || user.backgroundImgUrl;
    user.name = name;
    user.about = about;
    user.location = location;
    user.website = website;

    await user.save();

    successResponse(res, 200, {
      data: user,
    });
  }
}

export default new UserController();
