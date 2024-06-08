import express from 'express';
import { productControllers } from './product.controller';

const router = express.Router();

// save product
router.post('/create-product', productControllers.createProduct);
// get all products
router.get('/', productControllers.getProducts);

// search products
router.get('/search-product', productControllers.searchProducts);

// get single product
router.get('/:productId', productControllers.getSingleProduct);

// update single product
router.put('/:productId', productControllers.updateProduct);

// delete single product
router.delete('/:productId', productControllers.deleteProduct);

export const productRoutes = router;
