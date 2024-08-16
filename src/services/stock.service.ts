import StockRepository from '../repositories/stock.repository';
import Stock from '../models/stock.model';

class StockService {
  async getAllStocks() {
    return StockRepository.findAll();
  }

  async getStockById(id: number) {
    const stock = await StockRepository.findById(id);
    if (!stock) throw new Error('Stock not found');
    return stock;
  }

  async createStock(stock: Partial<Stock>) {
    return StockRepository.create(stock);
  }

  async updateStock(id: number, updates: Partial<Stock>) {
    const stock = await StockRepository.findById(id);
    if (!stock) throw new Error('Stock not found');

    return StockRepository.update(stock, updates);
  }

  async deleteStock(id: number) {
    const stock = await StockRepository.findById(id);
    if (!stock) throw new Error('Stock not found');

    return StockRepository.delete(stock);
  }
}

export default new StockService();
