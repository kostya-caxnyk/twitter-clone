import { ITweetModel } from './../models/TweetModel';
import { errorResponse, successResponse } from './../utils/sendResponse';
import express from 'express';
import TweetModel from '../models/TweetModel';
import { validationResult } from 'express-validator';
import { ObjectId, isValidObjectId } from 'mongoose';

interface IJwtToken {
  _id: ObjectId;
  username: string;
  name: string;
}

class TweetController {
  async getAllTweets(req: express.Request, res: express.Response) {
    try {
      const tweets = await TweetModel.find().exec();
      successResponse(res, 200, { data: tweets });
    } catch (errors) {
      errorResponse(res, 500, { errors });
    }
  }

  async getTweet(req: express.Request, res: express.Response) {
    try {
      const tweetId = req.params.id;
      const tweet = await TweetModel.findById(tweetId).exec();
      if (!tweet) {
        res.status(404).send();
        return;
      }

      successResponse(res, 200, { data: tweet });
    } catch (errors) {
      errorResponse(res, 500, { errors });
    }
  }

  async createTweet(req: express.Request, res: express.Response) {
    try {
      const user = req.user;

      if (!user) {
        res.status(401).send();
        return;
      }

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        errorResponse(res, 400, { errors });
        return;
      }

      const { text } = req.body;
      const data: ITweetModel = {
        text,
        owner: user._id,
      };

      const tweet = new TweetModel(data);
      await tweet.save();

      successResponse(res, 201, { data: tweet });
    } catch (errors) {
      errorResponse(res, 500, { errors });
    }
  }

  async deleteTweet(req: express.Request, res: express.Response) {
    const user = req.user;
    const id = req.params.id;

    if (!user || !isValidObjectId(id)) {
      res.status(401).send();
      return;
    }

    const tweet = await TweetModel.findById(id).exec();
    if (!tweet) {
      res.status(404).send();
      return;
    }

    const isOwner = tweet.owner.toString() === user._id;
    if (!isOwner) {
      res.status(403).send('Not an owner to delete this tweet');
      return;
    }

    await TweetModel.deleteOne({ _id: id });
    successResponse(res, 204);
    try {
    } catch (errors) {
      errorResponse(res, 500, { errors });
    }
  }
}

export default new TweetController();
