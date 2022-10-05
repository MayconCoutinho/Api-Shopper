import express from "express"
import { ProductsController } from "../controller/ProductsController"

export const productsRouter = express.Router()

const productsController = new ProductsController()

productsRouter.get("/products", productsController.getProducts)