import { Schema, model, Document, ObjectId } from 'mongoose';

export interface IUserModel {
  email: string;
  username: string;
  name: string;
  password: string;
  confirmHash: string;
  confirmed: boolean;
  following: string[];
  followers: string[];
  tweets: string[];
  likedTweets: string[];
  comments: string[];
  avatarUrl?: string;
  backgroundImgUrl?: string;
  location?: string;
  about?: string;
  website?: string;
  _id?: string;
  createdAt?: string;
}

type IUserDocumentModel = IUserModel & Document;

const UserSchema = new Schema<IUserModel>(
  {
    email: {
      required: true,
      unique: true,
      type: String,
    },
    username: {
      required: true,
      unique: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
      select: false,
    },
    avatarUrl: {
      type: String,
      default:
        'https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg',
    },
    confirmHash: {
      required: true,
      type: String,
      select: false,
    },
    confirmed: {
      type: Boolean,
      default: false,
    },
    following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    tweets: [{ type: Schema.Types.ObjectId, ref: 'Tweet' }],
    likedTweets: [{ type: Schema.Types.ObjectId, ref: 'Tweet' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Tweet' }],
    backgroundImgUrl: String,
    location: String,
    about: String,
    website: String,
  },
  { timestamps: true },
);

UserSchema.set('toJSON', {
  transform: function (_: any, obj: any) {
    delete obj.password;
    delete obj.confirmHash;
    return obj;
  },
});

export default model<IUserDocumentModel>('User', UserSchema);
