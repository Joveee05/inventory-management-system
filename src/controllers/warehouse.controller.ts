import { Request, Response } from 'express';
import WarehouseService from '../services/warehouse.service';

export const getAllWarehouses = async (req: Request, res: Response) => {
  try {
    const warehouses = await WarehouseService.getAllWarehouses();
    res.json(warehouses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getWarehouseById = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const warehouse = await WarehouseService.getWarehouseById(
      parseInt(req.params.id)
    );
    if (!warehouse) {
      return res.status(404).json({ error: 'Warehouse not found' });
    }
    res.json(warehouse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createWarehouse = async (req: Request, res: Response) => {
  try {
    const newWarehouse = await WarehouseService.createWarehouse(req.body);
    res.status(201).json(newWarehouse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateWarehouse = async (req: Request, res: Response) => {
  try {
    const updatedWarehouse = await WarehouseService.updateWarehouse(
      parseInt(req.params.id),
      req.body
    );
    res.json(updatedWarehouse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteWarehouse = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    await WarehouseService.deleteWarehouse(parseInt(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
