import express from "express";
const router = express.Router();
import * as productController from "../controllers/productController";
import * as orderController from "../controllers/orderController";

router.get("/show", productController.showData);
router.get("/show/:id", productController.showIdData);
router.post("/create", productController.createData);
router.put("/update/:id", productController.updateData);
router.delete("/delete/:id", productController.deleteData);

router.post("/addProduct", orderController.createData);
router.get("/showProduct", orderController.showData);
router.delete("/deleteProduct/:id", orderController.deleteData);

export default router;
