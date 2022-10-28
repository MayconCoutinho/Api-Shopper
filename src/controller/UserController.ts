import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { BaseError } from "../errors/BaseError"
import { ProductsUserReqDTO } from "../models/Products"
import { UserReqDTO } from "../models/User"

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
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao pegar ao id do usuário" })
        }
    }
    public getProductsUserQuantity = async (req: Request, res: Response) => {
        try {
            const name: string = req.params.name
            const response = await this.userBusiness.getProductsUserQuantity(name)
            res.status(201).send(response)
        } catch (error: any) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao pegar a quantidade de produto do usuário" })
        }
    }
    public deleteProductsUser = async (req: Request, res: Response) => {
        try {
            const id: string = req.params.id
            const user: string = req.params.user
            const response = await this.userBusiness.deleteProductsUser(id, user)
            res.status(201).send(response)
        } catch (error: any) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao deletar o produto do usuário" })
        }
    }
    public getTotalProductsPrice = async (req: Request, res: Response) => {
        try {
            const id: string = req.params.id
            const response = await this.userBusiness.getTotalProductsPrice(id)
            res.status(201).send(response)
        } catch (error: any) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao pegar a somar total dos produtos usuário" })
        }
    }
    public putUpProductQuantity = async (req: Request, res: Response) => {
        try {
            const id = req.params.id
            const quantity = req.params.quantity
            const response = await this.userBusiness.putUpProductQuantity(id,quantity)
            res.status(201).send(response)
        } catch (error: any) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao mudar a quantidade do produto do usuário" })
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
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao criar um usuário" })
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
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao criar um produto do usuário" })
        }
    }
}