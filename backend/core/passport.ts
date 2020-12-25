import bcrypt from 'bcryptjs';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import UserModel, { IUserModel } from '../models/UserModel';
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(
  new LocalStrategy(
    async (username, password, done): Promise<void> => {
      try {
        const user = await UserModel.findOne({ $or: [{ username }, { email: username }] })
          .lean()
          .select('+password')
          .exec();
        if (!user) {
          return done(null, false);
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
          return done(null, false);
        }

        done(null, user);
      } catch (error) {
        done(error, false);
      }
    },
  ),
);

passport.serializeUser(function (user: IUserModel, done) {
  done(null, user?._id);
});

passport.deserializeUser(function (id, done) {
  UserModel.findById(id, function (err: any, user: IUserModel) {
    done(err, user);
  });
});

passport.use(
  new JWTstrategy(
    {
      secretOrKey: process.env.SECRET_KEY || '123',
      jwtFromRequest: ExtractJWT.fromHeader('token'),
    },
    async (token: any, done: any) => {
      try {
        return done(null, token);
      } catch (error) {
        done(error);
      }
    },
  ),
);

export { passport };
