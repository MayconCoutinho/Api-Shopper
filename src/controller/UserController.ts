import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { BaseError } from "../errors/BaseError"
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
            res.status(500).send(error)
        }
    }
    public getProductsUserQuantity = async (req: Request, res: Response) => {
        try {
            const name: string = req.params.name
            
            const response = await this.userBusiness.getProductsUserQuantity(name)
            res.status(201).send(response)
        } catch (error: any) {
            res.status(500).send(error)
        }
    }
    public deleteProductsUser = async (req: Request, res: Response) => {
        try {
            const id: string = req.params.id
            
            const response = await this.userBusiness.deleteProductsUser(id)
            res.status(201).send(response)
        } catch (error: any) {
            res.status(500).send(error)
        }
    }
    public getTotalProductsPrice = async (req: Request, res: Response) => {
        try {
            const id: string = req.params.id
            const response = await this.userBusiness.getTotalProductsPrice(id)
            res.status(201).send(response)
        } catch (error: any) {
            res.status(500).send(error)
        }
    }
    public putUpProductQuantity = async (req: Request, res: Response) => {
        try {
            const id = req.params.id
            const quantity = req.params.quantity
            const response = await this.userBusiness.putUpProductQuantity(id,quantity)
            res.status(201).send(response)
        } catch (error: any) {
            res.status(500).send(error)
        }
    }
    public putUpQtyStockQuantity = async (req: Request, res: Response) => {
        try {
            const id = req.params.id
            const quantity = req.params.quantity
            const response = await this.userBusiness.putUpQtyStockQuantity(id,quantity)
            res.status(201).send(response)
        } catch (error: any) {
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
            res.status(220).send({menssage : `O usuario já existe`})
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
            res.status(500).send(error)
        }
    }
}