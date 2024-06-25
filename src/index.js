import express from 'express';
import Products from './Routes/products.routes.js';

const app = express();

app.use(express.json());  
app.use('/products', Products);

app.listen(3000, () => {
  console.log('App running on port 3000...');
});
