import { Router } from 'express';
import {
  register,
  login,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from '../controllers/user.controller';
import { authorize } from '../middlewares/auth.middleware';
import { UserRole } from '../types/customTypes';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users', authorize([UserRole.ADMIN]), getAllUsers);
router.get(
  '/users/:id',
  authorize([UserRole.ADMIN, UserRole.MANAGER]),
  getUserById
);
router.put(
  '/users/:id',
  authorize([UserRole.ADMIN, UserRole.USER]),
  updateUser
);
router.delete('/users/:id', authorize([UserRole.ADMIN]), deleteUser);

export default router;
