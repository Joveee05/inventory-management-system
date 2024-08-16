import { Router } from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/product.controller';
import { authorize } from '../middlewares/auth.middleware';
import { UserRole } from '../types/customTypes';

const router = Router();

router.get(
  '/products',
  authorize([UserRole.ADMIN, UserRole.MANAGER]),
  getAllProducts
);
router.get(
  '/products/:id',
  authorize([UserRole.ADMIN, UserRole.MANAGER]),
  getProductById
);
router.post(
  '/products',
  authorize([UserRole.ADMIN, UserRole.MANAGER]),
  createProduct
);
router.put(
  '/products/:id',
  authorize([UserRole.ADMIN, UserRole.MANAGER]),
  updateProduct
);
router.delete('/products/:id', authorize([UserRole.ADMIN]), deleteProduct);

export default router;
