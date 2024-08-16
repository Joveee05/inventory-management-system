import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductService.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProductById = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const product = await ProductService.getProductById(
      parseInt(req.params.id)
    );
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = await ProductService.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const updatedProduct = await ProductService.updateProduct(
      parseInt(req.params.id),
      req.body
    );
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProduct = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    await ProductService.deleteProduct(parseInt(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
