import express, { Request, Response } from 'express';
import { productRoutes } from './app/modules/product/product.route';
import cors from 'cors';
const app = express();

//
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('I am running ');
});
app.use('/api/products', productRoutes);
export default app;
