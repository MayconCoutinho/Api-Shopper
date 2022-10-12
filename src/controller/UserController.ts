import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { ProductsUserReqDTO, UserReqDTO } from "../models/Products"

export class UserController {
    constructor(
        private userBusiness:UserBusiness
    ){}
    public getUser = async (req: Request, res: Response) => {
        try {
            const name: string = req.params.name
            
            const response = await this.userBusiness.getUser(name)
            res.status(201).send(response)
        } catch (error: any) {
            console.log(error)
            res.status(500).send(error)
        }
    }
    public getProductsUserQuantity = async (req: Request, res: Response) => {
        try {
            const name: string = req.params.name
            
            const response = await this.userBusiness.getProductsUserQuantity(name)
            res.status(201).send(response)
        } catch (error: any) {
            console.log(error)
            res.status(500).send(error)
        }
    }
    public getAllProductsUser = async (req: Request, res: Response) => {
        try {
            const id: string = req.params.id
            
            const response = await this.userBusiness.getAllProductsUser(id)
            res.status(201).send(response)
        } catch (error: any) {
            console.log(error)
            res.status(500).send(error)
        }
    }
    public getProductsPrice = async (req: Request, res: Response) => {
        try {
            const id: string = req.params.id
            const response = await this.userBusiness.getProductsPrice(id)
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