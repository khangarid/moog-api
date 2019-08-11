import { Router } from 'express';
import { authRoutes as auth } from './authRoutes';

export const authRoutes = () => {
	const router = Router();

  auth(router);

	return router;
}