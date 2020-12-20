import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  _id: {
    required: true,
    unique: true,
    type: String,
  },
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
  confirmed_hash: {
    required: true,
    type: String,
  },
  confirmed: Boolean,
  location: String,
  about: String,
  website: String,
});

export default model('User', UserSchema);
