import { BaseDataBase } from "./BaseDataBase"
import { PRODUCTS_USER_LIST, USER_LIST } from "./migrations/Migrations"
import { ProductsUser, ProductsUserDTO } from "../models/Products"
import { User, UserDTO } from "../models/User"

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
    public async getUser(name:string) {
        const result = await BaseDataBase.connection.raw(`
        SELECT id FROM user
        WHERE name LIKE "${name}"; 
            `)
        return result[0]
    }
    public async getProductsUserQuantity(name:string) {
        const result = await BaseDataBase.connection.raw(`
        SELECT name, id_product, quantity, price FROM products_user
        INNER JOIN products 
        ON products_user.id_product = products.id AND products_user.id_user = "${name}";
            `)
        return result[0]
    }
    public async deleteProductsUser(id:string, user:string) {
        await BaseDataBase.connection.raw(`
        DELETE FROM products_user 
        WHERE id_user LIKE "${user}"
        AND id_product = "${id}"; 
            `)
        return `Produto Retirado Com Sucesso`
    }
    public async getTotalProductsPrice(id:string) {
        const result = await BaseDataBase.connection.raw(`
        SELECT SUM(quantity * price) AS "price_total" FROM products_user
        INNER JOIN products 
        ON products_user.id_product = products.id  
        INNER JOIN user
        ON products_user.id_user = user.id
        WHERE user.id = "${id}";
            `)
        return result[0]
    }
    public async putUpProductQuantity(id:string, quantity:string) {
        await BaseDataBase.connection.raw(`
        UPDATE products_user
        SET quantity = "${quantity}"
        WHERE id_product = "${id}";
        `)
        return `Quantidade mudada com sucesso`
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