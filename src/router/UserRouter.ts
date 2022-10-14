import express from "express"
import { ProductsController } from "../controller/ProductsController"
import { UserController } from "../controller/UserController"
import { UserBusiness } from "../business/UserBusiness"
import { IdGenerator } from '../services/IdGenerator'
import { UserDataBase } from "../database/UserDataBase"

export const userRouter = express.Router()

const productsController = new ProductsController()

const userController = new UserController(
    new UserBusiness(
        new IdGenerator(),
        new UserDataBase()
    )
)
userRouter.get("/products", productsController.getProducts)
userRouter.get("/user/:name", userController.getUser)
userRouter.get("/user/products/:name", userController.getProductsUserQuantity)
userRouter.get("/product/total/price/:id", userController.getTotalProductsPrice)

userRouter.post("/user/products", userController.postProductsUser)
userRouter.post("/user", userController.postUser)

userRouter.put("/user/:id/:quantity", userController.putUpProductQuantity)

userRouter.put("/products/:id/:quantity", userController.putUpQtyStockQuantity)


userRouter.delete("/user/products/:id", userController.deleteProductsUser)

