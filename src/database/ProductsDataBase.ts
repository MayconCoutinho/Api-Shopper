import { BaseDataBase } from "./BaseDataBase"
import { PRODUCTS_LIST } from "./migrations/Migrations"

export class ProductsDataBase extends BaseDataBase {
    public async getProducts() {
        const result = await BaseDataBase.connection(PRODUCTS_LIST)
            .select('*')
        return result
    }
}