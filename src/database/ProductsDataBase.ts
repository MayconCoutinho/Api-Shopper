import { BaseDataBase } from "./BaseDataBase"
import { PRODUCTS_LIST } from "./migrations/Migrations"

export class ProductsDataBase extends BaseDataBase {
    public async getProducts() {
        const result = await BaseDataBase.connection(PRODUCTS_LIST)
            .select('*')
        return result
    }
    public async putProducts(id:number, quantity:number) {
        const result = await BaseDataBase.connection(PRODUCTS_LIST)
            .update({
                qty_stock: quantity
            })
            .where("id",id)
        return result
    }
}