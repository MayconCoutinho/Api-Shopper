import express from "express"
import { ProductsBusiness } from "../business/ProductsBusiness"
import { ProductsController } from "../controller/ProductsController"
import { ProductsDataBase } from "../database/ProductsDataBase"

export const productsRouter = express.Router()

const productsController = new ProductsController(
    new ProductsBusiness(
        new ProductsDataBase()
    )
)
productsRouter.get("/", productsController.getProducts)
productsRouter.put("/:id/:quantity", productsController.putUpQtyStockQuantity)