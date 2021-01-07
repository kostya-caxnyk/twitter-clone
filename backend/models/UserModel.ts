import { Schema, model, Document } from 'mongoose';

export interface IUserModel {
  email: string;
  username: string;
  name: string;
  password: string;
  avatarUrl?: string;
  confirmHash: string;
  confirmed: boolean;
  location?: string;
  about?: string;
  website?: string;
  _id?: string;
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
