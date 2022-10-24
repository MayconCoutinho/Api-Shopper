export type Product = {
    id: number,
    name: string,
    price: number,
    qty_stock: number
}
export interface ProductsUserReqDTO {
    id_product: number,
    id_user: number
}
export interface ProductsUserDTO {
    id: string,
    id_product: number,
    id_user: number,
    quantity: number
}
export type ProductsUserOutputDTO = {
    message: string
}
export class ProductsUser {
    constructor(
        private id: string,
        private id_product: number,
        private id_user:number,
        private quantity:number
    ){}
    public getId = () => {
        return this.id
    }
    public getIdProduct = () => {
        return this.id_product
    }
    public getIdUser = () => {
        return this.id_user
    }
    public getQuantity = () => {
        return this.quantity
    }
    public setQuantity = (newQuantity:number) => {
        this.quantity = newQuantity
    }
}