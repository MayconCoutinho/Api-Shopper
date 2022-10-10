import { ProductsDataBase } from "../database/ProductsDataBase"

export class ProductsBusiness {
    async getProducts(): Promise<any> {
        const getProductsDataBase = new ProductsDataBase()
        const result = await getProductsDataBase.getProducts()
        return result
    }
    async putProducts(): Promise<any> {
        const putProductsDataBase = new ProductsDataBase()
        const result = await putProductsDataBase.putProducts(12,2)
        return result
    }
}