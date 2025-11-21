import { Router } from 'express';
import { celebrate } from 'celebrate';
import { loginUserSchema, registerUserSchema } from '../validations/authValidation.js';
import { loginUser, logoutUser, refreshUserSession, registerUser } from '../controllers/authController.js';
import { authenticate } from '../middleware/authenticate.js';

const router = Router();

router.use('/notes', authenticate);

router.post('/auth/register', celebrate(registerUserSchema), registerUser);

router.post('/auth/login', celebrate(loginUserSchema), loginUser);

router.post('/auth/logout', logoutUser);

router.post('/auth/refresh', refreshUserSession);

export default router;
