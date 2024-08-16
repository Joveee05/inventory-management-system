import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Warehouse extends Model {
  public id!: number;
  public name!: string;
  public location!: string;
  public capacity!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Warehouse.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Warehouse',
    timestamps: true,
  }
);

export default Warehouse;
