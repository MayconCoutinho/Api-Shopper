import express from "express"
import { UserController } from "../controller/UserController"
import { UserBusiness } from "../business/UserBusiness"
import { UserDataBase } from "../database/UserDataBase"
import { IdGenerator } from '../services/IdGenerator'

export const userRouter = express.Router()

const userController = new UserController(
    new UserBusiness(
        new IdGenerator(),
        new UserDataBase()
    )
)
userRouter.get("/:name", userController.getUser)
userRouter.get("/products/:name", userController.getProductsUserQuantity)
userRouter.get("/product/total/price/:id", userController.getTotalProductsPrice)

userRouter.post("/products", userController.postProductsUser)
userRouter.post("/", userController.postUser)

userRouter.put("/:id/:quantity", userController.putUpProductQuantity)

userRouter.delete("/products/:id/:user", userController.deleteProductsUser)

