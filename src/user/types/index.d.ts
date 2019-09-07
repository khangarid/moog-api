import { Document, Model } from 'mongoose';
import { IUser } from '../interfaces/IUser';

declare global {
  namespace Express {
    export interface Request {
      currentUser: UserTypes.UserDocument;
    }    
  }

  namespace UserTypes {
    export type UserDocument = Document & IUser
    export type UserModel = Model<UserDocument>;
  }
}