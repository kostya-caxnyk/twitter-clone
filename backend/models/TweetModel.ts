import { model, Schema, Document } from 'mongoose';

export interface ImageData {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface ITweetModel {
  user: string;
  text: string;
  likes: string[];
  retweets: string[];
  comments: string[];
  images: ImageData[];
  _id?: string;
}

export type ITweetDocumentModel = ITweetModel & Document;

const TweetSchema = new Schema<ITweetModel>(
  {
    text: {
      type: String,
    },
    user: {
      required: true,
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    images: [
      {
        id: String,
        url: String,
        height: Number,
        width: Number,
      },
    ],
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Tweet',
      },
    ],
    retweets: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  { timestamps: true },
);

export default model<ITweetDocumentModel>('Tweet', TweetSchema);
