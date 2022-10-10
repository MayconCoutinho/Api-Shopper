import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { ProductsUserReqDTO, UserReqDTO } from "../models/Products"

export class UserController {
    constructor(
        private userBusiness:UserBusiness
    ){}
    public getProductsUser = async (req: Request, res: Response) => {
        try {
            const response = await this.userBusiness.getProductsUser()
            res.status(201).send(response)
        } catch (error: any) {
            console.log(error)
            res.status(500).send(error)
        }
    }
    public getUser = async (req: Request, res: Response) => {
        try {
            const response = await this.userBusiness.getUser()
            res.status(201).send(response)
        } catch (error: any) {
            console.log(error)
            res.status(500).send(error)
        }
    }
    public postUser = async (req: Request, res: Response) => {
        try {
            const input: UserReqDTO = {
                name: req.body.name,
                delivery_date: req.body.delivery_date
            }
            const response = await this.userBusiness.postUser(input)
            res.status(201).send(response)
        } catch (error: any) {
            console.log(error)
            res.status(500).send(error)
        }
    }
    public postProductsUser = async (req: Request, res: Response) => {
        try {
            const input: ProductsUserReqDTO = {
                id_product: req.body.id_product,
                id_user: req.body.id_user
            }
            const response = await this.userBusiness.postProductsUser(input)
            res.status(201).send(response)
        } catch (error: any) {
            console.log(error)
            res.status(500).send(error)
        }
    }
}