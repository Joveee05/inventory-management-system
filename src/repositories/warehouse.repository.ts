import Warehouse from '../models/warehouse.model';

class WarehouseRepository {
  async findById(id: number) {
    return Warehouse.findByPk(id);
  }

  async findAll() {
    return Warehouse.findAll();
  }

  async create(warehouse: Partial<Warehouse>) {
    return Warehouse.create(warehouse);
  }

  async update(warehouse: Warehouse, updates: Partial<Warehouse>) {
    return warehouse.update(updates);
  }

  async delete(warehouse: Warehouse) {
    return warehouse.destroy();
  }
}

export default new WarehouseRepository();
