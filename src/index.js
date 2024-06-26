import express from 'express';
import ProductsRouter from './Routes/products.routes.js';
import { config } from 'dotenv';

config()
const app = express();

app.use(express.json());  
app.use('/products', ProductsRouter);

app.listen(3000, () => {
  console.log('App running on port 3000...');
});
