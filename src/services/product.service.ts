import ProductRepository from '../repositories/product.repository';
import Product from '../models/product.model';

class ProductService {
  async getAllProducts() {
    return ProductRepository.findAll();
  }

  async getProductById(id: number) {
    const product = await ProductRepository.findById(id);
    if (!product) throw new Error(`Product with id: ${id} not found`);
    return product;
  }

  async createProduct(product: Partial<Product>) {
    return ProductRepository.create(product);
  }

  async updateProduct(id: number, data: Partial<Product>) {
    const product = await ProductRepository.findById(id);
    if (!product) throw new Error(`Product with id: ${id} not found`);

    return ProductRepository.update(product, data);
  }

  async deleteProduct(id: number) {
    const product = await ProductRepository.findById(id);
    if (!product) throw new Error(`Product with id: ${id} not found`);

    return ProductRepository.delete(product);
  }
}

export default new ProductService();
