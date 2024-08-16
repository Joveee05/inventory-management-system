import WarehouseRepository from '../repositories/warehouse.repository';
import Warehouse from '../models/warehouse.model';

class WarehouseService {
  async getAllWarehouses() {
    return WarehouseRepository.findAll();
  }

  async getWarehouseById(id: number) {
    const warehouse = await WarehouseRepository.findById(id);
    if (!warehouse) throw new Error('Warehouse not found');
    return warehouse;
  }

  async createWarehouse(warehouse: Partial<Warehouse>) {
    return WarehouseRepository.create(warehouse);
  }

  async updateWarehouse(id: number, updates: Partial<Warehouse>) {
    const warehouse = await WarehouseRepository.findById(id);
    if (!warehouse) throw new Error('Warehouse not found');

    return WarehouseRepository.update(warehouse, updates);
  }

  async deleteWarehouse(id: number) {
    const warehouse = await WarehouseRepository.findById(id);
    if (!warehouse) throw new Error('Warehouse not found');

    return WarehouseRepository.delete(warehouse);
  }
}

export default new WarehouseService();
