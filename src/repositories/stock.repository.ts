import Stock from '../models/stock.model';

class StockRepository {
  async findById(id: number) {
    return Stock.findByPk(id);
  }

  async findAll() {
    return Stock.findAll();
  }

  async create(stock: Partial<Stock>) {
    return Stock.create(stock);
  }

  async update(stock: Stock, updates: Partial<Stock>) {
    return stock.update(updates);
  }

  async delete(stock: Stock) {
    return stock.destroy();
  }
}

export default new StockRepository();
