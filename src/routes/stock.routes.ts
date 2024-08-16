import { Router } from 'express';
import {
  getAllStocks,
  getStockById,
  createStock,
  updateStock,
  deleteStock,
} from '../controllers/stock.controller';
import { authorize } from '../middlewares/auth.middleware';
import { UserRole } from '../types/customTypes';

const router = Router();

router.get(
  '/stocks',
  authorize([UserRole.ADMIN, UserRole.MANAGER]),
  getAllStocks
);
router.get(
  '/stocks/:id',
  authorize([UserRole.ADMIN, UserRole.MANAGER]),
  getStockById
);
router.post(
  '/stocks',
  authorize([UserRole.ADMIN, UserRole.MANAGER]),
  createStock
);
router.put(
  '/stocks/:id',
  authorize([UserRole.ADMIN, UserRole.MANAGER]),
  updateStock
);
router.delete('/stocks/:id', authorize([UserRole.ADMIN]), deleteStock);

export default router;
