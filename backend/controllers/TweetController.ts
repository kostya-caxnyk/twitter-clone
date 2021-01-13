import { ITweetModel } from './../models/TweetModel';
import { errorResponse, successResponse } from './../utils/sendResponse';
import express from 'express';
import TweetModel from '../models/TweetModel';
import { validationResult } from 'express-validator';
import { ObjectId, isValidObjectId } from 'mongoose';
import UserModel from '../models/UserModel';

interface IJwtToken {
  _id: ObjectId;
  username: string;
  name: string;
}

class TweetController {
  async getAllTweets(req: express.Request, res: express.Response) {
    try {
      const tweets = await TweetModel.find({}).populate('user').sort({ createdAt: -1 }).exec();
      successResponse(res, 200, { data: tweets });
    } catch (errors) {
      errorResponse(res, 500, { errors });
    }
  }

  async getTweet(req: express.Request, res: express.Response) {
    try {
      const tweetId = req.params.id;
      const tweet = await TweetModel.findById(tweetId).populate('user').exec();
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

      const { text, images } = req.body;
      const data: ITweetModel = {
        text,
        user: user._id,
        images: images,
        likes: [],
        retweets: [],
        comments: [],
      };

      const tweet = new TweetModel(data);
      await tweet.save();

      const author = await UserModel.findById(user._id);
      author?.tweets.push(tweet._id);
      await author?.save();
      successResponse(res, 201, { data: await tweet.populate('user').execPopulate() });
    } catch (errors) {
      errorResponse(res, 500, { errors });
    }
  }

  async deleteTweet(req: express.Request, res: express.Response) {
    const user = req.user;
    const tweetId = req.params.id;

    if (!user) {
      res.status(401).send();
      return;
    }

    const tweet = await TweetModel.findById(tweetId).exec();
    if (!tweet) {
      res.status(404).send();
      return;
    }

    const isOwner = tweet.user.toString() === user._id;
    const userDoc = await UserModel.findById(user._id);
    if (!isOwner || !userDoc) {
      res.status(403).send('Not an author to delete this tweet');
      return;
    }

    const newTweets = userDoc.tweets.filter((id) => id.toString() !== tweet._id.toString());
    userDoc.tweets = newTweets;

    await userDoc.save();
    await tweet.remove();
    successResponse(res, 204);
    try {
    } catch (errors) {
      errorResponse(res, 500, { errors });
    }
  }

  async likeTweet(req: express.Request, res: express.Response) {
    const user = req.user;
    const tweetId = req.params.id;

    if (!user) {
      res.status(401).send();
      return;
    }

    const tweet = await TweetModel.findById(tweetId).exec();
    if (!tweet) {
      res.status(404).send();
      return;
    }

    const userDoc = await UserModel.findById(user._id);
    if (!userDoc) {
      res.status(401).send();
      return;
    }

    tweet.likes.push(userDoc._id);
    userDoc.likedTweets.push(tweet._id);

    await userDoc.save();
    await tweet.save();
    successResponse(res, 200, { data: userDoc.likedTweets });
    try {
    } catch (errors) {
      errorResponse(res, 500, { errors });
    }
  }

  async dislikeTweet(req: express.Request, res: express.Response) {
    const user = req.user;
    const tweetId = req.params.id;

    if (!user) {
      res.status(401).send();
      return;
    }

    const tweet = await TweetModel.findById(tweetId).exec();
    if (!tweet) {
      res.status(404).send();
      return;
    }

    const userDoc = await UserModel.findById(user._id);
    if (!userDoc) {
      res.status(401).send();
      return;
    }

    tweet.likes = tweet.likes.filter((id) => id.toString() !== userDoc._id.toString());
    userDoc.likedTweets = userDoc.likedTweets.filter(
      (id) => id.toString() !== tweet._id.toString(),
    );

    await userDoc.save();
    await tweet.save();
    successResponse(res, 200, { data: userDoc.likedTweets });
    try {
    } catch (errors) {
      errorResponse(res, 500, { errors });
    }
  }

  async addComment(req: express.Request, res: express.Response) {
    try {
      const author = await UserModel.findById(req.user?._id);
      if (!author) {
        res.status(401).send();
        return;
      }

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        errorResponse(res, 400, { errors });
        return;
      }

      const { text, images } = req.body;
      const commentedTweetId = req.params.id;

      const commentedTweet = await TweetModel.findById(commentedTweetId);
      if (!commentedTweet) {
        res.status(404).send();
        return;
      }

      const data: ITweetModel = {
        text,
        user: author._id,
        images: images,
        likes: [],
        retweets: [],
        comments: [],
        commentTo: commentedTweetId,
        isComment: true,
      };

      const comment = new TweetModel(data);
      await comment.save();

      author.comments.push(comment._id);
      commentedTweet.comments.push(comment._id);
      await author.save();
      await commentedTweet.save();

      successResponse(res, 201, { data: await comment.populate('user').execPopulate() });
    } catch (errors) {
      errorResponse(res, 500, { errors });
    }
  }
}

export default new TweetController();
