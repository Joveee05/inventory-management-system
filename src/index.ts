import express from 'express';
import userRoutes from './routes/user.routes';
import productRoutes from './routes/product.routes';
import warehouseRoutes from './routes/warehouse.routes';
import stockRoutes from './routes/stock.routes';
import { synchronizeDatabase } from './config/database';
import { errorHandler } from './utils/errorHandler';

const { PORT } = process.env;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', warehouseRoutes);
app.use('/api', stockRoutes);

synchronizeDatabase().then(() => {
  app.listen(PORT || 3000, () => {
    console.log(`Server running on port ${PORT}`);
  });

  app.use(errorHandler);
});
