import { Request, Response } from 'express';
import StockService from '../services/stock.service';

export const getAllStocks = async (req: Request, res: Response) => {
  try {
    const stocks = await StockService.getAllStocks();
    res.json(stocks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getStockById = async (req: Request, res: Response) => {
  try {
    const stock = await StockService.getStockById(parseInt(req.params.id));
    if (!stock) {
      return res.status(404).json({ error: 'Stock not found' });
    }
    res.json(stock);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createStock = async (req: Request, res: Response) => {
  try {
    const newStock = await StockService.createStock(req.body);
    res.status(201).json(newStock);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateStock = async (req: Request, res: Response) => {
  try {
    const updatedStock = await StockService.updateStock(
      parseInt(req.params.id),
      req.body
    );
    res.json(updatedStock);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteStock = async (req: Request, res: Response) => {
  try {
    await StockService.deleteStock(parseInt(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
