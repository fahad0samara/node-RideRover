import express from 'express';
import * as productController from '../controllers/BikeController';
import multer from 'multer';
import { searchBikes } from '../controllers/BikeController';

const router = express.Router();
const upload = multer();

// GET all categories
router.get("/categories", productController.getAllCategories);

// GET all products without pagination
router.get("/all", productController.getAllProductsNoPagination);

// GET all products (paginated)
router.get("/", productController.getAllProducts);

//search 
router.get("/search", searchBikes);


// GET a single product by ID
router.get("/:id", productController.getProductById);

// POST a new product
router.post("/", upload.single("image"), productController.createProduct);

// PUT update a product by ID
router.put("/:id", upload.single("image"), productController.updateProductById);

// DELETE a product by ID
router.delete("/:id", productController.deleteProductById);

export default router;
