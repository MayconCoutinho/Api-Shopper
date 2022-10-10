import { BaseDataBase } from "./BaseDataBase"
import { PRODUCTS_USER_LIST, USER_LIST } from "./migrations/Migrations"
import { ProductsUser, ProductsUserDTO, User, UserDTO } from "../models/Products"

export class UserDataBase extends BaseDataBase {
    public toProductsUserDBModel = (productsUser:ProductsUser): ProductsUserDTO => {
        const productsUserDB: ProductsUserDTO = {
            id: productsUser.getId(),
            id_product: productsUser.getIdProduct(),
            id_user:productsUser.getIdUser(),
            quantity:productsUser.getQuantity()
        }
        return productsUserDB
    }
    public UserDBModel = (user:User): UserDTO => {
        const userDB : UserDTO = {
            id: user.getId(),
            name: user.getName(),
            delivery_date: user.getDeliveryDate()
        }
        return userDB
    }
    public async getProductsUser() {
        const result = await BaseDataBase.connection(PRODUCTS_USER_LIST)
            .select('*')
        return result
    }
    public async getUser() {
        const result = await BaseDataBase.connection(USER_LIST)
            .select('*')
        return result
    }
    public async postUser(user:User) {
        const UserDB = this.UserDBModel(user)
        const result = await BaseDataBase.connection(USER_LIST)
            .insert(UserDB)
        return result
    }
    public async postProductsUser(productsUser:ProductsUser) {
        const productsUserDB = this.toProductsUserDBModel(productsUser)
        const result = await BaseDataBase.connection(PRODUCTS_USER_LIST)
            .insert(productsUserDB)
        return result
    }
    public async putProducts(id:number, quantity:number) {
         const result = await BaseDataBase.connection(PRODUCTS_USER_LIST)
             .update({
                 qty_stock: quantity
             })
             .where("id",id)
         return result
    }
}