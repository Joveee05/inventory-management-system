import { Router } from 'express';
import {
  getAllWarehouses,
  getWarehouseById,
  createWarehouse,
  updateWarehouse,
  deleteWarehouse,
} from '../controllers/warehouse.controller';
import { authorize } from '../middlewares/auth.middleware';
import { UserRole } from '../types/customTypes';

const router = Router();

router.get(
  '/warehouses',
  authorize([UserRole.ADMIN, UserRole.MANAGER]),
  getAllWarehouses
);
router.get(
  '/warehouses/:id',
  authorize([UserRole.ADMIN, UserRole.MANAGER]),
  getWarehouseById
);
router.post(
  '/warehouses',
  authorize([UserRole.ADMIN, UserRole.MANAGER]),
  createWarehouse
);
router.put(
  '/warehouses/:id',
  authorize([UserRole.ADMIN, UserRole.MANAGER]),
  updateWarehouse
);
router.delete('/warehouses/:id', authorize([UserRole.ADMIN]), deleteWarehouse);

export default router;
