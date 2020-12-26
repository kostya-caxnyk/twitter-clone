import { model, Schema, Document } from 'mongoose';

export interface ITweetModel {
  user: string;
  text: string;
  // likes: {
  //   count: number;
  //   users: [IUserModel];
  // };
  // retweets: number;
  // comments: number;
  _id?: string;
}

export type ITweetDocumentModel = ITweetModel & Document;

const TweetSchema = new Schema<ITweetModel>(
  {
    text: {
      required: true,
      type: String,
    },
    user: {
      required: true,
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true },
);

export default model<ITweetDocumentModel>('Tweet', TweetSchema);
