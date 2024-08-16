import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Product from './product.model';
import Warehouse from './warehouse.model';

class Stock extends Model {
  public id!: number;
  public productId!: number;
  public warehouseId!: number;
  public quantity!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Stock.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: 'id',
      },
      allowNull: false,
    },
    warehouseId: {
      type: DataTypes.INTEGER,
      references: {
        model: Warehouse,
        key: 'id',
      },
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Stock',
    timestamps: true,
  }
);

// Setting up associations
Product.hasMany(Stock, { foreignKey: 'productId' });
Warehouse.hasMany(Stock, { foreignKey: 'warehouseId' });
Stock.belongsTo(Product, { foreignKey: 'productId' });
Stock.belongsTo(Warehouse, { foreignKey: 'warehouseId' });

export default Stock;
