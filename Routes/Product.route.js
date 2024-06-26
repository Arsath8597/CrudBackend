import express from 'express'
import { CreateProduct, DeleteProduct, UpdateProduct, getProduct} from '../Controllers/product.controller.js'


const router = express.Router();


router.post('/product', CreateProduct);
router.get('/product', getProduct);
router.delete('/product/:id', DeleteProduct);
router.put('/product/:id', UpdateProduct);


export default router;