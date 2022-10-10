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
userRouter.get("/user/products", userController.getProductsUser)
userRouter.get("/user", userController.getUser)
userRouter.post("/user/products", userController.postProductsUser)
userRouter.post("/user", userController.postUser)

