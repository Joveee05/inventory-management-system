import Product from '../models/product.model';

class ProductRepository {
  async findById(id: number) {
    return Product.findByPk(id);
  }

  async findAll() {
    return Product.findAll();
  }

  async create(product: Partial<Product>) {
    return Product.create(product);
  }

  async update(product: Product, updates: Partial<Product>) {
    return product.update(updates);
  }

  async delete(product: Product) {
    return product.destroy();
  }
}

export default new ProductRepository();
