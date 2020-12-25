import { model, Schema, Document } from 'mongoose';

export interface ITweetModel {
  owner: string;
  text: string;
  date?: Date;
  // likes: {
  //   count: number;
  //   users: [IUserModel];
  // };
  // retweets: number;
  // comments: number;
  _id?: string;
}

export type ITweetDocumentModel = ITweetModel & Document;

const TweetSchema = new Schema<ITweetModel>({
  text: {
    required: true,
    type: String,
  },
  owner: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default model<ITweetDocumentModel>('Tweet', TweetSchema);
