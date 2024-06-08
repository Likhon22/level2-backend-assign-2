import express, { Request, Response } from 'express';
import { productRoutes } from './app/modules/product/product.route';
import cors from 'cors';
import { orderRoutes } from './app/modules/order/order.routes';
const app = express();

//
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('I am running ');
});
// product routes
app.use('/api/products', productRoutes);

// order routes
app.use('/api/orders', orderRoutes);

app.all('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Page not found',
  });
});
export default app;
