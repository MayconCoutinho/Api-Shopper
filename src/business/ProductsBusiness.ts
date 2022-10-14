import { ProductsDataBase } from "../database/ProductsDataBase"

export class ProductsBusiness {
    async getProducts(): Promise<any> {
        const getProductsDataBase = new ProductsDataBase()
        const result = await getProductsDataBase.getProducts()
        return result
    }
}