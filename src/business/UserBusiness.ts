import { UserDataBase } from "../database/UserDataBase"
import { ProductsUserReqDTO, ProductsUserOutputDTO, UserReqDTO,User } from "../models/Products"
import { IdGenerator } from "../services/IdGenerator"
import { ProductsUser } from "../models/Products"

export class UserBusiness {
    constructor(
        private idGenerator: IdGenerator,
        private userDataBase:UserDataBase
    ) {}
    async getUser(name:string): Promise<any> {
        const response = await this.userDataBase.getUser(name)
        return response
    }
    async getProductsUserQuantity(name:string): Promise<any> {
        const response = await this.userDataBase.getProductsUserQuantity(name)
        return response
    }
    async deleteProductsUser(id:string): Promise<any> {
        const response = await this.userDataBase.deleteProductsUser(id)
        return response
    }
    async getTotalProductsPrice(id:string): Promise<any> {
        const response = await this.userDataBase.getTotalProductsPrice(id)
        return response
    }
    async putUpProductQuantity(id:string, quantity:string): Promise<any> {
        const response = await this.userDataBase.putUpProductQuantity(id,quantity)
        return response
    }
    async putUpQtyStockQuantity(id:string, quantity:string): Promise<any> {
        const response = await this.userDataBase.putUpQtyStockQuantity(id,quantity)
        return response
    }
    async postUser(input: UserReqDTO ): Promise<ProductsUserOutputDTO> {
        const {name,delivery_date} = input
        const id = this.idGenerator.generate()
        const user = new User (
            id,
            name,
            delivery_date
        )
        const postProductsDataBase = new UserDataBase()
        await postProductsDataBase.postUser(user)
        const response : ProductsUserOutputDTO = {
            message: "Usuario Adicionado Com Sucesso"
        }
        return response
    }
    async postProductsUser(input: ProductsUserReqDTO ): Promise<ProductsUserOutputDTO> {
        const {id_product,id_user} = input
        const id = this.idGenerator.generate()
        const quantity = 1
        const productsUser = new ProductsUser(
            id,
            id_product,
            id_user,
            quantity
        )
        const postProductsDataBase = new UserDataBase()
        await postProductsDataBase.postProductsUser(productsUser)
        const response : ProductsUserOutputDTO = {
            message: "Produto adicionado ao carrinho com sucesso"
        }
        return response
    }
}