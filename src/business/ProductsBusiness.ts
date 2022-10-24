import { ProductsDataBase } from "../database/ProductsDataBase"

export class ProductsBusiness {
    constructor(
        private productsDataBase: ProductsDataBase
    ) {}
    async getProducts(): Promise<any> {
        const result = await this.productsDataBase.getProducts()
        return result
    }
    async putUpQtyStockQuantity(id:string, quantity:string): Promise<any> {
        const result = await this.productsDataBase.putUpQtyStockQuantity(id,quantity)
        return result
    }
}