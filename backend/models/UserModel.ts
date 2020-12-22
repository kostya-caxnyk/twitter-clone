import { Schema, model, Document } from 'mongoose';

interface IUserModel {
  email: string;
  username: string;
  name: string;
  password: string;
  confirmHash: string;
  confirmed: boolean;
  location?: string;
  about?: string;
  website?: string;
}

type IUserDocumentModel = IUserModel & Document;

const UserSchema = new Schema<IUserModel>({
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
  },
  confirmHash: {
    required: true,
    type: String,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
  location: String,
  about: String,
  website: String,
});

export default model<IUserDocumentModel>('User', UserSchema);
