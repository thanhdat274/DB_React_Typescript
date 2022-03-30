import express from 'express'
import { AddProduct, DeleteProduct, ListProduct, ListProductDetail, UpdateProduct } from '../controllers/product';

const productRouter = express.Router();

productRouter.get('/products', ListProduct)
productRouter.post('/products', AddProduct)
productRouter.get('/products/:id', ListProductDetail)
productRouter.delete('/products/:id', DeleteProduct)
productRouter.put('/products/:id', UpdateProduct)

export default productRouter