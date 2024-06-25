import { Router } from 'express';
import { createProduct,getoneproduct,deleteproduct,getall,updateProduct } from './Controllers/product.controllers.js';

const router = Router();

router.get('/',getall)

router.get('/:id',getoneproduct)

router.post('/',createProduct)

router.patch('/:id',updateProduct)

router.delete('/:id',deleteproduct )

export default router;
