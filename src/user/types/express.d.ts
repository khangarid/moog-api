import { UserDocument } from '../models';

declare global {
  namespace Express {
    export interface Request {
      currentUser: UserDocument;
    }    
  }
}